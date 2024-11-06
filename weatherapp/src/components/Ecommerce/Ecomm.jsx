import React from 'react'
import {Outlet}  from 'react-router-dom'
import ENav from './ENav'
import {GlobalStyle} from './GlobalStyle'
import { ThemeProvider } from 'styled-components';


export default function Ecomm() {
  const theme = {
    colors:{
      bg: '#F6F8FA',
      heading: "red",
      while:"white",
      black:"black",
      helper:"#2122529",
      btn:"yellow",
      shadowSupport:"0 6px 10px rgba(0, 0, 0, 0.2)",
      hr:"#ffffff"
    },
    media:{
      mobile:'768px',
      tab:'998px'
    }
   
  }
  return (
    <div>
       <ThemeProvider theme={theme}>
          <GlobalStyle />
          <ENav />
          <Outlet />
       </ThemeProvider>
    </div>
  )
}

