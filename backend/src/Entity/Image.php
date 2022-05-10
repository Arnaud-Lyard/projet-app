<?php

namespace App\Entity;

use App\Repository\ImageRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass=ImageRepository::class)
 */
class Image
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @Groups({"image"})
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"image"})
     */
    private $name;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"image"})
     */
    private $Period;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"image"})
     */
    private $Illustration;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getPeriod(): ?string
    {
        return $this->Period;
    }

    public function setPeriod(string $Period): self
    {
        $this->Period = $Period;

        return $this;
    }

    public function getIllustration(): ?string
    {
        return $this->Illustration;
    }

    public function setIllustration(string $Illustration): self
    {
        $this->Illustration = $Illustration;

        return $this;
    }
}
