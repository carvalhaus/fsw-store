import { CartProduct } from "@/providers/cart";
import { ArrowLeftIcon, ArrowRightIcon, TrashIcon } from "lucide-react";
import Image from "next/image";
import { Button } from "./button";

interface CartItemProps {
  product: CartProduct;
}

const CartItem = ({ product }: CartItemProps) => {
  return (
    <div className="flex items-center justify-between w-[100%] h-[77px]">
      <div className="flex items-center gap-2 ">
        {/* {Foto nome} */}
        <div className="flex items-center justify-center rounded-lg bg-neutral-800 w-[77px] h-[77px]">
          <Image
            src={product.imageUrls[0]}
            alt={product.name}
            width={0}
            height={0}
            sizes="100vw"
            className="h-auto w-auto max-w-[80%] max-h-[70%]"
          />
        </div>

        <div className="flex flex-col gap-1">
          <p className="text-xs  overflow-hidden whitespace-nowrap text-ellipsis">
            {product.name}
          </p>
          <div className="flex items-baseline gap-2">
            <p className="text-sm font-bold">
              R$ {product.totalPrice.toFixed(2)}
            </p>
            {product.discountPercentage > 0 && (
              <p className="text-xs opacity-40 line-through">
                R$ {Number(product.basePrice).toFixed(2)}
              </p>
            )}{" "}
          </div>
          <div className="flex items-center gap-3">
            <Button size="icon" variant="outline">
              <ArrowLeftIcon size={16} />
            </Button>

            <span>{product.quantity}</span>

            <Button size="icon" variant="outline">
              <ArrowRightIcon size={16} />
            </Button>
          </div>
        </div>
      </div>

      <Button size="icon" variant="outline">
        <TrashIcon size={16} />
      </Button>
    </div>
  );
};

export default CartItem;
