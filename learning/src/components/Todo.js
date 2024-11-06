import React, { useState } from 'react'
// import TodoItem from './TodoItem'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import Footer from './Footer'
import Header from './Header'

export default function Todo() {
   
  const [todoArray,setTodoArray] = useState([])

  const completedTodos =  todoArray.filter((td)=>td.done).length

  const totalTodos = todoArray.length

  return (
    <div>
      <Header />

      <TodoForm todoArray={todoArray} setTodoArray={setTodoArray}/>

      <TodoList todoArray={todoArray} setTodoArray={setTodoArray}/>

      <Footer completedTodos={completedTodos} totalTodos={totalTodos}/>    

    </div>
  )
}
