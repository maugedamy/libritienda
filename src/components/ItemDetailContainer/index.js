import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import React from "react";
import ItemDetail from '../ItemDetail';
import { getLibroById } from "../../asyncmock";


export function ItemDetailContainer() {
    const [libro, setLibro] = useState();
    const { id } = useParams();

    useEffect(() => {
        getLibroById(id).then((libro) => {
            setLibro(libro);
        })
    },[id]);
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

export default ItemDetailContainer;