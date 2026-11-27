export type Category = "household" | "hygiene" | "all";

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
