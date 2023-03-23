import ItemCss from "./ItemDetail.module.css"
import React from "react";
import Button from 'react-bootstrap/Button';


const ItemDetail = ({ item }) => {
    return (
        <div className={`d-flex justify-content-center align-items-center flex-wrap flex-lg-nowrap ${ItemCss.align}`}>
            <img src={item.image} className={`img-fluid ms-lg-3 mt-5 mb-sm-5 ${ItemCss.effect}`} alt={item.name} />
            <div className={` p-sm-5 ${ItemCss.desc}`} >
                <h1>{item.name}</h1>
                <p className=" mt-4">{item.description}</p>
                <p className=" mt-4">Damage: {item.damage}  </p>
                <p className=" mt-4">Armor Rating: {item.armorRating}  </p>
                <p className=" mt-4">Weight: {item.weight} Kilos  </p>
                <p className=" mt-4">Enchantment: {item.enchantment}  </p>
                <p className=" mt-4">{item.value} Septims </p>
                <div className={`${ItemCss.buttonAlign}`} >
                    <Button  className={`mt-3 text-sm-center ${ItemCss.button}`}>Add to Cart!</Button>
                </div>
            </div>
        </div>
    )
}


export default ItemDetail;