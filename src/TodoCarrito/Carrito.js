import React, { useState } from 'react'
import { url3 as endpoint } from '../App/url';
import { useNavigate } from 'react-router-dom';
import { Modal } from '../Modal/Modal';
import { Header } from '../Header/HeaderStyle'
import { Item2, Todoitem2, Precio } from '../TodoItem/styleitem';
import { StyleContainer, StyleCard} from '../Tododetalle/Styletargeta'
import { Estilocantidad } from '../styles/StyleBoton'


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
  <div>
        <Header>
                <div
                    className="volver"
                    onClick={() => navegar(`/`)} >
                    <strong style={{ cursor: "pointer" }}>{'<'}</strong>
                </div>
               </Header>
           <StyleContainer>
            {datas.map(info => (<>
                <div onClick={() => modaltrue(info.id)} > <Item2><Todoitem2><img style={{ height: "60px" }} src={info.imagen} alt="" />
               <p><strong>{info.nombreProducto}</strong></p></Todoitem2><h3>X {info.Cantidad}</h3><Precio><h4>${info.Precio}</h4></Precio></Item2></div></>))}
            <Estilocantidad><strong>Total $ {total}</strong></Estilocantidad>
            <StyleCard onClick={() => limpiar()}>Pagar</StyleCard ></StyleContainer>
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