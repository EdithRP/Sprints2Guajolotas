import React from 'react'
import { BiCart } from "react-icons/bi";
import { Header } from '../Header/HeaderStyle'

import { Link } from 'react-router-dom'

const Encabezado = ({contador}) => {

  return (
      <div>
        <Link to={`/carrito/`} >
          <BiCart className="targeta" />
        </Link>{contador}
      </div>
    
  )
}
export { Encabezado }