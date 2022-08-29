import NavBar from './components/NavBar';
import React from "react";
import ItemListContainer from "./components/ItemListContainer"

function App() {
  /*  let imagen="vino01.png";
  let titulo="NIETO SENETINER";
  let subtitulo="PATRIMONIAL BONARDA 750 cc";
  let descripcion=`Vino aristocrático, de color rojo cardenal profundo.
  A la nariz se destacan las notas de frutales como frutos rojos como la 
  frambuesa y la cereza, entremezclado con los aromas de chocolate y café entregado por la madera.`;   
  let precio="$ 1860.00" */

  // const producto ={id:1,image:imagen,title:titulo,subtitle:subtitulo,description:descripcion,price:precio}
  return (
    <div className='container-fluid '>
      <NavBar />


      <hr />
      <ItemListContainer />
      {/*      <div className='row'>
        <div className="col-md-4 offset-md-2">
        <img src={producto.image} alt={producto.title} className="img-fluid" />
        </div>
        <div className="col-md-4">
        <h1>{producto.title}</h1>
        <h3>{producto.subtitle}</h3>
        <h2>{producto.price}</h2>
        <p>{producto.description}</p>

        </div>     
      </div>   */}
    </div>
  );
}

export default App;
