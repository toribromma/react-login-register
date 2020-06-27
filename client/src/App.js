import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import { BrowserRouter as Router, Route, Link} from "react-router-dom"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
        <Navbar />
        <Landing />
        </Router>
      </div>
    );
  }
}
export default App;