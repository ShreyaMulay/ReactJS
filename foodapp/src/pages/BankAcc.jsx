import React, { useReducer, useState } from 'react'

export default function BankAcc() {

    const [state,dispatch] = useReducer(reducer,{balance:0})

    const [amount , setAmount] = useState(0)

    function reducer(state,action)
    {
        if(action.type === 'add')
        {
            return {...state,balance: state.balance + action.payload}
        }

        if(action.type === 'remove')
            {
                return {...state,balance: state.balance - action.payload}
            }
    
    }
    return (
        <div>
            {state.balance}
            <input type='text' value={amount} onChange={(e)=>setAmount(e.target.value)} />
            <button onClick={()=>dispatch({type:'add',payload:Number(amount)})}>Deposite</button>
            <button onClick={()=>dispatch({type:'remove',payload:Number(amount)})}>Withdraw</button>

        </div>
    )
}
