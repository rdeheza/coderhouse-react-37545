import React from "react";
import logo from "../assets/images/logo.png"
import "../estilos.css"
import CardWidget from "../components/CardWidget";

const NavBar = () => {
    return (
        <div className='container-fluid cabecera  d-flex flex-wrap'>
            <ul className="nav me-auto">

                <li className="nav-item">
                    <a className="nav-link active color-link" aria-current="page" href="/"><img src={logo} width="35" alt="Roberto" /></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link color-link" href="/">Vinos</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link color-link" href="/">Bebidas blancas</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link color-link" href="/">Cervezas</a>
                </li>

            </ul>
            {/* <button><CardWidget /></button> */}
             <ul className="nav">
                <li className="nav-item">
                    <a className="nav-bar brand" href="/"> <CardWidget /></a>
                </li>
            </ul> 
        </div>


    );


}
export default NavBar;