import React, { useState } from 'react'
import './TodoForm.css'

export default function TodoForm({todoArray,setTodoArray}) {
    const [todo ,setTodo] = useState({name:'',done:false})
    const handleChange = (e)=>{
        setTodo({name:e.target.value,done:false})
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        setTodoArray([...todoArray,todo])
        setTodo({name:'',done:false})
    }
  return (
    <div>
      <form onSubmit={handleSubmit} className='todoform'>
        <div className='inputContainer'>
          <input type="text" value={todo.name} onChange={(e)=>handleChange(e)} className='modernInput' placeholder='Enter Todo Item...'/>
          <button type="submit" className='modernBtn'>Add</button>
        </div>
     </form>
    </div>
  )
}
