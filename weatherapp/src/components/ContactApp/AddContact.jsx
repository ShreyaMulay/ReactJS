import React from 'react'

export default function AddContact({contact,setContact,setAllContacts,allContacts}) {


    const handleNameChange =(e)=>{
        setContact({
            ...contact,
            name: e.target.value
        })
    }
    const handlePhoneChange =(e)=>{
        setContact({
            ...contact,
            phnno: e.target.value
        })
    }
    const handleClick = ()=>{
        // setAllContacts([contact, ...allContacts])
        setAllContacts((oldContact)=>{
            return [...oldContact,contact]
        })

        setContact({ name: '', phnno: '' }); // Reset the input fields
    }
  return (
    <div className=''>
        <div style={{display: 'flex',justifyContent:'space-evenly',alignItems:'center'}} >
            <h3 className='contacts'>Contacts</h3>
                <button type="button" className="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal">
                + Add Contact
                </button>
        </div>
        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">New Contact</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <div className='mb-3'>
                        <input typte="text" className="form-control me-2" value={contact.name} onChange={(e)=>handleNameChange(e)} placeholder='Enter contact name..'/>
                    </div>
                    <input typte="number" onKeyPress={(event) => {
                            if (!/[0-9]/.test(event.key)) {
                                event.preventDefault();
                            }
                        }} 
                        className="form-control me-2" value={contact.phnno} onChange={(e)=>handlePhoneChange(e)} placeholder='Enter contact number..'/>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" className="btn btn-primary" onClick={handleClick}>Create</button>
                </div>
                </div>
            </div>
            </div>
           
    </div>
  )
}
