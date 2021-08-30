import { Fragment, useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  const viewCartHandler = () => {
    setCartIsVisible(true);
  };

  const hideCardHandler = () => {
    setCartIsVisible(false);
  };
  return (
    <Fragment>
      {cartIsVisible && <Cart onClose={hideCardHandler} />}
      <Header onViewCart={viewCartHandler} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
