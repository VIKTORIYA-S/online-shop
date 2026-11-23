import type { CartItem } from "../types";
import { calculateTotal } from "../logic/cart";


function Cart({
  cart,
    onGoShopping,
    onRemove,
}: {
  cart: CartItem[];
  onGoShopping: () => void;
  onRemove: (productId: number) => void;
}) {
  if (cart.length === 0) {
    return (
      <div className="cart">
        <h2>Корзина</h2>
        <p>Ваша корзина пуста.</p>
        <p>Вы можете перейти в каталог и выбрать товары.</p>
        <button type="button" className="cart-button" onClick={onGoShopping}>
          Продолжить покупки
        </button>
      </div>
    );
  }
  return (
    <div className="cart">
      <h2>Корзина</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.product.id}>
            <span>{item.product.name} </span>
            <span>Цена: {item.product.price} USD </span>
            <span>Количество: {item.quantity} </span>
            <button
              type="button"
              className="cart-button"
              onClick={() => onRemove(item.product.id)}
            >
              Удалить
            </button>
          </li>
        ))}
      </ul>
      <p>Итого: {calculateTotal(cart)} USD</p>
    </div>
  );
}
export default Cart;