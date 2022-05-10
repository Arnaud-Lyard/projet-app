<?php

namespace App\Controller;

use App\Entity\Image;
use App\Form\ImageType;
use App\Repository\ImageRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\ORM\EntityManagerInterface;

/**
 * @Route("/image")
 */
class ImageController extends AbstractController
{
    private $entityManager;

    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;
    }
    /**
     * @Route("/", name="app_image_index", methods={"GET"})
     */
    public function index(ImageRepository $imageRepository): Response
    {
        return $this->render('image/index.html.twig', [
            'images' => $imageRepository->findAll(),
        ]);
    }

    /**
     * @Route("/new", name="app_image_new", methods={"GET", "POST"})
     */
    public function new(Request $request): Response
    {
        $image = new Image();
        $form = $this->createForm(ImageType::class, $image);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {


            // On récupère les données
            $name = $form['name']->getData();
            $period = $form['Period']->getData();

            // On récupère l'image transmise
            $image = $form['Illustration']->getData();

            // On génère un nouveau nom de fichier
            $fichier = md5(uniqid()).'.'.$image->guessExtension();
      
            // On copie le fichier dans le dossier assets
            $image->move(
                $this->getParameter('images_directory'),
                $fichier
            );
            
            // On crée l'image dans la base de données
            $img = new Image();
            $img->setName($name);
            $img->setPeriod($period);
            $img->setIllustration($fichier);


            $this->entityManager->persist($img);
            $this->entityManager->flush();

            return $this->redirectToRoute('app_image_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('image/new.html.twig', [
            'image' => $image,
            'form' => $form,
        ]);
    }

    /**
     * @Route("/{id}", name="app_image_show", methods={"GET"})
     */
    public function show(Image $image): Response
    {
        return $this->render('image/show.html.twig', [
            'image' => $image,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="app_image_edit", methods={"GET", "POST"})
     */
    public function edit(Request $request, Image $image, ImageRepository $imageRepository, $id): Response
    {
        $form = $this->createForm(ImageType::class, $image);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {


            $imageid = $this->entityManager->getRepository(Image::class)->findOneById($id);

            // On récupère les données
            $name = $form['name']->getData();
            $period = $form['Period']->getData();

            // On récupère l'image transmise
            $image = $form['Illustration']->getData();

            // On génère un nouveau nom de fichier
            $fichier = md5(uniqid()).'.'.$image->guessExtension();
      
            // On copie le fichier dans le dossier assets
            $image->move(
                $this->getParameter('images_directory'),
                $fichier
            );
            
            // On crée l'image dans la base de données
            $imageid->setName($name);
            $imageid->setPeriod($period);
            $imageid->setIllustration($fichier);


            $this->entityManager->persist($imageid);
            $this->entityManager->flush();



            return $this->redirectToRoute('app_image_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('image/edit.html.twig', [
            'image' => $image,
            'form' => $form,
        ]);
    }

    /**
     * @Route("/{id}", name="app_image_delete", methods={"POST"})
     */
    public function delete(Request $request, Image $image, ImageRepository $imageRepository): Response
    {
        if ($this->isCsrfTokenValid('delete'.$image->getId(), $request->request->get('_token'))) {
            $imageRepository->remove($image);
        }

        return $this->redirectToRoute('app_image_index', [], Response::HTTP_SEE_OTHER);
    }
}
