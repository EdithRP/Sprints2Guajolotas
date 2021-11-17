import React from 'react';
import { Link } from "react-router-dom";
import './Nav.css';

export const Navbar = () => {
    return (
        <div>
            <div className="header">
                <nav>
                <Link className="link" to="/icono"></Link>
                <Link className="link" to="/Buscar"></Link>
                <Link className="link" to="/Carrito"></Link>
                </nav>
            </div>
            <hr/>
        </div>
    )
}
