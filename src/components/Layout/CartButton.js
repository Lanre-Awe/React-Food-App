import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import styles from "./CartButton.module.css";

const CartButton = (props) => {
  const [cartBump, setCartBump] = useState(false);
  const ctx = useContext(CartContext);
  const numberOfItems = ctx.items.reduce((total, item) => {
    return total + item.amount;
  }, 0);
  const btnClasses = `${styles.button} ${cartBump ? styles.bump : ""}`;
  console.log("ran");
  const { items } = ctx;
  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    console.log("effect");
    setCartBump(true);
    const timer = setTimeout(() => {
      setCartBump(false);
    }, 300);
    return () => {
      console.log("cleanup");
      clearTimeout(timer);
    };
  }, [items]);
  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numberOfItems}</span>
    </button>
  );
};
export default CartButton;
