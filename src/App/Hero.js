import React, { useEffect, useState } from 'react'
//import { Button, Categories, Container, Image, Paragraph, Product, ProductInfo, ProductName, ProductPrice, Products, Search } from '../styles/index.css';
import { Link } from 'react-router-dom';
import { TodoList } from '../TodoList/index';
import { BiCart } from "react-icons/bi";
import { TodoItem } from '../TodoItem/index';


const Hero = ({datas}) => {
   console.log(datas)
  const [productos, setProductos] = useState([])

  useEffect(() => {
    getdata()
  }, [datas])

  const getdata =()=>{
    let productos4 = datas.filter((p) => (p.TipoProducto === "Guajolota"))
    return setProductos(productos4)
  }
  
  const handleCategory = (e) => {
    let productos4 = datas.filter((p) => (p.TipoProducto === e.target.id))
    console.log(productos4)
    return setProductos(productos4)
  }

  return (
    <>
      <div>
      <Link to={`/carrito/`}>
              <button className="Buttonnav">              
              <BiCart style={{ width: "28px", height: "28px", }} />
                        <span>9</span></button></Link>  
        <p>Nada como una Guajolota para empezar el día</p>
        <Link to={`/search`}>
          <input placeholder="Sabor de guajolota, bebida..."/></Link>
        <div>
          <button onClick={(e) => handleCategory(e)} id="Guajolota">
            Guajolotas
          </button>
          <button onClick={(e) => handleCategory(e)} id="Bebida">
            Bebidas
          </button>
          <button onClick={(e) => handleCategory(e)} id="Tamal">
            Tamales
          </button>
        </div>
      </div>
      <div>
        <TodoList>
          {productos.map((todo) => (
            <TodoItem
              key={todo.nombreProducto}
              id={todo.id}
              nombreProducto={todo.nombreProducto}
              Precio={todo.Precio}
              imagen={todo.imagen}
            />
          ))}</TodoList>
      </div>
    </>
  );
}

export { Hero }
