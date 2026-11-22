import type { Product } from "../types";

import ProductCard from "./ProductCard";

function ProductList({ productList }: { productList: Product[] }) {
  const onAddToCart = (product: Product) => {
    console.log(product.name);
  };

  return (
    <div className="product-list">
      {productList.map((item) => (
        <ProductCard key={item.id} product={item} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
}

export default ProductList;
