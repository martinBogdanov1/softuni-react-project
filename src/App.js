import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import WhyUs from './components/WhyUs/WhyUs';
import About from './components/About/About';
import Products from "./components/Products/Products";
import Reviews from "./components/Reviews/Reviews";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import AddToCart from "./components/AddToCart/AddToCart";

function App() {
  return (
    <BrowserRouter>
      <div id="main-container">
        <Header />
        <div className="hero_area">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/why-us" element={<WhyUs />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} /> 
            <Route path="/cart" element={<AddToCart />} /> 
          </Routes>
        </div>
        <script src="js/custom.js"></script>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
