import type { Product } from "../types";

function ProductCart({
  product,
  addToCart,
}: {
  product: Product;
  addToCart: (productId: number) => void;
}) {
  return (
    <div className="product-cart">
      <h3>{product.name}</h3>
      <div>{product.price} USD</div>
      <button className="cart-button" onClick={() => addToCart(product.id)}>
        В корзину
      </button>
    </div>
  );
}

export default ProductCart;
