"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ProductWithTotalPrice } from "@/helpers/product";
import {
  ArrowDownIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  TruckIcon,
  icons,
} from "lucide-react";
import { useState } from "react";

interface ProductInfoProps {
  product: Pick<
    ProductWithTotalPrice,
    "basePrice" | "description" | "name" | "discountPercentage" | "totalPrice"
  >;
}

const ProductInfo = ({
  product: { name, basePrice, description, discountPercentage, totalPrice },
}: ProductInfoProps) => {
  const [quantity, setQuantity] = useState(1);

  const handleDecreaseQuantity = () => {
    setQuantity((prev) => (prev === 1 ? prev : prev - 1));
  };

  const handleIncreaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  return (
    <div className="flex flex-col p-5 gap-3">
      <h2 className="text-lg">{name}</h2>

      <div className="flex flex-col">
        <div className="flex gap-2">
          <h3 className="text-xl font-bold">R$ {totalPrice.toFixed(2)}</h3>
          {discountPercentage > 0 && (
            <Badge className="px-2 py-[2px]">
              <ArrowDownIcon size={12} />
              <p className="font-bold">{discountPercentage}%</p>
            </Badge>
          )}
        </div>
        {discountPercentage > 0 && (
          <p className="text-sm opacity-40 line-through">
            R$ {Number(basePrice).toFixed(2)}
          </p>
        )}
      </div>

      <div className="flex items-center gap-3">
        <Button size="icon" variant="outline" onClick={handleDecreaseQuantity}>
          <ArrowLeftIcon size={16} />
        </Button>

        <span>{quantity}</span>

        <Button size="icon" variant="outline" onClick={handleIncreaseQuantity}>
          <ArrowRightIcon size={16} />
        </Button>
      </div>

      <div className="flex flex-col gap-2 py-5">
        <h4 className="font-bold text-sm">Descrição</h4>
        <p className="text-xs opacity-40">{description}</p>
      </div>

      <Button>
        <p className="uppercase font-bold text-sm">Adicionar ao carinho</p>
      </Button>

      <div className="flex justify-between bg-neutral-800 items-center px-5 py-3 rounded-lg mt-4">
        <div className="flex items-center gap-3">
          <TruckIcon />

          <div className="flex flex-col gap-1">
            <p className="text-xs">
              Entrega via <span className="font-bold italic">FSPacket®</span>
            </p>
            <p className="text-xs text-primary">
              Envio para <span className="font-bold">todo Brasil</span>
            </p>
          </div>
        </div>

        <p className="text-xs font-bold">Frete Grátis</p>
      </div>
    </div>
  );
};

export default ProductInfo;
