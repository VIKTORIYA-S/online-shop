export type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  volume?: string;
  category: string;
};

export type CartItem = {
  product: Product;
  quantity: number;
};
