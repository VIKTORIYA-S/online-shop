import type { CartItem, Product } from "../types";

export function addToCart(cart: CartItem[], product: Product): CartItem[] {
  const existing = cart.find((item) => item.product.id === product.id);
  if (existing) {
    return cart.map((item) => item.product.id === product.id
      ? { ...item, quantity: item.quantity + 1 }
      : item
    );
  }
  return [...cart, { product, quantity: 1 }];
}

