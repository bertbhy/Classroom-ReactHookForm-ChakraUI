import "./styles.css";
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Dashboard } from "./pages/Dashboard";
import { NavBar } from "./components/NavBar";
export default function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about/" element={<About />} />
        <Route path="dashboard/" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
