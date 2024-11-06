import React, { useState } from 'react'
import questions from './api'
import MyAccordian from './MyAccordian';

export default function QueAns() {
    const [data,setData] = useState(questions)
    console.log(data)
  return (
        <div>
            <h1>React JS Interview Question Answers</h1>
                {
                    data.map((que,index) =>
                        <MyAccordian question={que} key={index}/>
                    )
                }
        </div>
  )
}
