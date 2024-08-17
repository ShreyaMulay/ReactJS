import React,{useEffect, useState} from 'react'

export default function Effect1() {
    const [number,setNumber] = useState(0);

    //[] here means realod only first time

    // useEffect(() => {
    //     alert('alert from useeffect');
    // },[]);

    //[number] means realod after when number state change
    useEffect(() => {
        alert('alert from useeffect');
        document.title = `You clicked me ${number} times`;
    },[number]);

    const Increment = () => {
        setNumber(number + 1)
    }
  return (
    <div>
        <div className='basic'>
            <h1> {number} </h1>
            <div style={{display:'flex'}}>
                <button className="btn btn-primary" onClick={Increment} style={{background: '#9b59b6',border: '2px solid #9b59b6',padding: '10px 20px'}}>++</button>
            </div> 
        
         </div>
    </div>
  )
}


