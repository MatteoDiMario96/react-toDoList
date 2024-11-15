import React, { useState, useEffect } from "react";
import ToDoInput from "./assets/components/ToDoInput";
import ToDoList from "./assets/components/ToDoList";



function App() {
  const[todos, setTodos] = useState([
    'Learn React',
    'Make good project',
    'Publish on GitHub',
    'Publish on Linkedin'
  ])

  const[toDoValue, setToDoValue] = useState('');

  function persistData(newList){
    localStorage.setItem('todos', JSON.stringify({ todos: newList}))
  }

  function handleNewTodo(newToDo){
    const newToDoList = [...todos, newToDo];
    persistData(newToDoList)
    setTodos(newToDoList);
  }

  function handleDeleteToDo(index){
      const newToDoList = todos.filter((todo, todoIndex) =>{
        return todoIndex !== index
      })
      persistData(newToDoList)
      setTodos(newToDoList)
  }

  

  function handleEditToDo(index){
    const valueToBeEdited = todos[index]
    setToDoValue(valueToBeEdited)
    handleDeleteToDo(index)
  }

  useEffect(() => {
    if(!localStorage) {
      return
    }

    let localTodos = localStorage.getItem('todos')
    if(!localTodos){
      return
    }

    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)
  }, [])

  return (
    <>
      <div className="container">
          <header className="header">
              <h1>To-Do-List in React</h1>
          </header>
          <ToDoInput
              handleNewTodo={handleNewTodo}
              toDoValue={toDoValue}
              setToDoValue={setToDoValue}
          />
          <ToDoList 
              todos={todos}
              handleDeleteToDo={handleDeleteToDo}
              handleEditToDo={handleEditToDo}
          />
      </div>
    </>
  )
}

export default App
