import "./App.css";
import Admin from "./components/Admin";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Login from "./components/Login";
import User from "./components/User";
import { Routes, Route } from "react-router-dom";
import AddDelete from "./components/AddDelete";
import Cart from "./components/Cart";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/user" element={<User />} />
        <Route path="/productlist" element={<AddDelete />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
