import React from "react";
import ItemCounter from '../ItemCounter';

export const ItemListContainer = (props) => {
    return (
        <>
        <h3>Carrito Imaginario</h3>
        <h4>{props.greeting}</h4>
        <ItemCounter />
        </>
    );
        
}

export default ItemListContainer;