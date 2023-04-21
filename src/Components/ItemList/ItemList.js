import React from "react";
import Item from "../Item/Item";
import { useParams } from "react-router-dom";


const ItemList = ({ item }) => {
    const { id } = useParams();

// 

    return (
        <div className="row" id="itemdetail">
            {
                item.map(item =>
                    <div className="col-lg-3 col-md-4" key={item.id}>
                        <Item item={item} />
                    </div>
                )
            }
        </div>
    )
}
export default ItemList;