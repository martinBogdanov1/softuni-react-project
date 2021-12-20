import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Products from "./components/Products/Products";
import Register from "./components/Auth/Register";
import Create from "./components/Auth/Create";
import Login from "./components/Auth/Login";
import AddToCart from "./components/AddToCart/AddToCart";
import Details from "./components/Products/Details";
import Edit from "./components/Auth/Edit";
import Wishlist from "./components/Wishlist/Wishlist";
import { AuthProvider } from "./contexts/authContext";

function App() {
  return (
    <AuthProvider>
        <BrowserRouter>
          <div id="main-container">
            <Header />
            <div className="hero_area">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/wishlist" element={<Wishlist />} />
                <Route path="/create" element={<Create />} />
                <Route path="/product/edit/:pid" element={<Edit />} />
                <Route path="/about-us" element={<About />} />
                <Route path="/register" element={<Register />} />
                <Route path="/register-admin" element={<Register portalName={"admin"}/>} />
                <Route path="/login" element={<Login /> } />
                <Route path="/login-admin" element={<Login portalName={"admin"}/>} />
                <Route path="/cart" element={<AddToCart />} />
                <Route path="/product/:pid" element={<Details />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
