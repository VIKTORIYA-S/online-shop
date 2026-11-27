export type Category = "household" | "hygiene";
export type CategoryFilter = Category | "all";

export type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  volume?: string;
  category: Category;
};

export type CartItem = {
  product: Product;
  quantity: number;
};
