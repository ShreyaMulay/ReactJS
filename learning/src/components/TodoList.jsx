import React from 'react'
import TodoItem from './TodoItem'
import './TodoForm.css'


export default function TodoList({todoArray,setTodoArray}) {
  const sortedTodos = todoArray.slice().sort((a,b)=>Number(a.done)-Number(b.done))
  return (
    <div className='todolist'>
        {sortedTodos.map((item,index)=>(
            <TodoItem  key={index} name={item} todoArray={todoArray} setTodoArray={setTodoArray}/>
        ))}
    </div>
  )
}
