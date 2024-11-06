import React, { useState } from 'react'
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import TodoItem from './TodoItem';

export default function Todo() {
    const [todo,setTodo] = useState()
    const [allTodos,setAllTodos] = useState([])
    
    const handleChange = (e)=>{
        setTodo(e.target.value)
    }
    const handleClick = ()=>{
        setAllTodos((prev)=>{
            return [...prev,todo]
        })
        setTodo('')
    }
    
  return (
    <div>
        <div className="main_div">
            <div className="center_div">
                <br />
                <h1>Todo List</h1>
                <br />
                <input type="text" className="input" placeholder='Add item...' value={todo} onChange={(e)=>handleChange(e)}/>
                <Button variant="outlined" className='newBtn' onClick={handleClick}>
                    <AddIcon />
                </Button>
                <br />
                <ol>
                    {allTodos.map((td,index)=>(
                        <TodoItem key={index} td={td}/>
                    ))}
                </ol>
                <br />
            </div>
        </div>
    </div>

  )
}
