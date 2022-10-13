import { addDoc, collection, getFirestore, serverTimestamp } from 'firebase/firestore';
import React from 'react';
import { useState } from 'react';
import { useCartContext } from '../context/CartContext';
import "../estilos.css" ;


const Form = ({ handleId }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const { totalPrice, cart, removeAll } = useCartContext();
    const total = totalPrice();

    const handleSubmit = (e) => {
        e.preventDefault();
        const orden = {
            buyer: { name, phone, email },
            items: cart.map(product => ({ id: product.id, title: product.title, price: product.price ,quantity:product.quantity})),
            date: serverTimestamp(),
            total,
        };
        const db = getFirestore();
        const refOrden = collection(db, 'orders');

        addDoc(refOrden, orden).then((res) => {
            handleId(res.id);
            removeAll();
        });
    };

    const handleName = (e) => setName(e.target.value);

    const handlePhone = (e) => setPhone(e.target.value);

    const handleEmail = (e) => setEmail(e.target.value);

    return (
        
        <form action="" onSubmit={handleSubmit} >

          <div className="card4">  
            <div className="form-row">

            <div className="form-group col-md-12 ">
                <label for="inputAddress">Nombre</label>
                <input type="text" className="form-control" value={name} onChange={handleName} placeholder="Nombre" />
            </div>
            <div className="form-group col-md-12 ">
                <label for="inputAddress">telefono</label>
                <input type="text" className="form-control" value={phone} onChange={handlePhone} placeholder="Telefono" />
            </div>
                <div className="form-group col-md-12">
                    <label for="inputEmail">Email</label>
                    <input type="email" className="form-control" onChange={handleEmail} value={email} placeholder="Email" />
                </div>
            
            </div>
           

            <button type="submit" className="btn btn-primary">Registrar Pago</button>
            </div> 
        </form>
    );
};

export default Form;