import React from 'react';
import './TodoSearch.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Todosearch, Search, Texto, Contenedor } from '../TodoSearch/TodoSearch';


function TodoSearch({ searchvalue, setSearchValue }) {
  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value)
  }
  return (
    <div>
      <Search><i><FiSearch/></i></Search>
      <Contenedor><Todosearch className="TodoSearch"
        placeholder="Sabor de guajolota" type="search" id="search"
        value={searchvalue}
        onChange={onSearchValueChange} /><Texto>
          <Link className="link" to={`/`}>
            Cancelar</Link>
        </Texto></Contenedor></div>
  )

}
export { TodoSearch };
