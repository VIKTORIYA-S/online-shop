import { useState } from "react";
import "./App.css";

function App() {
  const [isShopOpen, setIsShopOpen] = useState(false);

  return (
    <main className="page">
      {isShopOpen ? (
        <>
          <h1>Магазин</h1>
          <p>
            Онлайн магазин. Учебный проект, выполненный в команде студентами RS
            School. Вы можете выбрать товары в каталоге и посмотреть итоговую
            сумму в корзине.
          </p>
          <button
            type="button"
            className="page-button"
            onClick={() => setIsShopOpen(false)}
          >
            О команде
          </button>
        </>
      ) : (
        <>
          <h1>О команде</h1>
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
