import React, { useState } from 'react';
import ItemCount from '../components/ItemCount';
import { Link } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';
const ItemDetail = ({ item }) => {
    const [goCart, SetGoCart] = useState(false)
    const { addProduct } = useCartContext();

    const onAdd = (contador) => {
        SetGoCart(true)
        addProduct(item, contador)
    }
    return (
        <div className="detail">
            <img src={item.picture_url} alt={item.title} />
            <div className="">
                <h2>{item.title}</h2>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type
                    specimen book.
                </p>
                <h3>Precio:$ {item.price}.-</h3>
                {
                    goCart ?
                        <button >
                            <Link to={'/cart'}>Finalizar la compra</Link>
                        </button>

                        : <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
                }

            </div>
        </div>
    );
};

export default ItemDetail;
