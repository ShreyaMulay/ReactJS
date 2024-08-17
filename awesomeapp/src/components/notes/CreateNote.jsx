import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

export default function CreateNote(props) {

  const [note, setNote] = useState({
    title: '',
    content: ''
  })

  const [expand, setExpand] = useState(false)
  const inputEvent = (event) => {
    console.log(event.value)
    const value = event.target.value
    const name = event.target.name


    setNote((prev) => {
      return {
        ...prev,
        [name]: value
      }
    })
    console.log(note)
  }
  const addEvent = () => {
    props.passNote(note)
  }

  const expandIt  = () => {
    setExpand(true)
  }
  const backTonormal = () => {
    setExpand(false)
  }
  return (
    <div className='main_note' onDoubleClick={backTonormal}>
      <form action="" className="main_form">
        {expand ?
          <input type="text" name="title" value={note.title} onChange={inputEvent} placeholder="Title" />
          : null
        }
        <textarea rows='' cols='' name="content" value={note.content} onChange={inputEvent} placeholder='Write a note...' onClick={expandIt} ></textarea>

        { expand ?
          <Button onClick={addEvent}>
            <AddIcon className='plus_sign'  />
          </Button>
          : null
        }

      </form>

    </div>
  )
}
