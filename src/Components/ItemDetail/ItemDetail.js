import React, { useContext, useEffect } from "react";
import Styles from "./ItemDetail.module.css";
import Button from "react-bootstrap/Button";
import { CartContext } from "../context/CartContext";

const ItemDetail = ({ item }) => {
    const { addItem, addToCart, itemList } = useContext(CartContext);

    useEffect(() => {
        console.log("itemList has changed:", itemList);
    }, [itemList]);

    return (
        <div
            className={`d-flex justify-content-center align-items-center flex-wrap flex-lg-nowrap ${Styles.align}`}
        >
            <img
                src={item.image}
                className={`img-fluid ms-lg-3 mt-5 mb-sm-5 ${Styles.effect}`}
                alt={item.name}
            />
            <div className={` p-sm-5 ${Styles.desc}`}>
                <h2>{item.name}</h2>
                <p className=" mt-4">{item.description}</p>
                <p className=" mt-4">Damage: {item.damage} </p>
                <p className=" mt-4">Armor Rating: {item.armorRating} </p>
                <p className=" mt-4">Weight: {item.weight} Kilos </p>
                <p className=" mt-4">Enchantment: {item.enchantment} </p>
                <p className=" mt-4">{item.value} Septims </p>
                <div className={`${Styles.buttonAlign}`}>
                    <Button
                        onClick={() => {
                            addItem();
                            addToCart(item);
                        }}className={`mt-3 text-sm-center ${Styles.button}`}>Add to Cart</Button>
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;