import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
export default function TodoList({item,index,setItems}) {
    const deleteItem = (index)=>{
        // console.log(index)
        setItems((oldIndex)=>{
            return oldIndex.filter((id)=>id.id !== index)
        })
    }
   
  return (
    <div>
        <span>{item.name}</span>
        <div>


          <FontAwesomeIcon icon={faTrash} onClick={()=>deleteItem(index)}/>
        </div>
       
    </div>
  )
}
