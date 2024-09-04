import Home from "./component/Home";
import Navbar1 from "./component/Nabar";
import { Routes, Route } from "react-router-dom";
import About from "./component/About";
import Product from "./products/Product";
import Feature from "./products/Feature";
import Productdetail from "./products/Productdetail.jsx";
import { BrowserRouter } from "react-router-dom";
import Cart from "./Cart/Cart.jsx";

const App = () => {
  return (
    <>
      <div className="bg-body-tertiary">
        <Navbar1 />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Product />} />
            <Route path="/feature" element={<Feature />} />
            <Route path="/productdetaile/:id?" element={<Productdetail />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};
export default App;
