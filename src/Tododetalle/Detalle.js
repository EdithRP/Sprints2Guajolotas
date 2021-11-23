import { useParams, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { url3 as endpoint } from '../App/url';
import { Link } from 'react-router-dom';
import { BiCart } from "react-icons/bi";

const Detalle = ({ detalle, sabores }) => {
    console.log(sabores)
    const [contador, setContador] = useState(1);

    const navegar = useNavigate();

    const params = useParams();
    const { id } = params;
    console.log(id)
    localStorage.setItem("id", JSON.stringify(id))
  
    let id2=JSON.parse(localStorage.getItem("id"))
    console.log(id2)
    
    let arreglo = []
    let saboresproducto = []
    let encontrado=[]
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

    let nuevo = []
    const cambiar = (e) => {
        console.log(e)
        nuevo = productos.find((p) => (p.SaborProducto === e.target.id));
        return setbuscado(nuevo)
    }

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

    const nuevoagregar = (e) => {
        console.log(e)
        const idn = e.target.attributes.getNamedItem("id").value
        console.log(idn)
        nuevopro = detalle.find((p) => (p.id === Number(idn)));
        console.log(nuevopro)

        if (productoselec.find((p) => (p.id === Number(nuevopro.id)))) {
            eliminado = productoselec.indexOf(productoselec.find((p) => (p.id === Number(nuevopro.id))))
            productoselec.splice(eliminado, 1)

            return setproductoselec(productoselec), setcantidad(cantidad - nuevopro.Precio)
        } else {
            let cantidad2 = Object.values(productoselec).reduce((acc, { Precio }) => acc + Precio, Number(nuevopro.Precio))
            return setproductoselec([...productoselec, nuevopro], setcantidad(cantidad2)
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

    return (
        <div>
            <Link to={`/carrito/`}>
                <button className="Buttonnav">
                    <BiCart style={{ width: "28px", height: "28px", }} />
                    <span>9</span></button></Link>
                    
            <button
                className="btn btn-warning btm-sm float-end mx-2"
                onClick={() => navegar(`/`)}
            >
                {'<'}
            </button>
            <div className="container row row-cols-1 row-cols-md-5 g-4 py-5 text-center">
                <div className="card text-white bg-dark ms-3 py-3"  >
                    <div className="">
                        <img src={imagen} className="img-fluid rounded-start" alt="..." width="200px" />
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card-body">
                                <h5 className="card-title">{nombreProducto}</h5>
                                <p className="card-title">${Precio} MXN</p>
                                <div>
                                    <div>
                                        <button onClick={() => restar()}>-</button>{contador} <button onClick={() => sumar()}>+</button>
                                    </div>
                                    <h1>Sabor</h1>
                                    {saboresproducto.map((todo) => (
                                        <><img src={todo.imagen} width="100px" onClick={(e) => cambiar(e)} id={todo.SaborProducto} /></>
                                    ))}
                                </div>
                                <h2>{text}</h2>
                                <h3>Selecciona la {text} que màs te guste y disfruta de tu desayuno</h3>
                                {arreglo.map((todo) => (
                                    <><img src={todo.imagen} width="100px" />
                                        <span>+ ${todo.Precio} MXN</span>
                                        <input type="checkbox" onChange={(e) => nuevoagregar(e)} id={todo.id} /></>
                                ))}
                            </div>
                        </div>
                    </div>

                    <button
                        className="btn btn-warning btm-sm float-end mx-2"
                        onClick={() => Carrito()}
                    >
                        Agregar {contador} al carrito ${total}
                    </button>
                </div>

            </div>
        </div>
    )
}
export { Detalle }