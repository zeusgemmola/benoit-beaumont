import React, { useEffect } from "react";
import "./AppBar.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Selector from "./components/Selector";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Selector />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
