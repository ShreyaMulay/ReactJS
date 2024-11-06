import React from 'react'

export default function Home({title,text,btn}) {
  return (
    <>
      <section id="header" className='d-flex align-items-center justify-content-center'>
        <div classNameName="container-fluid nav_bg">
            <div className="row" style={{height:'80vh'}}>
                <div className="card mb-3 pt-5  order-2 order-lg-1" style={{border:"none",justifyContent:'center'}}>
                <div className="row g-0">
                    <div className="col-md-7" style={{margin:'auto'}}>
                    <div className="card-body">
                        <h3 className="card-title">{title}</h3>
                        <h5 className="card-text"> {text}</h5>
                        <button type="button" className="btn btn-outline-primary">{btn}</button>
                    </div>
                    </div>
                    <div className="col-md-5">
                    <img src={'https://picsum.photos/500/300?random=2'} className="img-fluid animated" alt="..." />
                    </div>
                </div>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}
