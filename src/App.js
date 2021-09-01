import { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  const viewCartHandler = () => {
    setCartIsVisible(true);
  };

  const hideCardHandler = () => {
    setCartIsVisible(false);
  };
  return (
    <CartProvider>
      {cartIsVisible && <Cart onClose={hideCardHandler} />}
      <Header onViewCart={viewCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
