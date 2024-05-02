import TodoItem from "./TodoItem"

const TodoList = ({todos, toggleTodo, deleteTodo}) => {
  
  return (
    <ul className='list'>
    {todos.length === 0 && "No To Dos For Today?"}
    {todos.map(todo =>{
      return (
        <TodoItem
         {...todo} 
         key={todo.id } 
         toggleTodo={toggleTodo} 
         deleteTodo={deleteTodo} 
        />
      )
    })}
    </ul>
  )
}

export default TodoList
