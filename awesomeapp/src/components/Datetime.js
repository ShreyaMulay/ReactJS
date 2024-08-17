import React from 'react'

export default function Datetime() {
    let name = "shreya";
    console.log(new Date().toLocaleDateString());
    console.log(new Date().toLocaleTimeString());
  
    let imageDivCss = {
      display: 'flex',
      justifyContent: 'center',
    }
  return (
    <div>
      
        {/* <h1>My name is {name}</h1> */}
        <h1 className='heading'>{`Hello, My name is ${name}`}</h1>

        {/* <h1>Additon is {3+5}</h1> */}
        <p style={{color:'#rgb(77 52 231 / 90%)'}}>Current Date =  {new Date().toLocaleDateString()}</p>
        <p contentEditable="true">Current Time  = {new Date().toLocaleTimeString()}</p>

        <div className='img_div' style={imageDivCss}>
        <img src="https://picsum.photos/200/300" alt="randomimages" />
        <a href="https://www.google.com/maps">
            <img src="https://picsum.photos/250/300" alt="randomimages" />
        </a>

        <img src="https://picsum.photos/270/300" alt="randomimages" />

        </div>
    </div>
  )
}
