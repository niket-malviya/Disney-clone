import React from "react";
//import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes} 
from "react-router-dom";
import Header from "./components/Header.js";
import './App.css';
import LoginForm from "./components/Login.js";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element ={<LoginForm />} >
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
