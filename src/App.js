import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Products from "./Pages/Products";
import Cart from "./Pages/Cart";
import Home from "./Pages/Home";
// import SideNavbar from "./Pages/SideNavbar";
import Admin from "./Pages/Admin";
import AddProduct from "./Components/AddProduct";
import AdminProducts from "./Components/AdminProducts";
import ProductEdit from "./Components/ProductEdit";
import SingleProduct from "./Pages/SingleProduct ";
import Payment from "./Pages/Payment";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/admin" element={<Admin/>} />
          <Route path="/admin/addProducts" element={<AddProduct/>} />
          <Route path="/admin/products" element={<AdminProducts/>} />
          <Route path="/admin/productEdit/:id" element={<ProductEdit/>} />
          <Route path="/products/:id" element={<SingleProduct/>}/>
          <Route path="/payment" element={<Payment/>}/>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
