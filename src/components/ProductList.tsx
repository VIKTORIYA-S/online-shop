import type { Product } from "../types";
import ProductCart from "./ProductCart";

function ProductList({ productList }: { productList: Product[] }) {
  return (
    <div className="product-list">
      {productList.map((item) => (
        <ProductCart
          key={item.id}
          product={item}
          addToCart={() => {
            console.log(`add to cart ${item.id}`);
          }}
        />
      ))}
    </div>
  );
}

export default ProductList;
