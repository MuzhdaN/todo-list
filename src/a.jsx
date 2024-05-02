import { useState } from 'react'
import './styles.css'

export default function App() {
  const [newItem, setNewItem] = useState("")
  const [todos, setTodos] = useState([])

  function handleSubmit(e) {
    e.preventDefault()

    setTodos((currentTodos) => {
      return [
        ...currentTodos, 
        {id: crypto.randomUUID(), title:newItem, completed:false}
      ]
    })
    setNewItem("")
  }

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if(todo.id === id) {
          return{...todo, completed}
        }
        return todo
      })
    })
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      console.log(currentTodos)
      return currentTodos.filter(todo => todo.id !== id)
      
    })
  }

  return(
    <>
      <form onSubmit={handleSubmit} className='new-item-form'>
        <div className='form-row'>
          <label htmlFor="newItem">New Item</label>
          <input type="text"
            value={newItem}
            onChange={e => setNewItem(e.target.value)}
          />
          <button className='btn'>Add</button>
        </div>
      </form>
      <h1>Todo List</h1>
      <ul className='list'>
      {todos.length === 0 && "no todo"}
      {todos.map(todo =>{
        return (
          <li key={todo.id}>
          <label htmlFor="item">
            <input type="checkbox" checked={todo.completed}
            onChange={ e => toggleTodo(todo.id, e.target.checked)} 
            />
            {todo.title}
          </label>
          {/*
          onClick={() => deleteTodo(todo.id)}: This is an arrow function
           that calls deleteTodo with todo.id as an argument. It’s a function expression 
           that gets executed only when the onClick event occurs. This is the correct way 
           to pass an argument to an event handler in React.
          onClick={deleteTodo(todo.id)}: This is a function call that executes
           deleteTodo immediately during the rendering phase, not as a response 
           to the onClick event. It will call deleteTodo as soon as the component renders, 
           which is not the intended behavior for an onClick event handler.
          */}
          <button onClick={() => deleteTodo(todo.id)} className='btn btn-danger'>delete</button>
        </li>
        )
      })}
      </ul>
    </>
  )
}