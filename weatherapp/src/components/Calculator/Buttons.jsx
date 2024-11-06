import React from 'react'

export default function Buttons({calc,setCalc}) {
    const handleClick =(value)=>
    {
        setCalc(calc + value);
    }

    const calculateResult = ()=>{
        setCalc(eval(calc).toString());
    }
    const clearInput = ()=>
    {
        setCalc("")
    }
  return (
    <div className='btns'>
        <div className='grid-container'>
            <button className='grid-item' onClick={clearInput}>Clear</button>
            <button className='grid-item' onClick={()=>handleClick('/')}>/</button>
        </div>
        <div className='grid-container'>
            <button className='grid-item' onClick={()=>handleClick('7')}>7</button>
            <button className='grid-item' onClick={()=>handleClick('8')}>8</button>
            <button className='grid-item' onClick={()=>handleClick('9')}>9</button>
            <button className='grid-item' onClick={()=>handleClick('-')}>-</button>
        </div>
        <div className='grid-container'>
            <button className='grid-item' onClick={()=>handleClick('4')}>4</button>
            <button className='grid-item' onClick={()=>handleClick('5')}>5</button>
            <button className='grid-item' onClick={()=>handleClick('6')}>6</button>
            <button className='grid-item' onClick={()=>handleClick('+')}>+</button>
        </div>
        <div className='grid-container'>
            <button className='grid-item' onClick={()=>handleClick('1')}>1</button>
            <button className='grid-item' onClick={()=>handleClick('2')}>2</button>
            <button className='grid-item' onClick={()=>handleClick('3')}>3</button>
            <button className='grid-item' onClick={calculateResult}>=</button>
        </div>

     
    </div>
  )
}
