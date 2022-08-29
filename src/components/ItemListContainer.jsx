import React from "react";
import img1 from "../assets/images/01.jpg"
import img2 from "../assets/images/02.jpg"
import img3 from "../assets/images/03.jpg"
import "../estilos.css"
import ItemCatalogo from "./ItemCatalogo";

const ItemListContainer = () => {
    return (
        <div className="container fluid">
            <div className="row">
                <div className="col md-3">
                    <ItemCatalogo nombre="Portillo Malbec" precio="$2000" imagen={img1} />
                </div>
                <div className="col md-3">
                    <ItemCatalogo nombre="Calafate Blanco" precio="$2500" imagen={img2} />
                </div>
                <div className="col md-3">
                    <ItemCatalogo nombre="Calafate Rosado" precio="$1500" imagen={img3} />
                </div>
            </div>
        </div>
    );
}
export default ItemListContainer;