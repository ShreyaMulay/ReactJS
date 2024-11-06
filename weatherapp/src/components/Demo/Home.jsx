import React from 'react'
import Common from './Common'
export default function Home() {
 const title = (
    <>
      Grow your business with <div><strong className='brand-name'>DemoTechnical</strong></div>
    </>
  );

  const text='We are the team of talented developers making websites.'

  const btn='Get Started'
  
  return (
    <div>
        <Common title={title} text={text} btn={btn}/>
    </div>
  )
}
