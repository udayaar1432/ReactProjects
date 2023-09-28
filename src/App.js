
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from './components/header/Header';
import Home from './components/home/Homecontent';
import Login from './components/login/Login';
import Navbar from './components/navbar/Navbar';
import Register from './components/register/Register';

import Products from './components/home/Products';
import About from './components/about/About';
import Filterform from './components/productslist/Filterform';
import ProductsList from './components/productslist/Productslist';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Navbar />

        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/home" element={<Products/>} />
          <Route>
            < Route exact path="/productslist" element={<Filterform/>} />
            < Route exact path="/productslist" element={<ProductsList />} />
            </Route>
          
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
