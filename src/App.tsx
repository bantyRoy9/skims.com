import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import ProductDetails from './Pages/ProductDetails';
import Header from './Components/Header/Header';
import Footer from './DefaultContainer/Footer';
import Catagory from './Pages/Catagory/Catagory';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route Component={Home} path='/'/>
        <Route Component={ProductDetails} path='/product'/>
        <Route Component={Catagory} path='/catagory'/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
