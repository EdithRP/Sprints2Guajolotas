import React from 'react'
import { TodoSearch } from '../TodoSearch/index';
import { TodoList } from '../TodoList/index';
import { TodoItem } from '../TodoItem/index';
import { FiSearch } from "react-icons/fi";
import { Buscador, Textoloading} from '../TodoSearch/TodoSearch';

function AppUI({
    loading,
    searchvalue,
    setSearchValue,
    searchedTodos,
  }
    )
    
    {
    return(<React.Fragment>
     
        <TodoSearch 
        searchvalue={searchvalue}
         setSearchValue={setSearchValue} />
  
        <TodoList>
        <Buscador>{(!loading&&!searchedTodos.length&&<p>
             <FiSearch className="logobuscador"/><Textoloading>Realiza una busqueda</Textoloading></p> )}</Buscador>
          {searchedTodos.map(todo => (
            <TodoItem
              key={todo.nombreProducto}
              id={todo.id}
              nombreProducto={todo.nombreProducto}
              Precio={todo.Precio}
              imagen={todo.imagen}
            />
          ))}
        </TodoList>
 
      </React.Fragment> );
}

export {AppUI}