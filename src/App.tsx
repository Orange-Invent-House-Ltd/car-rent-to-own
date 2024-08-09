import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Home/Landing";
import ProductDetails from "./pages/ProductDetails";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import ScrollToTop from "./components/resueable/ScrollToTop";
import Index from "./pages/Home";

function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/products/:userid" element={<ProductDetails />} />
        <Route path="/sign-up" element={<Register />} />
        <Route path="/sign-in" element={<Login />} />
        <Route path="/dashboard/*" element={<Index />} />
        {/* <Route path="*" element={<Notfound />} /> */}
      </Routes>
    </>
  );
}

export default App;
