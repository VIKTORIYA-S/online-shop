import type { CategoryFilter, Product } from "../types";

export function filterByCategory(
  products: Product[],
  category: CategoryFilter = "all",
) {
  if (category === "all") {
    return products;
  }

  return products.filter((product) => product.category === category);
}
