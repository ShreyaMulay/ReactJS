// import logo from './logo.svg';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import React, { useState } from 'react'
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

import { Switch,BrowserRouter as Router, Route, Routes } from 'react-router-dom'


// let name = "shreya";
function App() {
 const [mode, setMode] = useState('light');
 const[alert,setAlert]= useState();

 const showAlert = (msg,type)=>{
    setAlert({
      msg:msg,
      type: type,
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);

 }

 const toggleMode = () =>{
  if(mode === 'dark'){
    setMode('light');
    document.body.style.backgroundColor = 'white';
    showAlert("Light Mode has been enabled","success")
    document.title = "Textutils | Light Mode";
  }
  else{
    setMode('dark');
    document.body.style.backgroundColor = 'black';
    showAlert("Dark Mode has been enabled","success")
    document.title = "Textutils | Dark Mode";



  }
 }
  
  return (
    <Router>
      <div>
      <Navbar title="TextUtils" About="About US" mode={mode} toggleMode={toggleMode}></Navbar>
      <Alert alert={alert}/>
      <div className="container my-3">
      {/* <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Textform heading="Enter the text to analyze" showAlert={showAlert} mode={mode}/>
          </Route>
        </Switch> */}
        <Routes>
            <Route exact path="/about" element={<About />}>
            </Route>
            <Route path="/" element={<Textform heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />}>
            </Route>
          </Routes>
      </div>
      </div>
    </Router>

  );
}

export default App;



// cls based & function based component
// (current version using func based)

// jsx :
// fragmment <> </>
// jsx must have onely one root element
// class => replace to className
// for => htmlFor
// follows camelcase


// react hook 

// https://legacy.reactjs.org/docs/introducing-jsx.html

// jsx 


// https://github.com/dev8093/portfolio-lite-react/blob/main/src/Components/About.js