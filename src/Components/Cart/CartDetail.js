import React,{useContext, useState} from "react";
import Card from "react-bootstrap/Card";
import { Button, Col, Row } from "react-bootstrap";
import Styles from "./CartDetail.module.css"
import { CartContext } from "../context/CartContext";


function CartDetail({ item }) {
    const { addToCart, deleteItem } = useContext(CartContext);



    console.log(item)
    return (
        <Row className={`text-decoration-none ${Styles.text} `}>
            <div className={`d-flex flex-row justify-content-center`}>
            <h1 className={`text-center mt-1 fs-3 align-middle text-dark mx-5 `}>{item.name}</h1>
            <Button onClick={()=> deleteItem(item.id)}  variant="outline-danger">Delete Item</Button>
            </div>
            <Card className={`d-flex flex-row m-3 align-items-center`}>
                <Col className={` m-2 p-3 `} >
                    <Card.Img variant="bottom" src={item.image} className={``} />
                </Col>
                <Col>
                <p>Amount: {item.quantity}</p>
                <p>Stock: {item.stock}</p>
                </Col>
                <Col>
                    <div>
                        <p>Valor: {item.value} Septims</p>
                        <p>Subtotal: {(item.quantity) * (item.value)} Septims </p>
                    </div>
                </Col>
            </Card>
        </Row>
    )
}

export default CartDetail