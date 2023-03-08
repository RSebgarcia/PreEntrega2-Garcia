
import React from "react";

function ItemListContainer({ greeting }) {
    return (
    <div style={{ backgroundColor: '#f2f2f2', padding: '20px', textAlign: 'center' }}>
        <h2>{greeting}</h2>
        <p style={{ fontStyle: 'italic' }}>Componente ItemListContainer utilizando el styling integrado</p>
    </div>
    );
};
export default ItemListContainer 