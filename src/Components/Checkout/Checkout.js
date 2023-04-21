import React, {useContext } from 'react';
import Styles from "./Checkout.module.css"
import { Link } from 'react-router-dom';
import { CartContext } from "../context/CartContext";
import CheckoutList from './CheckoutList';




function Checkout() {
    const { itemList } = useContext(CartContext);
    console.log(itemList)


    return (
        <div className={` ${Styles.modalBackground} `}>
            <div className={`${Styles.modalContainer}`}>
                <Link to={"/"}  > <button>X</button> </Link >
                <div className={`${Styles.title}`}>
                    Confirm your purchase!
                </div>
                <div className={`${Styles.body}`}>
                    <div id="itemList">
                        {
                            itemList.map(p =>
                                <div className="col-lg-3 col-md-4" key={p.id}>
                                    <CheckoutList item={p} />
                                </div>
                            )
                        }
                    </div>
                </div>
                <div className={`${Styles.footer}`}>
                    <Link to={"/"} ><button>Close</button></Link>
                    <Link to={"/"}><button >Confirm</button></Link>
                </div>
            </div>
        </div>
    );
}

export default Checkout