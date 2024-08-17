// import logo from './logo.svg';
import './App.css';
import Datetime from './components/Datetime';
import Greet from './components/Greet';
import Navbar from './components/Navbar';
import Orderlist from './components/Orderlist';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Calculator from './components/Calculator';
import Netflix from './components/Netflix';
import Slotmachine from './components/Slotmachine';
import Basic from './components/Basic';
import CurrentTime from './components/CurrentTime';
import DigitalClock from './components/DigitalClock';
import Events from './components/Events';
import Form from './components/Form';
import BasicForm from './components/BasicForm';
import Todo from './components/Todo';
import FormBuilder from './components/FormBuilder';
import IncDesc from './components/IncDesc';
import Accordian from './components/accordian/Accordian';
import Card from './components/Card';
import Notes from './components/notes/Notes';
import Context from './components/createContext/Context';
import Effect1 from './components/useEffectEx/Effect1';
import StateWise from './components/statwwisedata/StateWise';


function App() {

  return (
    <div className="App">
      <Router>
      {/* <div> */}
      <Navbar />
      {/* <div className="container my-3"> */}
        <Routes>
            <Route path="/" element={<Datetime key="1"/>}>
            </Route>
            <Route exact path="/orderlist" element={<Orderlist key="1"/>}>
            </Route>
            <Route exact path="/greet" element={<Greet key="1" />}>
            </Route>
            <Route exact path="/calculator" element={<Calculator key={1}/>}>
            </Route>
            <Route exact path="/netflix" element={<Netflix key={1} />}>
            </Route>
            <Route exact path="/slotmachine" element={<Slotmachine key={1} />}>
            </Route>
            <Route exact path="/onclick" element={<Basic key={1} />}>
            </Route>
            <Route exact path="/time" element={<CurrentTime key={1} />}>
            </Route>
            <Route exact path="/digital" element={<DigitalClock key={1} />}>
            </Route>
            <Route exact path="/events" element={<Events key={1} />}>
            </Route>
            <Route exact path="/form" element={<Form key={1} />}>
            </Route>
            <Route exact path="/basicform" element={<BasicForm key={1} />}>
            </Route>
            <Route exact path="/todo" element={<Todo key={1} />}>
            </Route>
            <Route exact path="/formbuilder" element={<FormBuilder key={1} />}>
            </Route>
            <Route exact path="/incdesc" element={<IncDesc key={1} />}>
            </Route>
            <Route exact path="/accordian" element={<Accordian key={1} />}>
            </Route>
            <Route exact path="/cards" element={<Card key={1} />}>
            </Route>
            <Route exact path="/notes" element={<Notes key={1} />}>
            </Route>
            <Route exact path="/context" element={<Context key={1} />}>
            </Route>
            <Route exact path="/effect" element={<Effect1 key={1} />}>
            </Route>
            <Route exact path="/covid" element={<StateWise key={1} />}>
            </Route>
          </Routes>
      {/* </div> */}
      {/* </div> */}
    </Router>


    
      
    </div>
  );
}

export default App;
