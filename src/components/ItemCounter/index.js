import {React, useState} from 'react';
import styles from './styles.css'

export function ItemCounter() {
    const [cont, setCounter] = useState(0);
 
    
    const incrementar = () => {
      if (cont <=9){
      setCounter(cont => cont + 1);
    }  else
    alert("No hay más libros en stock")
    };
    
   
  
    const decrementar = () => {
        if (cont > 0) {
        setCounter(cont => cont - 1);
        }
    };
   
    
    const AgregaralCarrito = () =>{
        if (cont == 1) {
            alert(`Se agregó ${cont} item al carrito`)
        } else {
            alert(`Se agregaron ${cont} items al carrito`)
        }
    }
   
    return (
      <div className="counter">
        <h4>Contador</h4>
        <span className="counter__output">{cont}</span>
        <div className="btn__container">
          <button className="control__btn" onClick={incrementar}>+</button>
          <button className="control__btn" onClick={decrementar}>-</button>
          <button className="agregar" onClick={cont>0 ? AgregaralCarrito : ""}>Agregar al carrito</button>
        </div>
      </div>
    );
}

export default ItemCounter;