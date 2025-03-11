import { useState } from "react";
import ToDoInput from "./components/todoInput";
import TodoList from "./components/TodoList";

function App(){

  let [listToDo,setListToDo] = useState([]);

  let addList = (inputText) => {
    
    if(inputText !== ""){
      setListToDo([...listToDo,inputText]); 
    }
  }

  let deleteListItems = (key) => {
    let newListTodo = [...listToDo];
    newListTodo.splice(key,1);
    setListToDo([...newListTodo]);
  }

  return <>
      <div className="main-container">
        <div className="center-container">
          <h1 className="mainHeading">ToDo Items</h1>
          <ToDoInput addList = {addList}/>

          {listToDo.map((data,i) => (
            <TodoList items = {data} key = {i} index = {i} deleteItem ={deleteListItems}></TodoList>
          ))}
        </div>
      </div>
  </>
}

export default App;