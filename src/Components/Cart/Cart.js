import React, { useContext } from 'react';
import Styles from "./Cart.module.css"
import { Link } from 'react-router-dom';
import { CartContext } from "../context/CartContext";
import Button from 'react-bootstrap/Button';
import { getFirestore, collection, doc, addDoc, updateDoc } from 'firebase/firestore';
import CartDetail from './CartDetail';

function Cart() {
const { itemList, totalPrice,itemTotal,clearList, } = useContext(CartContext);

    const total = itemTotal()

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
                                <div className="" key={p.id}>
                                    <CartDetail item={p} />
                                </div>
                            )
                        }
                    </div>
                </div>
                <p className='text-center'>Cantidad de elementos: {total} </p>
                <p className='text-center'>Total {totalPrice()} </p>
                <div className={`container ${Styles.footer}`}>
                        <Button onClick={clearList} variant="danger">Empty Cart</Button>
                        <Link to={"/"} ><Button>Back</Button></Link>
                        <Link to={"/Form"}><Button  variant="success">Continue</Button></Link>
                </div>
            </div>
        </div>
    );
}

export default Cart