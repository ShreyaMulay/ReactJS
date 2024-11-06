import React from 'react'
import './TodoForm.css'

export default function TodoItem(props) {
  // console.log(props)
  const deleteTodo = (item)=>{
      props.setTodoArray(props.todoArray.filter(i=>(i !== item)))
  }
  const handleStrike = (item)=>{
    const newArray = props.todoArray.map((todo)=> todo.name === item ? {...todo,done : !todo.done}:todo)
    props.setTodoArray(newArray)
  }
  return (
    <div className='item' >
        <div className='itemName' >
          <span className={props.name.done ? "completed" : ""} onClick={()=>handleStrike(props.name.name)}>
            {props.name.name} 
          </span>
        <button className='deletebtn' onClick={()=>deleteTodo(props.name)}>x</button>
          
        </div>
        <hr className='line'/>
    </div>
  )
}
