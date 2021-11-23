import React from 'react'
import { url3 as endpoint } from '../App/url';
import { useNavigate } from 'react-router-dom';

export const Carrito = ({datas}) => {
    const navegar = useNavigate();
    const limpiar = async () => {  
        localStorage.setItem("carrito", [])
        for (let index = 0; index < datas.length; index++) {
           let ind = datas[index].id;
            console.log(ind)
            await fetch(endpoint+"/"+ind, {
                method: 'DELETE'
            })
        }window.location.reload(true);}
      
        
    
    let id2=JSON.parse(localStorage.getItem("id"))
    console.log(id2)
    return (

        <div className="container">
            <button
                className="btn btn-warning btm-sm float-end mx-2" key={id2}
                onClick={() => navegar(`/detalle/${id2}`)}
            >
                {'<'}
            </button>
            {datas.map(info => (<>
                <div><img style={{ height: "60px" }} src={info.imagen} alt="" /></div>
                <h2>{info.nombreProducto}</h2><h3>${info.Precio}</h3><h3>{info.cantidad}</h3></>))}
            <button onClick={() => limpiar()}>Comprar</button>
        </div>
    )



}