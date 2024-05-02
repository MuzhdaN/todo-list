import { useState } from "react"


const NewTodoForm = ({ addTodo }) => {
 
    const [newItem, setNewItem] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        if(newItem === '') return
        addTodo(newItem)

        setNewItem("")
      }
    
  return (
    <form onSubmit={handleSubmit} className='new-item-form'>
        {/* <label htmlFor="newItem">New Item</label> */}
        <div 
        className='form-row'
        >
          {/* <label htmlFor="newItem">New Item</label> */}
          <input type="text"
            value={newItem}
            onChange={e => setNewItem(e.target.value)}
          />
          <button className='btn'>Add</button>
        </div>
      </form>
  )
}

export default NewTodoForm