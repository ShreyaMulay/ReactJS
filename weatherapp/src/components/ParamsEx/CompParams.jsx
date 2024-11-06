import React from 'react'
import { useLocation, useParams,useNavigate } from 'react-router-dom'

export default function CompParams() {
    const {fname,lname} = useParams()
    const location = useLocation()
    // console.log(location)

    const navigate = useNavigate()
    // console.log(navigate)

  return (
    <div>
        Hello {fname} {lname}
        {location.pathname === '/params/shreya/mulay' ? <button onClick={()=>navigate(-1)}>Go back</button>: ""}
        {location.pathname === '/params/shreya/mulay' ? <button onClick={()=>navigate('/covid')}>Shreya Here</button>: ""}

    </div>
  )
}
