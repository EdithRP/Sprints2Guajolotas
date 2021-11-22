import React from 'react';
import './TodoSearch.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {FiSearch} from 'react-icons/fi';
import { Link } from 'react-router-dom';
//import 'font-awesome/css/font-awesome.min.css';
//import { FiSearch } from "react-icons/fa";


//import { faCoffee } from '@fortawesome/fontawesome-free-solid'

//import '../node_modules/font-awesome/css/font-awesome.min.css'; 
function TodoSearch({searchvalue, setSearchValue}) {
  const onSearchValueChange=(event)=>{
    setSearchValue(event.target.value)
  }
  return (
    <div>
    <div className="Search">
      <i><FiSearch/></i></div>
      <div><input className="TodoSearch" 
    placeholder="Buscar" type="search" id="search" 
     value={searchvalue}
    onChange={onSearchValueChange}/><strong>
      <Link to={`/`}>
      <span>Cancelar</span></Link>
     </strong></div></div>
  )
  
}
export { TodoSearch };
