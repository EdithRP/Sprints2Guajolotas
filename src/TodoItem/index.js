import React from 'react';
import { Item, Todoitem, Nombreproducto, Precio } from '../TodoItem/styleitem';
import { Link } from 'react-router-dom';
import '../index.css'

function TodoItem(props) {

  return (
    <Item>
    <li key={props.key}><Link
     className="link" to={`/detalle/${props.id}`} >
       <Todoitem> 
         
         <img src={props.imagen} width={100} height={100} alt="" />

          <div><Nombreproducto><li> {props.nombreProducto}</li></Nombreproducto>
          <Precio><li> ${props.Precio} MXN </li></Precio></div>
          
       </Todoitem>
        </Link>
      </li></Item>
  );
}

export { TodoItem };
