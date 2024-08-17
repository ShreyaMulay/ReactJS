import React from 'react'

export default function Mainbody(props) {
  return (
    <div className='mainbody'>
      <div className="card" style={{width: 'auto'}}>
      <h5 className="card-title mx-3 my-3">{props.title}</h5>
      {props.image == "true" && (
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF32V4p_7Pzslf8BxTahhErkfk-TGJN8nZvQ&s" className="card-img-top" alt="..."/>
      )}
        <div className="card-body">
            <p className="card-text">
                {props.body}
           </p>
            </div>
        </div>
    </div>
  )
}
