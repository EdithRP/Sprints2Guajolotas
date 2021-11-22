import React from 'react'
import { TodoSearch } from '../TodoSearch/index';
import { TodoList } from '../TodoList/index';
import { TodoItem } from '../TodoItem/index';
import { FiSearch } from "react-icons/fi";

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
          {(!loading&&!searchedTodos.length&&<p>
             <FiSearch style={{ width: "28px", height: "28px", }} />No hay resultados</p> )}
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