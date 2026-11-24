import { test, expect, describe } from "vitest";
import type { Product } from "../types";
import { addToCart, removeFromCart, calculateTotal } from "./cart";

const gel: Product = {
  id: 1,
  name: "Гель для стирки",
  price: 340,
  description: "Жидкое средство для стирки повседневной одежды.",
  image: "/products/household_gel.png",
  volume: "1 л",
  category: "household",
};

const shampoo: Product = {
  id: 2,
  name: "Шампунь для волос",
  price: 280,
  description: "Шампунь для ежедневного ухода за волосами.",
  image: "/products/hygiene_shampoo.png",
  volume: "400 мл",
  category: "hygiene",
};

describe("addToCart", () => {
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
});

describe("removeFromCart", () => {
  test("возвращает пустую корзину, если корзина пуста", () => {
    const result = removeFromCart([], gel.id);
    expect(result).toEqual([]);
  });

  test("убирает товар с нужным id", () => {
    const cart = [
      { product: gel, quantity: 1 },
      { product: shampoo, quantity: 1 },
    ];
    const result = removeFromCart(cart, gel.id);
    expect(result).toEqual([{ product: shampoo, quantity: 1 }]);
  });

  test("удаляет строку целиком, если товар есть", () => {
    const cart = [{ product: gel, quantity: 3 }];
    const result = removeFromCart(cart, gel.id);
    expect(result).toEqual([]);
  });

  test("не меняет исходную корзину", () => {
    const cart = [{ product: gel, quantity: 1 }];
    removeFromCart(cart, gel.id);
    expect(cart).toEqual([{ product: gel, quantity: 1 }]);
  });

  test("возвращает корзину без изменений, если такого товара нет", () => {
    const cart = [{ product: gel, quantity: 1 }];
    const result = removeFromCart(cart, shampoo.id);
    expect(result).toEqual([{ product: gel, quantity: 1 }]);
  });
});

describe("calculateTotal", () => {
  test("возвращает 0 для пустой корзины", () => {
    const result = calculateTotal([]);
    expect(result).toBe(0);
  });

  test("считает сумму для одной строки", () => {
    const cart = [{ product: gel, quantity: 3 }];
    const result = calculateTotal(cart);
    expect(result).toBe(1020);
  });

  test("считает сумму для всех строк", () => {
    const cart = [
      { product: gel, quantity: 3 },
      { product: shampoo, quantity: 1 },
    ];
    const result = calculateTotal(cart);
    expect(result).toBe(1300);
  });
});