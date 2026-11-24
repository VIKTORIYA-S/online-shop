import { useEffect, useState, type Dispatch } from "react";
import type { Product } from "../types";
import { products } from "../data/products";

function SearchProduct({
  setSearchedProduct,
}: {
  setSearchedProduct: Dispatch<React.SetStateAction<Product[]>>;
}) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    // const productList = searchProduct(query);
    setSearchedProduct(products);
  }, [query, setQuery, setSearchedProduct]);

  return (
    <input
      type="text"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}

export default SearchProduct;
