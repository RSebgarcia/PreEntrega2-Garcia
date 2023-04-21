import React from "react";
import { useEffect, useState, } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { db } from "../assets/Firebase";
import {doc, getDoc} from 'firebase/firestore'


const ItemDetailContainer = () => {
    const [item, setItem] = useState('');
    const { id } = useParams();
    useEffect(() => {
const queryDb = db;
const queryDoc = doc (queryDb, 'Items', id );
getDoc(queryDoc)
.then (res=> setItem({id: res.id, ...res.data()}))


    }, [id])
    return (
        <div className="container">
            <div className= {`d-flex justify-content-center align-items-center`}>
            <ItemDetail item={item} />
            </div>
        </div>
    )

}
export default ItemDetailContainer;