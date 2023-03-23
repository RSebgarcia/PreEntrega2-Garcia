
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Productos from "../Productos.json"
import ItemList from "../ItemList/ItemList";
const ItemListContainer = () => {
    const [item, setItem] = useState([])
    const { id } = useParams();

    useEffect(() => {
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                resolve(id ? Productos.filter(item => item.type === id) : Productos)
            }, 300)
        });
    promesa.catch((Error))
        promesa.then((data) => {
            setItem(data)
        })

    }, [id]);

    return (
        <div className="container">
            <ItemList item={item} />
        </div>
    );
};
export default ItemListContainer 