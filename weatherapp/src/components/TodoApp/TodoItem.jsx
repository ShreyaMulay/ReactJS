import React,{useState} from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

export default function TodoItem({td}) {
    const [line,setLine] = useState(false)
    
    const deleteItem = (item)=>{
        setLine(true)
    }

  return (
    <div>
        <DeleteIcon onClick={()=>deleteItem()}/>
            <li style={{textDecoration: line? 'line-through': td}}>
                <span>{td}</span>
            </li>
    </div>
  )
}
