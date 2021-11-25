import { useParams, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { url3 as endpoint } from '../App/url';
import '../index.css'
import { Sabor, Contenedor} from "../Tododetalle/StyleDetalle"
import { Estilocantidad } from '../styles/StyleBoton'
import { Header } from '../Header/HeaderStyle'
import { Encabezado } from '../Header/Header';
import { StyleContainer, StyleCard, StyleDescripcion} from '../Tododetalle/Styletargeta'


const Detalle = ({ detalle, sabores }) => {
    console.log(detalle)
  
    const navegar = useNavigate();
    const params = useParams();
    const { id } = params;
    console.log(id)
    localStorage.setItem("id", JSON.stringify(id))

    let id2 = JSON.parse(localStorage.getItem("id"))
    console.log(id2)

    let arreglo = []
    let saboresproducto = []
    let encontrado = []
    //Se encuentra el valor selecionado y de acuerdo a sus propiedades se crea los arreglos
    encontrado = detalle.find(producto => producto.id === Number(id2))
    console.log(encontrado)
    
    const [buscado, setbuscado] = useState(encontrado);
    console.log(buscado)
    let text = ""
    const { nombreProducto, imagen, Precio, TipoProducto } = buscado;
    if (TipoProducto === "Bebida") {
        arreglo = detalle.filter(productos => productos.TipoProducto === "Guajolota")
        saboresproducto = sabores.filter(sabor => sabor.TipoProducto === "Bebidas")
        text = "Torta"
    } else {
        arreglo = detalle.filter(productos => productos.TipoProducto === "Bebida")
        saboresproducto = sabores.filter(sabor => sabor.TipoProducto === "Tamal")
        text = "Bebida"

    }

    let productos = []

    if (TipoProducto === "Guajolota") {
        productos = detalle.filter(productos => productos.TipoProducto === "Guajolota")
    } else if (TipoProducto === "Bebida") {
        productos = detalle.filter(productos => productos.TipoProducto === "Bebida")
    } else {
        productos = detalle.filter(productos => productos.TipoProducto === "Tamal")
    }
    const [estilo, setestilo] = useState(false)
  

    let nuevo = []
    const cambiar = (e) => {
        setestilo(!estilo);
        console.log(e);
        nuevo = productos.find((p) => (p.SaborProducto === e.target.id));
        return setbuscado(nuevo)
    }
    const [contador, setContador] = useState(1);
    const restar = () => {
        if (contador > 1) {
            return setContador(contador - 1);
        }
    }
    const sumar = () => {
        if (contador <= 19) {
            return setContador(contador + 1);
        }
    }

    const [productoselec, setproductoselec] = useState([]);

    let nuevopro = []
    let eliminado = 0;
    const [cantidad, setcantidad] = useState(0);
    const [conteo, setconteo] = useState(0);
    const nuevoagregar = (e) => {
        console.log(e)
        const idn = e.target.attributes.getNamedItem("id").value
        console.log(idn)
        nuevopro = detalle.find((p) => (p.id === Number(idn)));
        console.log(nuevopro)

        if (productoselec.find((p) => (p.id === Number(nuevopro.id)))) {
            eliminado = productoselec.indexOf(productoselec.find((p) => (p.id === Number(nuevopro.id))))
            productoselec.splice(eliminado, 1)
            setcantidad(cantidad - nuevopro.Precio)
            setconteo(conteo - 1)
            return setproductoselec(productoselec)
        } else {
            let cantidad2 = Object.values(productoselec).reduce((acc, { Precio }) => acc + Precio, Number(nuevopro.Precio))
            let contar = Object.values(productoselec).reduce((acc, { Precio }) => acc + 1, Number(nuevopro.Precio))
            return setproductoselec([...productoselec, nuevopro], setcantidad(cantidad2), setconteo(contar)
            )
        }
    }
    console.log(cantidad)
    let total = (contador * buscado.Precio) + cantidad
    let totalArreglo = []


    const Carrito = () => {
        totalArreglo = [...productoselec]
        buscado.Cantidad = contador;
        totalArreglo.push(buscado);
        localStorage.setItem('carrito', JSON.stringify(totalArreglo))
        localStorage.setItem('conteo', JSON.stringify(conteo + 1))
        for (let i = 0; i < totalArreglo.length; i++) {
            fetch(endpoint, {
                method: 'POST',
                body: JSON.stringify(totalArreglo[i]),
                headers: {
                    'Content-Type': 'application/json; charset=utf-8'
                }
            })
        }
    }

    let contado = JSON.parse(localStorage.getItem("conteo"))

    return (
        <div >
        
            <Header>
                <div
                    className="volver"
                    onClick={() => navegar(`/`)} >
                    <strong style={{ cursor: "pointer" }}>{'<'}</strong>
                </div>
                <Encabezado contador={contado}></Encabezado></Header>
            <StyleContainer>
                    <div className="">
                        <img src={imagen} className="img-fluid rounded-start" alt="..." width="200px" />
                    </div>
                    <StyleDescripcion className="nombre">
                        <h5>{nombreProducto}</h5>
                    <p className="precio">${Precio} MXN</p>
                </StyleDescripcion>
                <Estilocantidad>
                    <button className="boton" onClick={() => restar()}>-</button>
                    <h1>{contador} </h1>
                    <button className="boton" onClick={() => sumar()}>+</button>
                </Estilocantidad>
            
              <Sabor>
              <h2>Sabor</h2>
                {saboresproducto.map((todo) => (
                    <><img src={`${todo.imagen}`} onClick={(e) => cambiar(e)} className= {`${!!estilo&&'truesabor'}`} id={todo.SaborProducto} /></>
                ))}</Sabor>

                <h2>{text}</h2>
                <h3>Selecciona la {text} que màs te guste y disfruta de tu desayuno</h3>
                <Contenedor>{arreglo.map((todo) => (
                    <> <div className="combo"><img src={`${todo.imagen}`}/>
                        <span>{todo.nombreProducto}</span>
                        <div className="items"> <span>+ ${todo.Precio} MXN</span>
                        <input type="checkbox" onChange={(e) => nuevoagregar(e)} id={todo.id} /></div></div></>
                ))}</Contenedor>

              
                <StyleCard onClick={() => Carrito()}>
                    Agregar {contador} al carrito ${total}
                </StyleCard>
          

        </StyleContainer>
     </div>
    )
}
export { Detalle }