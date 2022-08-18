import { useState, createContext } from 'react';

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

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, removeAll, isInCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;