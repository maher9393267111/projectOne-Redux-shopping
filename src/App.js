
import './App.css';
import Navbar from './components/navbar';
import Cart from './components/Cart';
import Products from './components/Products';
import Details from './components/Detail';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import {Provider} from 'react-redux';
import store from './components/store';








function App() {
  return (


<div className="App">

     {/* navbar */}
     <Navbar />



  <Routes>
  <Route exact path="/"   element={<Home/>} />
  <Route  path='/products' element={<Products/>}  />
  <Route  path='/cart' element={<Cart/>}  />
  <Route  path='/about' element={<About/>} />
  <Route  path='/details/:id' element={<Details/>}  />
  <Route  path='/contact' element={<Contact/>} />
  </Routes>





      </div>

  );
}

export default App;


// next cart component