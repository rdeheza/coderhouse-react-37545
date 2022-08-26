import React from "react";
import logo from "../assets/images/logo.png"
import "../estilos.css"

const NavBar = () => {
    return (
        <div className='container-fluid cabecera '>
            <ul className="nav">
                <li className="nav-item">
                    <a className="nav-link active color-link" aria-current="page" href="#"><img src={logo} width="50" alt="Roberto"/></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link color-link" href="#">Vinos</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link color-link"   href="#">Bebidas blancas</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link color-link"  href="#">Cervezas</a>
                </li>
            </ul>
        </div>


    );


}
export default NavBar;