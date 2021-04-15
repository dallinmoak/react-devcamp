import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Home from './home.jsx';
import About from './about.jsx';

export default function App() {
  return(
    <Router>
        <main>
        <nav className="nav-main">
          <Link to="/">Home</Link>
          <Link to="/About">About</Link>
        </nav>
        <div className="main-content">
          <div className="page-main">
            <Switch>
              <Route path="/" exact>
                <h1>Home</h1>
                <Home />
              </Route>
              <Route path="/About">
              <h1>About</h1>
                <About />
              </Route>
            </Switch>
          </div>
        </div>
      </main>
    </Router>
  );
}