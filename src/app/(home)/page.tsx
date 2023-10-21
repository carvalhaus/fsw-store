import Image from "next/image";
import Categories from "./components/categories";
import ProductList from "./components/product-list";
import { prismaClient } from "@/lib/prisma";

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  });
  return (
    <>
      <section className="p-5">
        <Image
          src="/banner-home-01.png"
          height={0}
          width={0}
          className="h-auto w-full"
          sizes="100vw"
          alt="Ate 55% de desconto esse mes"
        />

        <div className="mt-8">
          <Categories />
        </div>
      </section>

      <section className="my-[10px]">
        <p className="uppercase px-5 font-bold">Ofertas</p>
        <ProductList products={deals} />
      </section>
    </>
  );
}
