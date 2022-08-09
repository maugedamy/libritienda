import { useEffect, useState } from 'react';
import React from "react";
import ItemDetail from '../ItemDetail';

export function ItemDetailContainer({id}) {
    const [libro, setLibro] = useState();

    useEffect(() => {
        
        async function callLibro () {
          const response = await getLibro();
          const jsonParsed = await response.json(); 
          for (let i=0; i<jsonParsed.libros.length; i++) {
            if (jsonParsed.libros[i].id == id) {
                setLibro(jsonParsed.libros[i]);
                break;
            }
          }
        }
    
        const timer = setTimeout(function () {callLibro();},2000);
        return function () {clearTimeout(timer);}
    },[]);
    return (
    <>
    {!libro && <div>Cargando...</div>}
    {libro &&
        <div className="item-detail-container">
            <ItemDetail libroDetail={libro} />
        </div>}
    </>
    );
    
}

function getLibro() {

    return fetch("./libros.json", {
        method: 'GET',
        cache: 'no-cache',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    });

}

export default ItemDetailContainer;