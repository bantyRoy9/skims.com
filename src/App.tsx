import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import ProductDetails from './Pages/ProductDetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={Home} path='/'/>
        <Route Component={ProductDetails} path='/product'/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
