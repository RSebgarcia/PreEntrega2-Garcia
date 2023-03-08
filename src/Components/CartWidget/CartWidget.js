import React from "react";
import cartCSS from './CartWidget.module.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'


function CartWidget(){
const contar=5;

return(
    <div className="d-flex align-items-center">
        <p className={cartCSS.counter} >{contar}</p>
        <div>
        <button className={`btn btn-outline-light ${cartCSS.cart}`}><FontAwesomeIcon icon={faCartShopping} /></button>
        </div>
    </div>
)
}

export default CartWidget;