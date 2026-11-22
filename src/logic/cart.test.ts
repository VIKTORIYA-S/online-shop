import { test, expect } from "vitest";
import type { Product } from "../types";
import { addToCart } from "./cart";

const gel: Product = {
  id: 1,
  name: "Гель для стирки",
  price: 340,
  description: "Жидкое средство для стирки повседневной одежды.",
  image: "/products/household_gel.png",
  volume: "1 л",
};

const shampoo: Product = {
  id: 2,
  name: "Шампунь для волос",
  price: 280,
  description: "Шампунь для ежедневного ухода за волосами.",
  image: "/products/hygiene_shampoo.png",
  volume: "400 мл",
};

test("добавляет товар в пустую корзину", () => {
  const result = addToCart([], gel);
  expect(result).toEqual([{ product: gel, quantity: 1 }]);
});

test("увеличивает количество, если товар уже есть", () => {
  const cart = [{ product: gel, quantity: 1 }];
  const result = addToCart(cart, gel);
  expect(result).toEqual([{ product: gel, quantity: 2 }]);
});

test("добавляет новый товар, если его нет в корзине", () => {
  const cart = [{ product: gel, quantity: 1 }];
  const result = addToCart(cart, shampoo);
    expect(result).toEqual([
      { product: gel, quantity: 1 },
      { product: shampoo, quantity: 1 },
    ]);
});

test("не меняет исходную корзину", () => {
  const cart = [{ product: gel, quantity: 1 }];
  addToCart(cart, gel);
  expect(cart).toEqual([{ product: gel, quantity: 1 }]);
});