import React, { useEffect, useState } from 'react';
import { products } from '../store/products';
import ItemDetail from '../components/ItemDetail';

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});

    useEffect(() => {
        const getItem = () =>
            new Promise((res, rej) => {
                const product = products.find((prod) => prod.id === 1);
                setTimeout(() => {
                    res(product);
                }, 2000);
            });

        getItem()
            .then((info) => {
                setItem(info);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    return (
        <div style={{ minHeight: '70vh' }}>
            <ItemDetail item={item} />
        </div>
    );
};

export default ItemDetailContainer;
