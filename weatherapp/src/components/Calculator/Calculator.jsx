import React,{useState} from 'react'
import Buttons from './Buttons'

export default function Calculator() {
    const [calc, setCalc] = useState("")


    return (
        <div>
        <div className='inputdisplay'>
            <input type="text" placeholder='0' value={calc} />
        </div>
        <Buttons calc={calc} setCalc={setCalc}/>
        </div>
    )
}
