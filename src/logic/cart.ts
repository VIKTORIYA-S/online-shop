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


export function removeFromCart(cart: CartItem[], productId: number): CartItem[] {
  return cart.filter((item) => item.product.id !== productId);
}


export function calculateTotal(cart: CartItem[]): number { 
  return cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
}


export function decreaseQuantity(cart: CartItem[], productId: number): CartItem[] {
  return cart
    .map((item) => (item.product.id === productId ? { ...item, quantity: item.quantity - 1 } : item))
    .filter((item) => item.quantity > 0);
}
