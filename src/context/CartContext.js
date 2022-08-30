import { useState, createContext } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const isInCart = (id) => {
    const libroInCart = cart.find((libroInCart) => libroInCart.id === id);
    if (libroInCart) return true;
    return false;
  };

  const addToCart = (libro) => {
    if (isInCart(libro.id)) {
      const newCart = cart.map((libroInCart) => {
        if (libroInCart.id === libro.id) {
          return {
            ...libroInCart,
            count: libroInCart.count + libro.count,
          };
        } else {
          return libroInCart;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, libro]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((libro) => libro.id !== id));
  };

  const removeAll = () => {
    setCart([]);
  };

  const calcTotal = () => {
    let totalSuma = 0;
    if (cart.length > 0) {
      totalSuma = cart.reduce(
        (total, item) => total + parseInt(item.price) * parseInt(item.count),
        0
      );
    }
    return totalSuma;
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, removeAll, isInCart, calcTotal }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
