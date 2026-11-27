import { describe, expect, test } from "vitest";

import { filterByCategory } from "./filter";
import type { Product } from "../types";

const testProducts: Product[] = [
  {
    id: 101,
    name: "Гель",
    price: 10,
    description: "",
    image: "",
    category: "household",
  },
  {
    id: 102,
    name: "Мыло",
    price: 5,
    description: "",
    image: "",
    category: "hygiene",
  },
];

describe("filterByCategory", () => {
  test('функция возвращает все категории при выборе "all"', () => {
    expect(filterByCategory(testProducts, "all")).toEqual(testProducts);
  });

  test("При вызове с категорией household возвращает массив товаров только с категорией household", () => {
    expect(filterByCategory(testProducts, "household")).toEqual([
      testProducts[0],
    ]);
  });

  test("Нет товаров в категории, возвращает пустой массив", () => {
    const hygiene = [testProducts[1]];

    expect(filterByCategory(hygiene, "household")).toEqual([]);
  });
  test("исходный массив не меняется", () => {
    const copyArr = testProducts.slice();
    filterByCategory(copyArr, "household");

    expect(copyArr).toEqual(testProducts);
  });
});
