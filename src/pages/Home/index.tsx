import ScrollToTop from "@/components/resueable/ScrollToTop";
import { Route, Routes } from "react-router-dom";
import Home from "./Dashboard/Home";
import Sidebar from "@/layout/Sidebar";

function Index() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Sidebar />}>
          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default Index;
