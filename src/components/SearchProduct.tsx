import { useEffect, useState, type Dispatch } from "react";
import type { Product } from "../types";
import { products } from "../data/products";
import { filterProducts } from "../logic/search";

function SearchProduct({
  setSearchedProduct,
}: {
  setSearchedProduct: Dispatch<React.SetStateAction<Product[]>>;
}) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const productList = filterProducts(products, query);
    setSearchedProduct(productList);
  }, [query, setQuery, setSearchedProduct]);

  return (
    <input
      className="search-input"
      type="text"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}

export default SearchProduct;
