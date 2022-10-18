import { useRef, useState } from "react";
import Input from "./Input";
import styles from "./MealItemForm.module.css";
const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountinputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountinputRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    props.onAdd(enteredAmountNumber);
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <Input
        ref={amountinputRef}
        label="Amount"
        id={props.id}
        input={{
          type: "number",
          min: "1",
          max: "5",
          defaultValue: "1",
          step: "1",
        }}
      />
      <button>Add</button>
      {!amountIsValid && <p>Please enter a value (1-5)</p>}
    </form>
  );
};
export default MealItemForm;
