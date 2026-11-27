import type { Category, Product } from "../types";

export function filterByCategory(
  products: Product[],
  category: Category = "all",
) {
  if (category === "all") {
    return products;
  }

  return products.filter((product) => product.category === category);
}
