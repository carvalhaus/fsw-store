import { prismaClient } from "@/lib/prisma";
import ProductImages from "./components/product-images";
import { computeProductTotalPrice } from "@/helpers/product";
import ProductInfo from "./components/product-info";
import ProductList from "@/components/ui/product-list";
import SectionTitle from "@/app/(home)/components/section-title";

interface ProductDetailPageProps {
  params: {
    slug: string;
  };
}

const ProductDetailPage = async ({
  params: { slug },
}: ProductDetailPageProps) => {
  const product = await prismaClient.product.findFirst({
    where: {
      slug: slug,
    },
    include: {
      category: {
        include: {
          products: {
            where: {
              slug: {
                not: slug,
              },
            },
          },
        },
      },
    },
  });

  if (!product) {
    return null;
  }

  return (
    <div>
      <ProductImages imageUrls={product.imageUrls} name={product.name} />
      <ProductInfo product={computeProductTotalPrice(product)} />
      <div>
        <SectionTitle>Produtos recomendados</SectionTitle>
        <ProductList products={product.category.products} />
      </div>
    </div>
  );
};

export default ProductDetailPage;
