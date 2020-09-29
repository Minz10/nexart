import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/screens/Home";
import Login from "./components/screens/Login";
import Signup from "./components/screens/Signup";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/Login">
        <Login />
      </Route>
      <Route path="/Signup">
        <Signup />
      </Route>
    </BrowserRouter>
  );
}

export default App;
