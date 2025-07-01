import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from './components/Home'
import Contact from "./components/Contact";
import { About } from "./components/About";
import './App.css'
import { NotFoundPage } from "./components/NotFoundPage";
import ProductsList from "./components/Products";
import ProductDetails from "./components/ProductDetails";


function App() {

  return (
    
    <div>
      <Navbar/>

      <ProductsList/>

      <Routes>
        <Route path="/products" element={<ProductsList/>} />
        <Route path="/products/:x" element={<ProductDetails/>} />
      </Routes>
      
    </div>
  );
}

export default App;

