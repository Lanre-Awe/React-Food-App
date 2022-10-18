import React from "react";
import styles from "./Header.module.css";
import mealsImage from "../../Assets/meals.jpg";
import CartButton from "./CartButton";
const Header = (props) => {
  return (
    <React.Fragment>
      <header className={styles.header}>
        <h1>Lanre Foods</h1>
        <CartButton onClick={props.onClicked} />
      </header>
      <div className={styles["main-image"]}>
        <img src={mealsImage} alt="food table" />
      </div>
    </React.Fragment>
  );
};

export default Header;
