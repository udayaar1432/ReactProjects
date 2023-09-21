

import Header from './components/header/Header';
import Home from './components/homecontent/Homecontent';
import Login from './components/login/Login';
import Navbar from './components/navbar/Navbar';
import Register from './components/register/Register';
import './App.css';
import Products from './components/products/Products';
import About from './components/about/About';
import Filterform from './components/productslist/Filterform';
import ProductsList from './components/productslist/Productslist';
function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Login />
      <Register/>
      <Home/>
      <Products/>
      <About/>
      <Filterform/>
      <ProductsList/>
    </div>
  );
}

export default App;
