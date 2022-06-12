import { createContext, useState } from "react";

const defaultContext = {
  addActivity: () => {},
  deleteActivity: () => {},
  cart: [],
};

export const CartContext = createContext(defaultContext);

export const Provider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addActivity = (activity) => {
    return setCart([...cart, activity]);
  };

  const deleteActivity = (uuid) => {
    return setCart(cart.filter((activity) => activity.uuid !== uuid));
  };

  return (
    <CartContext.Provider value={{ cart, addActivity, deleteActivity }}>
      {children}
    </CartContext.Provider>
  );
};
