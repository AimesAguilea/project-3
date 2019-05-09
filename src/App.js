import React from "react";
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import "./App.css";
import Home from "./home";
import Message from "./message";
import News from "./news";
import Contact from "./contact";

// start test

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <nav role="navigation">
            <ul className="navbar nav nav-pills nav-fill bg-dark">
              <li className="nav-item">
                <NavLink
                  exact
                  className="nav-link"
                  activeClassName="nav-link active"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  className="nav-link"
                  activeClassName="nav-link active"
                  to="/message"
                >
                  Message Board
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  className="nav-link"
                  activeClassName="nav-link active"
                  to="/news"
                >
                  Today's News
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  className="nav-link"
                  activeClassName="nav-link active"
                  to="/contact"
                >
                  Contact Page
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <Route exact path="/" component={Home} />
        <Route path="/message" component={Message} />
        <Route path="/news" component={News} />
        <Route path="/contact" component={Contact} />
      </div>
    </BrowserRouter>
  );
}

export default App;