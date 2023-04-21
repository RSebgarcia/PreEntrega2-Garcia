import React ,{useContext } from "react";
import Css from './CartWidget.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";


function CartWidget() {

    const { itemTotal } = useContext(CartContext);

    return (
        <div className={`${Css.parent}`}>
            <Link  to={"/Cart"} className={` ${Css.cart}`}>
                <span><FontAwesomeIcon icon={faCartShopping} /></span>
                <span className={`text-center ${Css.counter}`} >{itemTotal() || 0}</span>
            </Link>
        </div>
    )
}

export default CartWidget;