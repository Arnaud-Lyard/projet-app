<?php

namespace App\Controller;

use App\Entity\Image;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;

class ApiImageController extends AbstractController
{
    private $entityManager;

    public function __construct(EntityManagerInterface $entityManager){
        $this->entityManager = $entityManager;
    }

    /**
     * @Route("/api/image", name="app_api_image", methods={"GET","HEAD"})
     */
    public function index(SerializerInterface $serializer, Request $request): Response
    {

        // Find 10 result in entity Image
        $images = $this->entityManager->getRepository(Image::class)->findByTen();

        // mix result in random order
        shuffle($images);

        // SET Image URL for each Data
        foreach( $images as $image){
        
                $baseurl = $request->getScheme() . '://' . $request->getHttpHost() . $request->getBasePath();
                $img = $image->getIllustration();
                $link = $baseurl."/assets/img/".$img;
    
                $image->setIllustration($link);

        }

        // Serialize Data in JSON format
        $data = $serializer->serialize(
            $images,
            'json',
            ['groups' => 'image']
        );

        // Return a response with header
        $response = new Response($data);
        $response->headers->set('Content-Type', 'application/json');

        return $response;

    }
}
