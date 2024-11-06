import React from 'react'
import Common from './Common'
export default function Home() {
 const title = (
    <>
      Welcome to <div><strong className='brand-name'>About Page</strong></div>
    </>
  );

  const text='We are the team of talented developers making websites.'

  const btn='About Us'
  
  return (
    <div>
        <Common title={title} text={text} btn={btn}/>
    </div>
  )
}
