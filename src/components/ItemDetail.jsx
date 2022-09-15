import React ,{useState} from 'react';
import ItemCount from '../components/ItemCount';
import { Link } from 'react-router-dom';
const ItemDetail = ({ item }) => {
  const [goCart,SetGoCart]=useState(false)
  
    const onAdd=(contador)=>{
        SetGoCart(true)
    }
    return (
        <div className="detail">
            <img src={item.picture_url} alt={item.title} />
            <div className="infoDetail">
                <h2>{item.title}</h2>
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type 
                specimen book. It has survived not only five centuries, but also the leap into
                 electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s 
                 with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                  with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <h3>Precio:$ {item.price}.-</h3>
                {
                 goCart ?
                  <Link to={'/cart'}>Finalizar la compra</Link> 
                 :<ItemCount stock={item.stock} initial={1} onAdd={onAdd}  />
                }
                  
            </div> 
        </div>
    );
};

export default ItemDetail;
