import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Products from './pages/Products';
import ProductDetailNutrition from "./pages/ProductDetailNutrition";
import ProductDetailStorage from "./pages/ProductDetailStorage";
import Cart from "./pages/Cart";

function App() {
  
  return (
    <BrowserRouter>
          <Navbar />
          <div className="container">
            <Routes>              

              <Route path="/" element={<Home />}></Route>
    
              <Route path="/about" element={<About />}></Route>
    
              <Route path="/products" element={<Products/>}></Route>
    
              <Route path="/products/product/:id/" element={<ProductDetails />}>
                <Route path="" element={<ProductDetailNutrition />}></Route>
    
                <Route path="storage" element={<ProductDetailStorage />}></Route>
              </Route>

              <Route path="/cart" element={<Cart />}></Route>

    
          </Routes>
          </div>
        </BrowserRouter>
    )
}

export default App;
