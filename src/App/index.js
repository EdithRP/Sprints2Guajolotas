import React, { useEffect, useState }  from 'react';
import {AppUI} from './Appui'
import axios from 'axios';
import {url} from './url.js';


function App() {

  const localStorageTodos= localStorage.getItem('TODOS_V1');
  let parsedTodos;

  if(!localStorageTodos){

  }else{
    parsedTodos=JSON.parse(localStorageTodos)
  }

  const [todos, settodos]=useState([]); 
  const [searchvalue, setSearchValue]=useState('');

  useEffect(() => {
    getData();
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
  let searchedTodos=[]

  if(!searchvalue.length>=1){
    searchedTodos=[];
  }else{
    searchedTodos=todos.filter(todo=>{
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
