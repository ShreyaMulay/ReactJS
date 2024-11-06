import React, { useState } from 'react'
import MemoChild from './MemoChild'

export default function MemoHook() {
    const [count,setCount] = useState(0)

    const [childCount,setChildCount] = useState(0)

    function handleClick(){
        setCount(count+1)
    }
    function handleChildClick(){
        setChildCount(childCount+1)
    }
  return (
    <div>
      <h1>PArent : {count}</h1>
      <button onClick={handleClick}>Increase ParentCounter </button>

      <MemoChild childCount={childCount}/>
      <button onClick={handleChildClick}>Increase ChildCounter </button>
    </div>
  )
}
