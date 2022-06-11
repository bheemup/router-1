
import './App.css';
import Navbar from './Componant/Navbar';
import About from './Componant/About';
import Home from './Componant/Home';
import Products from './Componant/Products';
import {Routes,Route} from "react-router-dom";

function App() {
  return (
  <div className='App'>
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home/>}  />
        <Route path="/about" element={<About/>}  />
        <Route path="/products" element={<Products/>}  />

      </Routes>


 
    {/* //  <Home/>
    //  <About/>
    //  <Products/> */}
      
    </div>
  );
}

export default App;
