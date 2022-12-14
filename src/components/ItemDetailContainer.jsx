import React, { useEffect, useState } from 'react';
import ItemDetail from '../components/ItemDetail';
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore"
const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const { idDetalle } = useParams();

    useEffect(() => {
        const querydb = getFirestore();
        const querydoc = doc(querydb, 'products', idDetalle);
        getDoc(querydoc)
            .then(res => setItem({ id: res.id, ...res.data() }))
    },);
    return (
        <div className='card3' style={{ minHeight: '70vh' }}>
            <ItemDetail item={item} />
        </div>
    );
};

export default ItemDetailContainer;
