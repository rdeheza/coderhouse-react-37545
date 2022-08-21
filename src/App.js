import './estilos.css';

function App() {
  let imagen="hamburguesa.png";
  let titulo="Big Mac";
  let calorias="505 kcal";
  let descripcion=`Quizás sean las dos hamburguesas de carne 100% 
      vacuna con esa salsa especial y queso derretido, el toque de 
      cebolla y la frescura de la lechuga o el crocante del pepino, 
      lo que la hace la hamburguesa más famosa del mundo. Un sabor único.`;  

  const producto ={id:1,image:imagen,title:titulo,calories:calorias,description:descripcion}
  return (
    <div className="container">
      <div className='row'>
        <div className="col-md-4 offset-md-2">
        <img src={producto.image} alt={producto.title} className="img-fluid" />
        </div>
        <div className="col-md-4">
        <h1>{producto.title}</h1>
        <p>{producto.calories}</p>
        <p>{producto.description}</p>
        </div>
        
  
       
      </div>


       <h1>{}</h1>
    </div>
  );
}

export default App;
