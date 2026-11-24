import { useState } from "react";
import "./App.css";
import ProductList from "./components/ProductList";
import { products } from "./data/products";
import type { CartItem, Product } from "./types";
import { addToCart, removeFromCart } from "./logic/cart";
import Cart from "./components/Cart";
import SearchProduct from "./components/SearchProduct";

function App() {
  const [isShopOpen, setIsShopOpen] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [searchedProduct, setSearchedProduct] = useState<Product[]>(products);

  function handleAddToCart(product: Product) {
    setCart(addToCart(cart, product));
  }
  function handleRemoveFromCart(productId: number) {
    setCart(removeFromCart(cart, productId));
  }

  return (
    <main className="page">
      {isShopOpen ? (
        <>
          <h2>Магазин</h2>
          <button
            type="button"
            className="page-button"
            onClick={() => setIsShopOpen(false)}
          >
            О команде
          </button>
          <Cart
            cart={cart}
            onRemove={handleRemoveFromCart}
            onGoShopping={() => {}}
          />
          <SearchProduct setSearchedProduct={setSearchedProduct} />
          <ProductList
            productList={searchedProduct}
            onAddToCart={handleAddToCart}
          />
        </>
      ) : (
        <>
          <h2>О приложении</h2>
          <p>
            Интернет-магазин товаров для дома и гигиены — учебный проект
            студентов RS School. В приложении можно будет выбрать товары из
            каталога, добавить их в корзину и увидеть итоговую стоимость заказа.
          </p>
          <h2>О команде</h2>
          <ul className="team">
            <li>
              <strong>
                <a href="https://github.com/VIKTORIYA-S">VIKTORIYA-S</a>
              </strong>
              <p>Настроила Vitest и описала типы товаров и корзины.</p>
            </li>
            <li>
              <strong>
                <a href="https://github.com/alexander-alxck">alexander-alxck</a>
              </strong>
              <p>
                Подготовил данные и изображения товаров и сделал стартовый
                экран.
              </p>
            </li>
          </ul>
          <button
            type="button"
            className="page-button"
            onClick={() => setIsShopOpen(true)}
          >
            Перейти в магазин
          </button>
        </>
      )}
    </main>
  );
}

export default App;
