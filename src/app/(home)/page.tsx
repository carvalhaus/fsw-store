import Categories from "./components/categories";
import ProductList from "./components/product-list";
import { prismaClient } from "@/lib/prisma";
import SectionTitle from "./components/section-title";
import Banner from "./components/banner-image";
import Image from "next/image";

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  });

  const keyboards = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "keyboards",
      },
    },
  });
  return (
    <div>
      <section className="p-5">
        <Banner src="/banner-home-01.png" alt="Até 55% de desconto esse mês" />

        <div className="mt-8">
          <Categories />
        </div>
      </section>

      <section>
        <SectionTitle>Ofertas</SectionTitle>
        <ProductList products={deals} />
      </section>

      <section className="p-5">
        <Banner src="/banner-home-02.png" alt="Até 55% de desconto em mouses" />
      </section>

      <section>
        <SectionTitle>Teclados</SectionTitle>
        <ProductList products={keyboards} />
      </section>
    </div>
  );
}
