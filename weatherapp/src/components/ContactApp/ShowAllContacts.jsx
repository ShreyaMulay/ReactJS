import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import PhoneBluetoothSpeakerIcon from '@mui/icons-material/PhoneBluetoothSpeaker';


export default function ShowAllContacts({allContacts,setAllContacts}) {
  const deleteContact =(item)=>{
    console.log('deleteContact',allContacts)
    console.log('item',item)

    // props.setTodoArray(props.todoArray.filter(i=>(i !== item)))
    // setAllContacts(allContacts.filter(i=>(i !== phoneno)))
    
    // setAllContacts(allContacts.filter(i=>(i.phnno !== item)))

    setAllContacts((oldContacts)=>{
      return oldContacts.filter((conatct,index)=>conatct.phnno !== item)
    })

  }
  return (
    <div className='contactbody'>

      {allContacts.map((item,id)=>
                <div className='contactinfo card' key={id}>
                    <div className='' style={{padding:'1rem 1rem'}}>
                      <div className='contacttitle'>{item.name}</div>
                      <div className='contactphone'><PhoneBluetoothSpeakerIcon />  {item.phnno}</div>
                    </div>
                    <div onClick={()=>deleteContact(item.phnno)} style={{cursor:'pointer'}}> 
                        <FontAwesomeIcon icon={faTrash} style={{color: "#b21515",}} />
                    </div>
                    
                </div>
                          
      )}

      
    </div>
  )
}
