import React, { useState } from 'react'
import AddContact from './AddContact'
import ShowAllContacts from './ShowAllContacts'
// import SearchContact from './SearchContact'

export default function Contacts() {
    const [contact,setContact] = useState({name:'',phnno:''})
    const [allContacts,setAllContacts] = useState([])

    console.log("::contact ",contact)

  return (
    <div className='conatctapp'>
        <h2>📇 Phone Book App</h2>
        <div className='addContact'>
          <AddContact contact={contact} setContact={setContact} setAllContacts={setAllContacts} allContacts={allContacts}/>
          {/* <SearchContact allContacts={allContacts} setContact={setContact} setAllContacts={setAllContacts} /> */}
          <ShowAllContacts allContacts={allContacts} setAllContacts={setAllContacts}/>
        </div>
    </div>
  )
}
