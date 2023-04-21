import { createContext, useState } from "react";


export const CartContext = createContext(0)


export const CartProvider = ({ children }) => {

    const [itemList, setItemList] = useState([])

    const totalPrice =()=>{
        return itemList.reduce((prev,act) =>prev + act.quantity * act.value, 0);
       }


    const itemTotal = () => itemList.reduce((counter, item) => counter + item.quantity, 0);

    const clearList = () => setItemList([])

    const isInList = (id) => itemList.find(item => item.id === id) ? true : false;

    const deleteItem = (id) => setItemList(itemList.filter(item => item.id !== id))

    //Agregar items al carrito

    const addToCart = (item, quantity) => {
        if (isInList(item.id)) {
            setItemList(itemList.map(product => {
                return product.id === item.id ? { ...product, quantity: product.quantity + quantity } : product;
            }));
        } else {
            setItemList([...itemList, { ...item, quantity }])
        }

    }


    return (
        <CartContext.Provider value={{ itemList, addToCart, totalPrice, itemTotal, clearList, deleteItem }}>
            {children}
        </CartContext.Provider>
    )
}

