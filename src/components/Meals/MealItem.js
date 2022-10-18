import { useContext } from "react";
import CartContext from "../../store/cart-context";
import styles from "./Mealitem.module.css";
import MealItemForm from "./MealItemForm/MealItemForm";

const MealItem = (props) => {
  const ctx = useContext(CartContext);

  const price = `$${props.price.toFixed(2)}`;

  const onAddHandler = (amount) => {
    ctx.addItem({
      name: props.name,
      amount: amount,
      price: props.price,
      id: props.id,
    });
  };
  return (
    <li className={styles.meals} key={props.id}>
      <div>
        <h3>{props.name}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>{price}</div>
      </div>
      <div>
        <MealItemForm onAdd={onAddHandler} id={props.id} />
      </div>
    </li>
  );
};

export default MealItem;
