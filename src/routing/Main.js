import React from "react";
import { Routes, Route } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home/Home.js";
// import { List } from "./pages/List/List.js";
// import MonInfo from "./pages/MonInfo/MonInfo.js";

function Main() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        {/* <Route exact path="/list" element={<List />}></Route>
        <Route exact path="/info" element={<MonInfo />}></Route> */}
      </Routes>
    </Router>
  );
}

export default Main;
