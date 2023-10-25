import { ShoppingCartIcon } from "lucide-react";
import { Badge } from "./badge";
import { useContext } from "react";
import { CartContext } from "@/providers/cart";
import CartItem from "./cart-item";
import { computeProductTotalPrice } from "@/helpers/product";

const Cart = () => {
  const { products } = useContext(CartContext);

  return (
    <div>
      <Badge
        variant={"outline"}
        className="border-primary gap-1 uppercase font-bold"
      >
        <ShoppingCartIcon size={16} />
        Carinho
      </Badge>

      <div className="flex flex-col gap-5 py-5">
        {products.map((product) => (
          <CartItem
            key={product.id}
            product={computeProductTotalPrice(product as any) as any}
          />
        ))}
      </div>
    </div>
  );
};

export default Cart;
