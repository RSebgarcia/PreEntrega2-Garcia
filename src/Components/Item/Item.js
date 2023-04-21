
import React from "react";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import ItemCss from "./Item.module.css"

const Item = ({ item }) => {
    
    return (
        <Link to={"/item/" + item.id} className={`text-decoration-none`}  >
            <Card className={` m-2 mt-5 p-3 ${ItemCss.card}`} >
                <Card.Img variant="top" src={item.image} className="mt-4" />
                <Card.Body>
                    <Card.Title className={`text-center mt-2 align-middle text-dark`}>{item.name}</Card.Title>
                </Card.Body>
            </Card>
        </Link> 
    )
}

export default Item;



