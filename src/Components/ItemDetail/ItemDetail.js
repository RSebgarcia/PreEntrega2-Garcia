import React, { useContext, useEffect, useState } from "react";
import Styles from "./ItemDetail.module.css";
import Button from "react-bootstrap/Button";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const ItemDetail = ({ item }) => {
    const { addToCart, itemList } = useContext(CartContext);

    useEffect(() => {
        console.log("itemList has changed:", itemList);
    }, [itemList]);

    const [counter, setCounter] = useState(1)

    const sub = () => {
        setCounter(counter - 1);
    }
    const sum = () => {
        setCounter(counter + 1);
    }


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
                <p>Stock: {item.stock}</p>
                <p className=" mt-4">{item.value} Septims </p>
                <div className={`d-flex flex-row justify-content-center`}>
                        <button disabled={counter < 1}
                            onClick={sub}
                            className={`p-2 m-1 btn btn-dark`}>-</button>
                        <p className={`p-2 m-1 `}>{counter}</p>
                        <Button
                            onClick={sum}
                            disabled={counter >= item.stock}
                            className={`p-2 m-1 btn btn-dark`}>+</Button>
                    </div>
                <div className={`${Styles.buttonAlign}`}>
                <Link to={"/"} >
                    <Button
                        onClick={() => {
                            addToCart(item, counter);
                        }} className={`mt-3 text-sm-center ${Styles.button}`}>Add to Cart</Button>
                </Link>
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;