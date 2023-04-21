
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import {db} from "../assets/Firebase"
import {where, collection,query,getDocs} from 'firebase/firestore'

const ItemListContainer = () => {
    const [item, setItem] = useState([])
    const { id } = useParams();

    useEffect(() => {
const queryDb = db
const queryCollection= collection(queryDb, 'Items');
if(id){
    const queryFilter = query(queryCollection, where('type', '==', id))
    getDocs(queryFilter) 
    .then(res=> setItem(res.docs.map(p=>({id: p.id, ...p.data()}))))
    console.log(item)
    }else{
        getDocs(queryCollection)
        .then(res=> setItem(res.docs.map(p=>({id: p.id, ...p.data()}))))}
        console.log(item)
    }, [id]);
    
    return (
        <div className="container">
            <ItemList item={item} />
        </div>
    );
};
export default ItemListContainer 
