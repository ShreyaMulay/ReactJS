import React from 'react'
import {useSelector,useDispatch} from 'react-redux';

import { increment,decrement } from './actions';

export default function ReduxDemo() {
    const mystate = useSelector((state)=> state.updateNumber)
    console.log("mystate ",mystate)
    const dispatch = useDispatch()
  return (
    <div>
      <button className="btn-primary" onClick={()=>dispatch(decrement())}> - </button>
      <span className='mx-2'>
            <input type="text" name="" id="" value={mystate} />
      </span>
      <button className="btn-primary" onClick={()=>dispatch(increment())}> + </button>
    </div>
  )
}
