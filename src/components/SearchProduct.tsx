import { useEffect, useState } from "react";
import { filterProducts } from "../logic/search";
import { products } from "../data/products";

import type { Product } from "../types";

function SearchProduct({
  setCurrentProducts,
}: {
  setCurrentProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const currentProduct = filterProducts(products, query);

    setCurrentProducts(currentProduct);
  }, [query, setCurrentProducts]);

  return <input value={query} onChange={(e) => setQuery(e.target.value)} />;
}

export default SearchProduct;
