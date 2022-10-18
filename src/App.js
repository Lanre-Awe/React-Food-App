import { useState } from "react";
import Header from "../src/components/Layout/Header";
import Cart from "./components/Cart/Cart";
import Meal from "./components/Meals/Meal";
import CartProvider from "./store/CartProvider";
function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const cartHandler = () => {
    setCartIsShown(true);
  };
  const cartCloseHandler = () => {
    setCartIsShown(false);
  };
  return (
    <CartProvider>
      {cartIsShown && <Cart closeCart={cartCloseHandler} />}
      <Header onClicked={cartHandler} />
      <main>
        <Meal />
      </main>
    </CartProvider>
  );
}

export default App;
