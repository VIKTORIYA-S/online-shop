import { stringNormalize } from "../utility/string";

import type { Product } from "../types";

export function filterProducts(products: Product[], query: string = "") {
  const str = stringNormalize(query);

  return products.filter((searchStr) =>
    stringNormalize(searchStr.name).includes(str),
  );
}
