import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/reset.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
      <React.StrictMode>
            <BrowserRouter>
                  <Header />
                  <Routes>
                        <Route path="/" element={<Home />} />
                  </Routes>
                  <Footer />
            </BrowserRouter>
      </React.StrictMode>
);
