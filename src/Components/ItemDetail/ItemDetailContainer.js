import React from "react";
import { useEffect, useState, } from "react";
import { useParams } from "react-router-dom";
import Productos from "../Productos.json";
import ItemDetail from "./ItemDetail";


const ItemDetailContainer = () => {

    const [item, setItem] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const promesa = new Promise((resolve) => {
            console.log(id);
            setTimeout(() => {
                resolve(Productos.find(item => item.id === id))
            }, 300);
        }, []);

        promesa.then((data) => {
            setItem(data);
            console.log(data)
            console.log(item)
        })

    }, [id, item])

    console.log(item)
    return (
        <div className="container">
            <div className= {`d-flex justify-content-center align-items-center`}>
            <ItemDetail item={item} />
            </div>
        </div>


    )

}
export default ItemDetailContainer;