import React from 'react'

export default function Greet() {
    let currentDate = new Date()
    let hours = currentDate.getHours()
    console.log(hours)

    let greeting;

    let css ={
        color:''
    }

    if(hours >=1 && hours <=12){
        greeting="Good Morning"
        css.color = 'green'
    }
    else if(hours >=12  && hours <=19){
        greeting="Good Afternoon"
        css.color = 'orange'
    }
    else
    {
        css.color = 'black'
        greeting="Good Night"
    }


  return (
    <div className='parentgreet'>
        <div className='greet'>
            <span style={{color: '#ea6c9b'}}> Hello Sir,</span>
            <span style={css}>{greeting}</span>
        </div>
    </div>
  )
}
