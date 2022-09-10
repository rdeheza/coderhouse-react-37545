import React from 'react';
import ItemCount from '../components/ItemCount';

const ItemDetail = ({ item }) => {
    const onAdd=(contador)=>{
        alert(`total a comprar: ${contador}`)
    }
    return (
        <div className="detail">
            <img src={item.picture_url} alt={item.title} />
            <div className="infoDetail">
                <h2>{item.title}</h2>
                <p>
                Portillo es una colección de vinos desarrollados por 
                Bodegas Salentein, la primera bodega establecida en el 
                valle de Uco. Localizados en medio de sus viñedos a 4,000 
                pies de altitud, la bodega trabaja sólo con la gravedad, 
                con tres niveles que comienzan bajo tierra.
                </p>
                <h3>Precio: {item.price}.-</h3>

                <ItemCount stock={10} initial={1} onAdd={onAdd}  />
            </div>
        </div>
    );
};

export default ItemDetail;
