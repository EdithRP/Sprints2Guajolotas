import React from 'react'
import { Table } from 'react-bootstrap';

export const Carrito = () => {   

   
    let data = localStorage.getItem("items")
    let pagar=0;
    let cantidad=0;  
    let parsedItem=[]
    if(!!data){
    parsedItem = JSON.parse(localStorage.getItem("items"))
    pagar = Object.values(parsedItem).reduce((acc, { cantidad, price }) => acc + 1* Number(price), 0)
    cantidad = Object.values(parsedItem).reduce((acc, { cantidad }) => acc + 1, 0)}
    console.log(data)
    return(

    <div className="container">
                <Table striped bordered hover size="sm">
                                  <thead>
                                  <tr> 
                                  <th>Imagen</th>
                                  <th>Nombre</th>
                                  <th>Precio</th>
                                  <th>Cantidad</th>
                                  </tr>
                                  </thead>
                                  {parsedItem.map(info => (
        <tbody>
        <td><img style={{height:"60px"}}  src={info.image} alt=""/> </td>
        <td>{info.description}</td><td>${info.price}</td><td>{1}</td>
        </tbody>))}
                                 
                                  <tfoot>
                                  <td>Comprar todo</td>
                                  <td></td>
                                  <td>${pagar}</td>
                                  <td>{cantidad}</td>
                                  </tfoot>
                                  </Table>
                                  </div>
)



}