import type { Product } from "../types";

function ProductCard({
  product,
  onAddToCart,
}: {
  product: Product;
  onAddToCart: (product: Product) => void;
}) {
  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <div>{product.price} USD</div>
      <button className="cart-button" onClick={() => onAddToCart(product)}>
        В корзину
      </button>
    </div>
  );
}

export default ProductCard;
