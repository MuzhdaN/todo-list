import { useEffect, useState } from 'react'
import './styles.css'
import Confetti from 'react-dom-confetti'
import NewTodoForm from './NewTodoForm'
import TodoList from './TodoList'

export default function App() {

  // whatever u return from the function will be the defualt value
  const [todos, setTodos] = useState(() => {
  //  get info from local storage
    const localValue = localStorage.getItem("ITEMS")
    if(localValue == null) return "hello"

    return JSON.parse(localValue)
  }
  )

  const today = new Date();
  const formattedDate = today.toLocaleDateString(); 

  const [isConfettiActive, setIsConfettiActive] = useState(false);
  const confettiConfig = {
    angle: 86,
    spread: 360,
    startVelocity: 40,
    elementCount: 70,
    dragFriction: 0.12,
    duration: 3000,
    stagger: 3,
    width: "10px",
    height: "10px",
    perspective: "500px",
    colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
  };
  
  useEffect(() => {
     // takes the do and save it inside local storage 
    //  saving info in local storage
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])

  function addTodo(title) {
    setTodos((currentTodos) => {
      return [
        ...currentTodos, 
        {id: crypto.randomUUID(), title, completed:false}
      ]
    })
  }

  // in case you dont wanna use confeti
  // function toggleTodo(id, completed) {
  //   setTodos(currentTodos => {
  //     return currentTodos.map(todo => {
  //       if(todo.id === id) {
  //         return{...todo, completed}
  //       }
  //       return todo
  //     })
  //   })
  // }


  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      const updatedTodos = currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });

      if (completed) {
        setIsConfettiActive(true);
        setTimeout(() => setIsConfettiActive(false), 1000); // Turn off confetti after 2 seconds
      }
      return updatedTodos;
    });
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      console.log(currentTodos)
      return currentTodos.filter(todo => todo.id !== id)   
    })
  }

  return(
    <>
      <h1 className='title'> My Todo List </h1>
      <h4> {formattedDate} </h4>
      <NewTodoForm addTodo={addTodo} />
      {/* <h1 className='header'>My Todo List</h1> */}
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
      <Confetti active={isConfettiActive} config={confettiConfig}  disableForReducedMotion={true} />
    </>
  )
}