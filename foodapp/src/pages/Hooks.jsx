import React, { useReducer } from 'react'

export default function Hooks() {

    const [state,dispatch] = useReducer(reducer,{count:0,incrementBy:1})

    function reducer(state,action)
    {
        if(action.type === 'increment')
            // return state + action.payload
            //retains the shallow copy becs other properties from object as it is and change only 
            return {...state,count: state.count + state.incrementBy}
        if(action.type === 'decrement')
            // return state - action.payload
            return {...state,count:state.count - state.incrementBy}

        if(action.type === 'setIncrement')
            return {...state,incrementBy:action.payload}
        
    }
  return (
    <div>
        <h1>{state.count}</h1>
        <input type='text' value={state.incrementBy} onChange={(e)=>dispatch({type:'setIncrement',payload:Number(e.target.value)})}/>
        <button onClick={()=>dispatch({type:'increment',payload:1})}>Increment</button>
        <button onClick={()=>dispatch({type:'decrement',payload:1})}>Decrement</button>

    </div>
  )
}
