import React ,{useState, useContext } from "react";
import Css from './CartWidget.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";


function CartWidget() {
const [cantidad, setCantidad] = useState(5)
const {items} = useContext(CartContext)


    return (
        <div className={`${Css.parent}`}>
            <Link  to={"/checkout"} className={` ${Css.cart}`}>
                <span><FontAwesomeIcon icon={faCartShopping} /></span>
                <span className={Css.counter} >{items}</span>
            </Link>
        </div>
    )
}

export default CartWidget;