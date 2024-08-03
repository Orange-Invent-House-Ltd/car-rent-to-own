import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import ProductDetails from "./pages/ProductDetails";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products/:userid" element={<ProductDetails />} />
      <Route path="/sign-up" element={<Register />} />
      <Route path="/sign-in" element={<Login />} />
    </Routes>
  );
}

export default App;
