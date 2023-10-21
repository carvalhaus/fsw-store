import ProductItem from "@/components/ui/product-item";
import { computeProductTotalPrice } from "@/helpers/product";
import { Product } from "@prisma/client";

interface ProductListProps {
  products: Product[];
}

const ProductList = ({ products }: ProductListProps) => (
  <div className="flex w-full gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden p-5">
    {products.map((product) => (
      <ProductItem
        key={product.id}
        product={computeProductTotalPrice(product)}
      />
    ))}
  </div>
);

export default ProductList;
