import React from 'react';
import './TodoItem.css';
import { Link } from 'react-router-dom';

function TodoItem(props) {


  return (
     <li key={props.key} className="TodoItem" onClick=""><Link
     to={`/detalle/${props.id}`} >

        <span
        >
          <img src={props.imagen} width={100} height={100} className="imagen" alt="" />
        </span>
        <ul
        >
          <li className="nombreproducto"> {props.nombreProducto}</li>
          <li className="Precio">
            ${props.Precio} MXN
          </li>
        </ul>
        </Link>
      </li>
  );
}

export { TodoItem };
