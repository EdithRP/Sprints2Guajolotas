import React from 'react'
import { TodoSearch } from '../TodoSearch/index';
import { TodoList } from '../TodoList/index';
import { TodoItem } from '../TodoItem/index';

function AppUI({
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
          {searchedTodos.map(todo => (
            <TodoItem
              key={todo.nombreProducto}
              nombreProducto={todo.nombreProducto}
              Precio={todo.Precio}
              imagen={todo.imagen}
            />
          ))}
        </TodoList>
 
      </React.Fragment> );
}

export {AppUI}