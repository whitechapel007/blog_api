import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./component/Home";
import Blogpost from "./component/Blogpost";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/post/:id" element={<Blogpost />} />
      </Routes>
    </Router>
  );
}

export default App;
