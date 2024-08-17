import React from 'react'

export default function Card() {
  return (
    <div>
      <div className="container">
        <div className="row">
            <div className="col-sm">
                <div className="card" style={{width: "18rem"}}>
                    <img className="card-img-top" src="https://picsum.photos/200/300" alt="Card image cap" style={{width: "auto",height: "200px"}}/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
            <div className="col-sm">
                <div className="card" style={{width: "18rem"}}>
                    <img className="card-img-top" src="https://picsum.photos/200/300" alt="Card image cap" style={{width: "auto",height: "200px"}}/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                    </div>
                </div>
            <div className="col-sm">
                <div className="card" style={{width: "18rem"}}>
                    <img className="card-img-top" src="https://picsum.photos/200/301" alt="Card image cap" style={{width: "auto",height: "200px"}}/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        </div>
     </div>
    </div>
  )
}
