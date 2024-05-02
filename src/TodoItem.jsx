import { MdDelete } from "react-icons/md";

const TodoItem = ({id, title, completed, toggleTodo, deleteTodo}) => {
  return (
    <li>
        <label htmlFor="item">
        <input type="checkbox" checked={completed}
            onChange={ e => toggleTodo(id, e.target.checked)} 
        />
            {title}
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
        
        <button onClick={() => deleteTodo(id)} className='delete-btn'>
            <MdDelete  />
        </button>
  </li>
  )
}

export default TodoItem