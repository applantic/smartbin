import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import ReturnWaste from "./components/ReturnWaste";

export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Router>
          <Route path="/" exact component={Login} />
          <Route path="/login/" component={Login} />
          <Route path="/dashboard/" component={Dashboard} />
          <Route path="/return/" component={ReturnWaste} />
        </Router>
      </div>
    );
  }
}
