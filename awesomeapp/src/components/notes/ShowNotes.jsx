import React from 'react'
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';


export default function ShowNotes(props) {
    // console.log(props)
    const deleteNote = (id)=> {
        // console.log("::id",id)
        props.deleteItem(id)
    }
  return (
    <div className='note'>
       
        {props.newNote.map((item,index) => {
            return (
                <>
                    <h1>{item.title}</h1>
                    <br />
                    <p> {item.content}</p>
                    <Button className='btn'>
                        <DeleteIcon className='deleteIcon' onClick={()=>{deleteNote(index)}} key={index} id={index}/>
                    </Button>

                </>
            )
          })}
      
    </div>
  )
}
