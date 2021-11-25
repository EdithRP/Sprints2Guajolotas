import React, { useState } from 'react'
import { url3 as endpoint } from '../App/url';
import { useNavigate } from 'react-router-dom';
import { Modal } from '../Modal/Modal';


export const Carrito = ({ datas }) => {

    const [openModal, setOpenModal] = useState(false)
    const [idactual, setidactual] = useState([])

    const navegar = useNavigate();
    const limpiar = async () => {
        localStorage.setItem("carrito", [])
        for (let index = 0; index < datas.length; index++) {
            let ind = datas[index].id;
            console.log(ind)
            await fetch(endpoint + "/" + ind, {
                method: 'DELETE'
            })
        } window.location.reload(true);
    }

    let total = Object.values(datas).reduce((acc, { Cantidad, Precio }) => acc + Cantidad * Number(Precio), 0)

    const modaltrue = (idactual) => {
        setOpenModal(true)

        let nwearray = datas.find((p) => (p.id === idactual))
        setidactual(nwearray)
        console.log(idactual)
    }
    const cerrar = () => {
        setOpenModal(false)
    }



    let id2 = JSON.parse(localStorage.getItem("id"))
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
                <div onClick={() => modaltrue(info.id)} ><img style={{ height: "60px" }} src={info.imagen} alt="" /></div>
                <h2>{info.nombreProducto}</h2><h3>${info.Precio}</h3><h3>{info.Cantidad}</h3></>))}
            <div>Total<span> ${total}</span></div>
            <button onClick={() => limpiar()}>Comprar</button>
            {!!openModal && (
                <Modal>
                    <p onClick={() => cerrar()}>x</p>
                    <div style={{ height: "150px" }}>
                        <img style={{ height: "60px" }} src={idactual.imagen} alt="" />
                        <h2>{idactual.nombreProducto}</h2><h3>${idactual.Precio}</h3><h3>{idactual.Cantidad}</h3></div>

                </Modal>)}

        </div>

    )



}