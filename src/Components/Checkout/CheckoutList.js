import React from "react";
import Card from 'react-bootstrap/Card';

function CheckoutList({item}){
console.log(item)
    return(
        <div  className={`text-decoration-none`}>
        <Card className={` m-2 mt-5 p-3 `} >
            <Card.Img variant="top" src={item.image} className="mt-4" />
            <Card.Body>
                <Card.Title className={`text-center mt-2 align-middle text-dark`}>{item.name}</Card.Title>
            </Card.Body>
        </Card>
    </div> 
    )
}

export default CheckoutList