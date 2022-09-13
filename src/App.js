import React from "react";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import Home from "./pages/Home";
import Result from "./pages/Result";
import "react-dadata/dist/react-dadata.css";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/result" element={<Result />} />
    </Routes>
  );
}

export default App;
