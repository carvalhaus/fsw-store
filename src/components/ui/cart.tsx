import { ShoppingCartIcon } from "lucide-react";
import { Badge } from "./badge";
import { useContext } from "react";
import { CartContext } from "@/providers/cart";
import CartItem from "./cart-item";
import { computeProductTotalPrice } from "@/helpers/product";
import { Separator } from "./separator";
import { ScrollArea } from "./scroll-area";
import { Button } from "./button";
import { createCheckout } from "@/actions/checkou";
import { loadStripe } from "@stripe/stripe-js";

const Cart = () => {
  const { products, subTotal, total, totalDiscount } = useContext(CartContext);

  const handleFinishPurchaseClick = async () => {
    const checkout = await createCheckout(products);

    const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY);

    stripe?.redirectToCheckout({
      sessionId: checkout.id,
    });
  };

  return (
    <div className="flex flex-col justify-between h-[93vh]">
      <Badge
        variant={"outline"}
        className="border-primary gap-1 uppercase font-bold w-28 justify-center"
      >
        <ShoppingCartIcon size={16} />
        Carinho
      </Badge>

      <div className="flex flex-col gap-5 py-5 h-full max-h-full overflow-hidden">
        <ScrollArea className="h-full">
          {products.length > 0 ? (
            products.map((product) => (
              <CartItem
                key={product.id}
                product={computeProductTotalPrice(product as any) as any}
              />
            ))
          ) : (
            <p className="text-center font-semibold">
              Adicione produtos ao carrinho!
            </p>
          )}
        </ScrollArea>
      </div>

      <div className="flex flex-col gap-2  ">
        <Separator />
        <div className="flex justify-between text-xs">
          <p>Subtotal</p>
          <p>R$ {subTotal.toFixed(2)}</p>
        </div>
        <Separator />
        <div className="flex justify-between text-xs">
          <p>Entrega</p>
          <p className="uppercase">Grátis</p>
        </div>
        <Separator />
        <div className="flex justify-between text-xs">
          <p>Descontos</p>
          <p>- R$ {totalDiscount.toFixed(2)}</p>
        </div>
        <Separator />
        <div className="flex justify-between text-sm font-bold">
          <p>Total</p>
          <p>R$ {total.toFixed(2)}</p>
        </div>
      </div>

      <Button
        className="mt-5 uppercase text-sm font-bold"
        onClick={handleFinishPurchaseClick}
      >
        Finalizar compra
      </Button>
    </div>
  );
};

export default Cart;
