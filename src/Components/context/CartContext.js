import {createContext , useState} from "react";

export const CartContext = createContext(0)


export const CartProvider = ({children})=> {
    //Sumar numeros al carrito
    const [items, setItems] =useState(0)
    const addItem =()=> setItems(items +1)
    //Agregar items al carrito
    const [itemList, setItemList] = useState([])
    const addToCart = (product) => {
        setItemList((prevItemList) => [...prevItemList, product]);
    };
    
    
    return(
        <CartContext.Provider value ={{items, addItem, itemList, addToCart}}>
            {children}
        </CartContext.Provider>
    )
}

