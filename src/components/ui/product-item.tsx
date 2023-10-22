import { ProductWithTotalPrice } from "@/helpers/product";
import Image from "next/image";
import { Badge } from "./badge";
import { ArrowDownIcon, PercentIcon } from "lucide-react";
import Link from "next/link";

interface ProductItemProp {
  product: ProductWithTotalPrice;
}

const ProductItem = ({ product }: ProductItemProp) => {
  return (
    <Link href={`/product/${product.slug}`}>
      <div className="flex-col flex gap-3 w-[170px] h-auto">
        <div className="relative flex h-[170px] w-[170px] items-center justify-center bg-accent rounded-lg">
          <Image
            src={product.imageUrls[0]}
            width={0}
            height={0}
            sizes="100vw"
            className="w-auto h-auto max-w-[80%] max-h-[70%]"
            style={{
              objectFit: "contain",
            }}
            alt={product.slug}
          />
          {product.discountPercentage > 0 && (
            <Badge className="absolute left-[10px] top-[10px] px-2 py-[2px]">
              <ArrowDownIcon size={12} />
              <p className="font-bold">{product.discountPercentage}%</p>
            </Badge>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <p className="font-bold overflow-hidden whitespace-nowrap text-ellipsis">
            {product.name}
          </p>
          <div className="flex items-baseline gap-1">
            {product.discountPercentage > 0 ? (
              <>
                <p className="font-bold">R$ {product.totalPrice.toFixed(2)}</p>
                <p className="text-xs line-through opacity-40">
                  -R$ {Number(product.basePrice).toFixed(2)}
                </p>
              </>
            ) : (
              <p className="font-bold">R$ {product.totalPrice.toFixed(2)}</p>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
