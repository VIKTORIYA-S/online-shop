import type { Product } from "../types";
import ProductCard from "./ProductCard";

function ProductList({
  productList,
  onAddToCart,
}: {
  productList: Product[];
  onAddToCart: (product: Product) => void;
}) {
  return (
    <div className="product-list">
      {productList.map((item) => (
        <ProductCard key={item.id} product={item} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
}
export default ProductList;

