import React,{useState} from 'react'

export default function SearchContact({allContacts,setContact,setAllContacts}) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch =(e)=>{
    
    setSearchTerm(e.target.value);

    const filteredContacts = allContacts.filter((contact) =>contact.name.toLowerCase().includes(e.target.value) || contact.phnno.includes(e.target.value));

    console.log(filteredContacts[0]);
    console.log(filteredContacts.length);



    if(filteredContacts.length > 0) {
      setContact(filteredContacts[0]);
      setAllContacts((oldContact)=>{
        return [...oldContact,filteredContacts[0]]
    })

    } else {
      setContact({ name: '', phnno: '' });
    }
  }
  

  return (
    <div>
      <div className='searchContainer'>
        <input type='text' value={searchTerm} onChange={(e)=>handleSearch(e)} className='searchInput'/>
        {/* <button className='btn btn-primary' onClick={}>Search</button> */}
      </div>
    </div>
  )
}
