import Hooks from "./pages/Hooks";
import BankAcc from "./pages/BankAcc";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Dashboard from "./pages/Dashboard";
import Recipe from "./components/Recipe";
import TopBar from "./components/TopBar";
import Profile from "./pages/Profile";
import Setting from "./pages/Setting";
import Products from "./pages/Products";
import ContextHook from "./components/ContextHook";
import MemoHook from "./components/MemoHook";

function App() {


  return (
    <div className="App">
      
        <BrowserRouter>
          <TopBar />
          <Routes>
            <Route path="/" element={<Recipe />}/>
            <Route path="/hooks" element={<Hooks />}/>
            <Route path="/bankAcc" element={<BankAcc />}/>
            <Route path="/dashboard" element={<Dashboard />}>
              <Route path="profile" element={<Profile />} />
              <Route path="setting" element={<Setting />} />
            </Route>
            <Route path="/homepage" element={<HomePage />}/>

            <Route path="/context" element={<ContextHook />}/>

            <Route path="/memo" element={<MemoHook />}/>



            <Route path="/products/:id" element={<Products />}/>

            
            <Route path="*" element={<HomePage/>}/>


          </Routes>
        </BrowserRouter>
        
    </div>
  );
}

export default App;
