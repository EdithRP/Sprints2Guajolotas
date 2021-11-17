import React from 'react';
import './TodoItem.css';

function TodoItem(props) {
  

  return (
    <li className="TodoItem" onClick="">
      <span
      >
        <img src={props.imagen} width={100} height={100} className="imagen"alt=""/>
      </span>
      <ul
     >
      <li  className="nombreproducto"> {props.nombreProducto}</li> 
      <li className="Precio">
       ${props.Precio} MXN
      </li>
      </ul>
   
    </li>
  );
}

export { TodoItem };
