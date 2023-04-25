import React from "react";
import { Routes, Route } from "react-router-dom";
import Ships from "./components/Ships";
import Ship from "./routes/Ship";
import "./index.css";
import Navbar from "./components/Navbar";

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
    </>
  );
}
export default App;
