import { useEffect, useState } from 'react';
import React from "react";
import ItemList from '../ItemList';

export function ItemListContainer () {
    
    const [libros, setlibros] = useState([]);

    useEffect(() => {
        
        async function callLibros () {
          const response = await getLibros();
          const jsonParsed = await response.json(); 
          setlibros(jsonParsed.libros);
        }
    
        const timer = setTimeout(function () {callLibros();},2000);
        return function () {clearTimeout(timer);}
      }, []);

    return (
        <div className="item-list-container">
            <ItemList librosList={libros} />
        </div>
    );
}

function getLibros() {

    return fetch("./libros.json", {
        method: 'GET',
        cache: 'no-cache',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    });

}

export default ItemListContainer;