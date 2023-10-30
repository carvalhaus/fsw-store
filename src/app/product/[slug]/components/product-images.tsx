"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";

interface ProductImagesProps {
  name: string;
  imageUrls: string[];
}

const ProductImages = ({ imageUrls, name }: ProductImagesProps) => {
  const [currentImage, setCurrentImage] = useState(imageUrls[0]);

  const handleImageChange = (imageUrl: string) => {
    setCurrentImage(imageUrl);
  };

  return (
    <div className="flex flex-col">
      <div className="flex h-[380px] justify-center items-center w-full bg-neutral-800">
        <Image
          src={currentImage}
          alt={name}
          width={0}
          height={0}
          sizes="100vw"
          className="h-auto max-h-[70%] w-auto max-w-[80%]"
          style={{ objectFit: "contain" }}
        />
      </div>

      <div className="grid grid-cols-4 gap-24 p-5 overflow-x-auto [&::-webkit-scrollbar]:hidden w-full">
        {imageUrls.map((imageUrl) => (
          <Button
            key={imageUrl}
            variant={"outline"}
            className={`flex h-[100px] w-[100px] items-center justify-center bg-neutral-800 ${
              imageUrl === currentImage &&
              "border-2 border-primary border-solid"
            }`}
            onClick={() => handleImageChange(imageUrl)}
          >
            <Image
              src={imageUrl}
              alt={name}
              width={0}
              height={0}
              sizes="100vw"
              className="h-auto max-h-[70%] w-auto max-w-[80%]"
              style={{ objectFit: "contain" }}
            />
          </Button>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
