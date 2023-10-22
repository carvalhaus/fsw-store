import { Category } from "@prisma/client";
import Image from "next/image";

interface CategoryItemProps {
  category: Category;
}

const CatalogItem = ({ category }: CategoryItemProps) => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-center items-center w-full h-[150px] rounded-t-lg bg-category-item-gradient">
        <Image
          src={category.imageUrl}
          alt={category.slug}
          key={category.id}
          width={0}
          height={0}
          sizes="100vw"
          className="w-auto h-auto max-w-[80%] max-h-[70%]"
        />
      </div>
      <p className="bg-neutral-900 w-[100%] text-center rounded-b-lg py-2 font-bold">
        {category.name}
      </p>
    </div>
  );
};

export default CatalogItem;
