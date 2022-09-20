import React from "react";
import logo from "../assets/images/logonuevo.png"
import "../estilos.css"
import CardWidget from "../components/CardWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className='container-fluid cabecera  d-flex flex-wrap'>
            <ul className="nav me-auto">

                <li className="nav-item">
                    <Link className="nav-link active " aria-current="page" to={"/"}><img src={logo} width="95" alt="Roberto" /></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link " to={"/categoria/vino"}>Vinos</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to={"/categoria/blancas"}>Bebidas blancas</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to={"/categoria/cerveza"}>Cervezas</Link>
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