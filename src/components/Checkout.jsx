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
            
                <span className="badge rounded-pill text-bg-danger  spanclass2">Gracias por tu compra, te dejamos  </span>
                <span className="badge rounded-pill text-bg-danger  spanclass2"> el número de seguimiento:{' '}  {orderId}</span>
                <br />
                <br />
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