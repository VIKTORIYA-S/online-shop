import { useState } from "react";

import Cart from "./components/Cart";
import FilterCategory from "./components/FilterCategory";
import ProductList from "./components/ProductList";
import SearchProduct from "./components/SearchProduct";

import { products } from "./data/products";

import { addToCart, decreaseQuantity, removeFromCart } from "./logic/cart";
import { filterByCategory } from "./logic/filter";
import { filterProducts } from "./logic/search";

import { type CartItem, type CategoryFilter, type Product } from "./types";

import "./App.css";

function App() {
  const [isShopOpen, setIsShopOpen] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentCategory, setCurrentCategory] = useState<CategoryFilter>("all");

  function handleAddToCart(product: Product) {
    setCart(addToCart(cart, product));
  }
  function handleRemoveFromCart(productId: number) {
    setCart(removeFromCart(cart, productId));
  }

  function handleDecrease(productId: number) {
    setCart(decreaseQuantity(cart, productId));
  }

  const searchedProducts = filterProducts(products, searchQuery);
  const visibleProducts = filterByCategory(searchedProducts, currentCategory);

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
            onIncrease={handleAddToCart}
            onDecrease={handleDecrease}
            onGoShopping={() => {}}
          />
          <SearchProduct
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
          <FilterCategory
            currentCategory={currentCategory}
            onChange={setCurrentCategory}
          />
          {visibleProducts.length === 0 ? (
            <div className="not-finded">Ничего не найдено</div>
          ) : (
            <ProductList
              productList={visibleProducts}
              onAddToCart={handleAddToCart}
            />
          )}
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
