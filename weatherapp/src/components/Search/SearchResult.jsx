import React,{useEffect, useState} from 'react'

export default function SearchResult({search}) {
    const [value,setValue] = useState()

    useEffect(() => {
        async function getData(){
            const data = await fetch(`https://www.pexels.com/_next/data/PEW_xxZ8QZCCHxAGFXqAN/en-US/search/${search}.json?query=${search}`)
            const resp = await data.json();
            // console.log(resp.pageProps.initialData.data.length)
            if(resp.pageProps.initialData.data.length>0 )
            setValue(resp.pageProps.initialData.data[0].attributes.image.medium)
        }
        getData()
    },[search])

  return (
    <div style={{textAlign:'center',height:'600px'}}>
        <img src={value}  alt="random"/>
    </div>
  )
}
