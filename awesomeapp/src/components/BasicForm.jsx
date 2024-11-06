import React, { useState } from 'react'

export default function Login() {

  const [fullname, setFullName ]= useState({
    fname : '',
    lname : '',
    email:'',
    phone:'',
  })

  const inputEnter = (event) => {
    console.log('Entering',event.target.value);
    console.log('Entering',event.target.name);

    setFullName((prevValue) => {
      console.log('prevValue',prevValue)
       
      //can do this using spread operator 
      // used to spreading or gathering object 
      return{
        ...prevValue,
        [event.target.name]: event.target.value
      }
      //Or can do this
      // if(event.target.name === 'fname')
      // {
      //   return {
      //     fname: event.target.value,
      //     lname:prevValue.lname,
      //     email: prevValue.email,
      //     phone: prevValue.phone
      //   }
       
      // }
      // else if(event.target.name === 'lname')
      //   {
      //     return {
      //       fname: prevValue.fname,
      //       lname:event.target.value,
      //       email: prevValue.email,
      //       phone: prevValue.phone
      //     }
         
      //   }
      //   else if(event.target.name === 'email')
      //   {
      //     return {
      //       fname: prevValue.fname,
      //       lname: prevValue.fname, 
      //       email: event.target.value,
      //       phone: prevValue.phone
      //     }
          
      //   }
      //   else if(event.target.name === 'phone')
      //   {
      //     return {
      //       fname: prevValue.fname,
      //       lname:prevValue.fname,
      //       email: prevValue.email,
      //       phone: event.target.value
      //     }
          
      //   }
    })
  }

  const onSubmit = (event) =>{
    event.preventDefault();
  }
  return (
    <div className='basic' style={{background: 'aliceblue'}}>
        <form onSubmit={onSubmit} style={{display: 'flex',flexDirection: 'column'}}>
            <h1>Hello {fullname.fname} {fullname.lname}</h1>
            <p>{fullname.email}</p>
            <p>{fullname.phone}</p>

            <input type="text" placeholder="Enter your first name" name='fname' value={fullname.fname} onChange={inputEnter} className="nameValue"/>
            <input type="text" placeholder="Enter your last name" name='lname' value={fullname.lname} onChange={inputEnter} className="nameValue"/>

            <input type="email" placeholder="Enter your email" name='email' value={fullname.email} onChange={inputEnter} className="nameValue"/>
            <input type="number" placeholder="Enter your mobile number" name='phone' value={fullname.phone} onChange={inputEnter} className="nameValue"/>

            <button className='btn btn-primary' type="submit">CLICK ME 😎</button>
        </form>
    </div>
  )
}
