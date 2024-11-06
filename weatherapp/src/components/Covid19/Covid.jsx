import React,{useEffect, useState} from 'react'

export default function Covid() {

  const [stateDate,setStateData]  = useState()
  const [isLoading,setIsloading] = useState(false)
  useEffect(() => {
    async function getData(){
        const res = await fetch('https://api.rootnet.in/covid19-in/unofficial/covid19india.org/statewise')

        const data = await res.json()
        setStateData(data.data.statewise)
        setIsloading(true)
    }
    getData()
  },[])
  return (
    <div>
      <div className='container-fluid mt-5'>
            <div className="main-header text-center">
                <h1 className='mb-5'>
                    <span className='font-weight-bold'>INDIA </span>COVID-19 DASHBOARD
                </h1>
            </div>
            <div className="table-responsive">
                <table className='table table-hover'>
                    <thead className='thead-dark'>
                        <tr>
                            <th>STATE</th>
                            <th>CONFIRMED</th>
                            <th>RECOVERED</th>
                            <th>DEATHS</th>
                            <th>ACTIVE</th>
                        </tr>
                        {/* <tbody> */}
                                { 
                                    isLoading && stateDate.map((s,index)=>{
                                        return (<tr key={index}>
                                            <td>{s.state}</td>
                                            <td>{s.confirmed}</td>
                                            <td>{s.recovered}</td>
                                            <td>{s.deaths}</td>
                                            <td>{s.active}</td>
                                        </tr>)
                                    })
                                } 
                            
                        {/* </tbody> */}
                    </thead>
                </table>
            </div>
      </div>

    </div>
  )
}
