
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from './components/header/Header';
import Home from './components/homecontent/Homecontent';
import Login from './components/login/Login';
import Navbar from './components/navbar/Navbar';
import Register from './components/register/Register';

import Products from './components/products/Products';
import About from './components/about/About';
import Filterform from './components/productslist/Filterform';
import ProductsList from './components/productslist/Productslist';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/filterform" element={<Filterform />} />
          <Route exact path="/productsList" element={<ProductsList />} />
        </Routes>
      </BrowserRouter>
      {/* <Header />
       <Navbar /> 
       <Login /> 
       <Register/> 
       <Home/> 
       <Products/> 
       <About/> 
       <Filterform/> 
       <ProductsList/>  */}
    </div>
  );
}

export default App;
