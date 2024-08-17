import React,{useState} from 'react'
import {questions} from './api'
import './Accordian.css'
import MyAccordian from './MyAccordian'

export default function Accordian() {
  const [data,setDate] = useState(questions)
  return (
    <div className='Accordian'>
      <section className='main-div'>
        <h1>React Interview questions</h1>
        {
          data.map((currEle) =>{
            return <MyAccordian key={currEle.id} {...currEle}/>

          })
        }
        </section>
    </div>
  )
}
