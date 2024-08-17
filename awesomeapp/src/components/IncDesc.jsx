import React, { useState } from 'react'
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
// import Clock from 'react-digital-clock';
// import Clock from 'react-live-clock';
import ReactClock from '@uiw/react-clock';

export default function IncDesc() {

  let [counter,setCounter] = useState(0);
  const increment = () =>{
    setCounter(counter+1)
  }
  const decrement = () =>{
    if(counter > 0)
        setCounter(counter-1);
    else
    {
        setCounter(0);
        alert("You can't decrease the counter")
    }
     console.log(counter)
  }
  return (
    <div className='main_div'>
       <div className="center_div">
        <br />
        <h1 className='h1List'>{counter}</h1>
        <br />
        {/* <Clock  /> */}
        <div><ReactClock /></div>
       

        <Tooltip title="Decrement">
          <Button className='addButton' onClick={decrement}><RemoveIcon /></Button>
        </Tooltip>
        <Tooltip title="Increment">
          <Button className='addButton' onClick={increment}><AddIcon /></Button>
        </Tooltip>
       
       


      </div>
    </div>
 
  )
}
