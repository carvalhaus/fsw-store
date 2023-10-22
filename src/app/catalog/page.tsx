import { Badge } from "@/components/ui/badge";
import { ShapesIcon } from "lucide-react";
import CatalogItem from "./components/catalog-item";
import { prismaClient } from "@/lib/prisma";

const CatalogPage = async () => {
  const categories = await prismaClient.category.findMany({});

  return (
    <section className="p-5">
      <Badge
        variant={"outline"}
        className="border-primary gap-1 uppercase font-bold"
      >
        <ShapesIcon size={16} />
        Catálogo
      </Badge>

      <div className="grid grid-cols-2 gap-4 mt-5">
        {categories.map((category) => (
          <CatalogItem key={category.id} category={category} />
        ))}
      </div>
    </section>
  );
};

export default CatalogPage;
