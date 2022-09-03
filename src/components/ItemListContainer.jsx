import React from "react";
/* import img1 from "../assets/images/01.jpg"
import img2 from "../assets/images/02.jpg"
import img3 from "../assets/images/03.jpg" */
import "../estilos.css"
//import ItemCatalogo from "./ItemCatalogo";
import ItemCount from "./itemCount";
const ItemListContainer = () => {
    const onAdd=(contador)=>{
        alert(`total a comprar: ${contador}`)
    }
    return (
        <div className="container fluid">
           
               <ItemCount stock={8} initial={1} onAdd={onAdd}/>
         
        
            {/* <div className="row">
                <div className="col md-3">
                    <ItemCatalogo nombre="Portillo Malbec" precio="$2000" imagen={img1} stock="10" />
                </div> */}
               {/*  <div className="col md-3">
                    <ItemCatalogo nombre="Calafate Blanco" precio="$2500" imagen={img2} />
                </div>
                <div className="col md-3">
                    <ItemCatalogo nombre="Calafate Rosado" precio="$1500" imagen={img3} />
                </div> 
            </div>*/}
        </div>
    );
}
export default ItemListContainer;