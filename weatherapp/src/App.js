import Calculator from './components/Calculator/Calculator';
import Navbar from './components/Navbar';
import NotesApp from './components/Notes/NotesApp';
import Weather from './components/Weather/Weather';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Contacts from './components/ContactApp/Contacts';
import Recipe from './components/FoodApp/Recipe';
import Greet from './components/Greeting/Greet';
import Todo from './components/TodoApp/Todo';
import QueAns from './components/Accordian/QueAns';
import Comp from './components/ContextEx/Comp';
import Covid from './components/Covid19/Covid';
import CompParams from './components/ParamsEx/CompParams';
import SearchPhoto from './components/Search/SearchPhoto';
import ErrorPage from './components/ContextEx/ErrorPage';
import DemoSite from './components/Demo/DemoSite';
import About from './components/Demo/About';
import Service from './components/Demo/Service';
import Contact from './components/Demo/Contact';
import Home from './components/Demo/Home';
import TodoDemo from './components/TodoDemo/TodoDemo';
import Image from './components/ImageGallery/Image';
import ReduxDemo from './components/Redux/ReduxDemo';
import Ecomm from './components/Ecommerce/Ecomm';
import EAbout from './components/Ecommerce/EAbout';
import EHome from './components/Ecommerce/EHome';
import EProducts from './components/Ecommerce/EProducts';
import EContact from './components/Ecommerce/EContact';
import ESingleProduct from './components/Ecommerce/ESingleProduct';
import ECart from './components/Ecommerce/ECart';
import EErrorPage from './components/Ecommerce/EErrorPage';
import QR from './components/Qrcode/QR';
import Pdfreader from './components/PDFReader/Pdfreader';
import Main from './components/Whatsapp/Main';
function App() {
  return (
    <div className="App">
              <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/weather" element={<Weather />}/>
                    <Route path="/calculator" element={<Calculator />}/>
                    <Route path="/notes" element={<NotesApp />}/>
                    <Route path="/contact" element={<Contacts />}/>
                    <Route path="/recipe" element={<Recipe />}/>
                    <Route path="/greet" element={<Greet />}/>
                    <Route path="/todo" element={<Todo />}/>
                    <Route path="/todoDemo" element={<TodoDemo />}/>
                    <Route path="/queans" element={<QueAns />}/>
                    <Route path="/context" element={<Comp />}/>
                    <Route path="/params/:fname/:lname" element={<CompParams />}/>
                    <Route path="/covid" element={<Covid />}/>
                    <Route path="/search" element={<SearchPhoto />}/>
                    <Route path="/demo" element={<DemoSite />}>
                      <Route path="about" element={<About />} />
                      <Route path="/demo" element={<Home />} />
                      <Route path="contact" element={<Contact />} />
                      <Route path="services" element={<Service />} />
                    </Route>
                    <Route path="/image" element={<Image />}/>
                    <Route path="/redux" element={<ReduxDemo />}/>
                    <Route path="/qr" element={<QR />}/>
                    <Route path="/pdf" element={<Pdfreader />}/>


                    
                    <Route path="/ecommerce" element={<Ecomm />}>
                        <Route path="home" element={<EHome />} />
                        <Route path="about" element={<EAbout />} />
                        <Route path="products" element={<EProducts />} />
                        <Route path="contact" element={<EContact />} />
                        <Route path="singleproduct/:id" element={<ESingleProduct />} />
                        <Route path="cart" element={<ECart />} />
                        <Route path="*" element={<EErrorPage />} />
                    </Route>



                    <Route path="/whatsapp" element={<Main />}/>
                    {/* error page */}
                    <Route path="*" element={<ErrorPage />}/>
                    


                </Routes>
              </BrowserRouter>
    </div>
  );
}

export default App;


// redux


