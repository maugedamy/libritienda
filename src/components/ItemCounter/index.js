import { React, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.css";

export function ItemCounter({ fnAgregarAlCarrito }) {
  const [cont, setCounter] = useState(0);

  const AgregarCarrito = () => {
    fnAgregarAlCarrito(cont);
  };

  const incrementar = () => {
    if (cont <= 9) {
      setCounter((cont) => cont + 1);
    } else alert("No hay más libros en stock");
  };

  const decrementar = () => {
    if (cont > 0) {
      setCounter((cont) => cont - 1);
    }
  };

  const ConditionalLink = ({ children, to, condition }) =>
    !!condition && to ? <Link to={to}>{children}</Link> : <>{children}</>;

  return (
    <div className="counter">
      <h4>Contador</h4>
      <span className="counter__output">{cont}</span>
      <div className="btn__container">
        <button className="control__btn" onClick={incrementar}>
          +
        </button>
        <button className="control__btn" onClick={decrementar}>
          -
        </button>
        <ConditionalLink to={`/carrito`} condition={cont > 0}>
          <button className="agregar" onClick={cont > 0 ? AgregarCarrito : ""}>
            Agregar al carrito
          </button>
        </ConditionalLink>
      </div>
    </div>
  );
}

export default ItemCounter;
