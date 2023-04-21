import { getFirestore, collection, addDoc, } from 'firebase/firestore';
import { CartContext } from '../context/CartContext';
import React, { useState, useContext } from 'react';
import Styles from "./Form.module.css"
import { useNavigate } from 'react-router-dom';
import { ToastContainer,toast, Zoom, Bounce } from 'react-toastify';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';

function BuyerForm() {
    const { itemList, totalPrice,clearList } = useContext(CartContext);
    const navigate = useNavigate();


    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [emailConfirmation, setEmailConfirmation] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    
    const order = {
        buyer: {
            name: name,
            email: email,
            phone: phone,
            address: address
        },
        items: itemList.map(p => ({ id: p.id, name: p.name, value: p.value, quantity: p.quantity })),
        total: totalPrice(),
    }

    const generateOrder = () => {
        const db = getFirestore();
        const ordersCollection = collection(db, 'orders');
        addDoc(ordersCollection, order)
            .then(({ id }) => {
                toast.success(`Order ${id} generated succesfully`)
                console.log(id);
                clearList()
                setTimeout(() => {
                    navigate('/');
                }, 1500);
                
            });
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        if(email === emailConfirmation){
        generateOrder()
    }else{
        toast.error("Mail information must match")
    }
    };

    
    return (
        <div className={`container d-flex flex-column justify-content-center text-center ${Styles.container}`}>
            <ToastContainer/>
            <form className={`${Styles.formBody} `} onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        id="name"
                        type="text"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="emailConfirmation">Email Confirmation:</label>
                    <input
                        id="emailConfirmacion"
                        type="email"
                        value={emailConfirmation}
                        onChange={(event) => setEmailConfirmation(event.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="phone">Phone:</label>
                    <input
                        id="phone"
                        type="tel"
                        value={phone}
                        onChange={(event) => setPhone(event.target.value)}
                        required
                    />
                </div>
                <div className={`d-flex justify-content-center align-items-center`} >
                    <label htmlFor="address">Address:</label>
                    <textarea
                        id="address"
                        value={address}
                        onChange={(event) => setAddress(event.target.value)}
                        required
                    ></textarea>
                </div>
                <div className={`d-flex justify-content-center`}>
                <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}
export default BuyerForm;