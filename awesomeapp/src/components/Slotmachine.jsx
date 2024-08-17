import React from 'react'

const SlotM = (props) =>{
    // let x =  '😃'
    // let y =  '😃'
    // let z =  '🥹'

    if((props.x === props.y) && (props.y === props.z) )
    {
        return (
            <>
            <div className="slot_inner">
                <h1>
                    {props.x} {props.y} {props.z}
                </h1>
                <h1>This is matching.</h1>
                <hr />
            </div>
            </>
        )
    }
    else
    {
        return (
            <>
            <div className="slot_inner">
                <h1>
                    {props.x} {props.y} {props.z}
                </h1>
                <h1>This is not matching.</h1>
                <hr />
            </div>
            </>
        )

    }
      
}
export default function Slotmachine() {
  return (
    <div className='slotmachine'>
      <h3 className='heading_style'>Welcome to <span style={{fontWeight:"bold"}}>Slot MAchine Game</span></h3>
    
    <div className="slotName">
        <SlotM x='🥳' y='🥳' z='🥳'/>
        <SlotM x='😃' y='🥹' z='🥹'/>
        <SlotM x='🥹' y='🥹' z='🥹' />
    </div>
    </div>
  )
}
