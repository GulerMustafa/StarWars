import React from "react";
import { Routes, Route } from "react-router-dom";
import Ships from "./components/Ships";
import Ship from "./routes/Ship";
import "./index.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Ships />} />
        <Route path="/ship" element={<Ship />}>
          <Route path=":shipId" element={<Ship />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}
export default App;
