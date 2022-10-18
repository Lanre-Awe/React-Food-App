import { useContext } from "react";
import CartItem from "../Cart/CartItem";
import CartContext from "../../store/cart-context";
import styles from "./Cart.module.css";
import Modal from "./Modal";
const Cart = (props) => {
  const ctx = useContext(CartContext);

  const totalAmount = `$${ctx.totalAmount.toFixed(2)}`;
  const hasItem = ctx.items.length > 0;

  const addtoCartHandler = (item) => {
    ctx.addItem({ ...item, amount: 1 });
  };
  const removeHandler = (id) => {
    ctx.removeItem(id);
  };

  const cartItems = (
    <ul className={styles["cart-items"]}>
      {ctx.items.map((item) => (
        <CartItem
          onAdd={addtoCartHandler.bind(null, item)}
          onRemove={removeHandler.bind(null, item.id)}
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
        />
      ))}
    </ul>
  );
  return (
    <Modal clicked={props.closeCart}>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={props.closeCart}>
          Close
        </button>
        {hasItem && <button className={styles.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
