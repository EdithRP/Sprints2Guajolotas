import React, { useEffect, useState,  useLayoutEffect } from 'react'
import { Link } from 'react-router-dom';
import { TodoList } from '../TodoList/index';
import { TodoItem } from '../TodoItem/index';
import { Encabezado} from '../Header/Header';
import { Parrafo, Container, Search, Categorias, Button } from '../TodoItem/styleitem';
import { Header } from '../Header/HeaderStyle'
const Hero = ({ datas }) => {
  console.log(datas)
  const [productos, setProductos] = useState([])
  const getdata = () => {
    let productos4 = datas.filter((p) => (p.TipoProducto === "Guajolota"))
    return setProductos(productos4)
  }

  useLayoutEffect(() => {
    getdata()
  }, [datas])


  const handleCategory = (e) => {
    let productos4 = datas.filter((p) => (p.TipoProducto === e.target.id))
    console.log(productos4)
    return setProductos(productos4)
  }
  let contado = JSON.parse(localStorage.getItem("conteo"))

  return (
    <>
      <Container>
       <Header>
      <div>
        <img style={{width:"60px"}} src={'https://res.cloudinary.com/edithrincon/image/upload/v1636767522/samples/Guappjolotas/Iconos/logo_ub6swf.png'} alt="" />
      </div>
        <Encabezado contador={contado}></Encabezado> </Header>
        <Parrafo>Nada como una Guajolota para empezar el día</Parrafo>
        <Link to={`/search`}>
          <Search placeholder="Sabor de guajolota, bebida..." /></Link>
        <Categorias>
          <Button onClick={(e) => handleCategory(e)} id="Guajolota">
            Guajolotas
          </Button>
          <Button onClick={(e) => handleCategory(e)} id="Bebida">
            Bebidas
          </Button>
          <Button onClick={(e) => handleCategory(e)} id="Tamal">
            Tamales
          </Button>
        </Categorias>
      </Container>
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
