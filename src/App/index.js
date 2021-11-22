import React, { useState }  from 'react';
import {AppUI} from './Appui'

function App({datas}) {
  console.log(datas)
  const [searchvalue, setSearchValue]=useState('');

  let searchedTodos=[]
   
  if(!searchvalue.length>=1){
    searchedTodos=[];
  }else{
    searchedTodos=datas.filter(todo=>{
    const todoText= todo.nombreProducto.toLowerCase();
    const searchText= searchvalue.toLowerCase();
    return todoText.includes(searchText);
    });
  }
  return (
   <AppUI
 
   searchvalue={searchvalue}
   setSearchValue={setSearchValue}
   searchedTodos={searchedTodos}
    />
  );
}

export default App;
