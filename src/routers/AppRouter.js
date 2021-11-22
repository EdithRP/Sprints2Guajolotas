import React, { useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';
import App from '../App/index.js';
import { Navbar } from '../AppPrincipal/Navbar.js';
import axios from 'axios';
import {Hero} from '../App/Hero.js'
import {Detalle} from '../Tododetalle/Detalle'
import { url } from '../App/url.js';
import { url2 } from '../App/url.js';

export const AppRouter = () => {

    const [todos, settodos] = useState([]);
    const [sabores, setsabores] = useState([]);


    useEffect(() => {
        getData();
        getData2();
    }, [])

    const getData = () => {
        axios.get(url)
            .then(response => {
                settodos(response.data)
            })
            .catch(error => {
                console.log(error);
            })
    }
    const getData2 = () => {
        axios.get(url2)
            .then(response => {
                setsabores(response.data)
            })
            .catch(error => {
                console.log(error);
            })
    }
    //<Route exact path="/search/:id" element={<DetalleTarea detalle={tareas}/>} />

    return (
        <div>
            <Router>

                <Routes>
                    <Route exact path="/" element={<Hero datas={todos} />} />
                    <Route exact path="/search" element={<App datas={todos} />} />
                    <Route exact path="/detalle/:id" element={<Detalle detalle={todos} sabores={sabores} />} />
                    <Route exact path="/carrito/" element={<App datas={todos} />} />


                </Routes>
            </Router>
        </div>
    )
}
