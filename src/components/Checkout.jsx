import React from 'react';
import { useState } from 'react';
import Form from './Form';
import { Link } from "react-router-dom";

const Checkout = () => {
    const [orderId, setOrderId] = useState('');

    const handleId = (numeroDeOrden) => {
        setOrderId(numeroDeOrden);
    };

    if (orderId) {
        return (
            <div className="card4">  
               <h4>
               Gracias por tu compra, te dejamos el número de seguimiento:{' '}
                {orderId}
               </h4>
               <button >
                    <Link to={'/'}>Volver al inicio</Link> 
                 </button>
            </div>
        );
    }

    return (
        <div>
            <Form handleId={handleId} />
        </div>
    );
};

export default Checkout;