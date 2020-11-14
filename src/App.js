import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import HomePage from './containers/HomePage';

function App() {
  return (
    <div className="App">
      <nav>
        <h5 id="logo">Tristan Villalobos Photography</h5>
        <ul class="nav-links">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#work">Work</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div class="burger">
          <span class="line1"></span>
          <span class="line2"></span>
          <span class="line3"></span>
        </div>
      </nav>

      <Router>
        <Switch>
          {/* <Route exact path="/" component={Home} /> */}
          <Route path="/" component={HomePage} />
          {/* <Route path="/about" component={About} />
          <Route path="/login" component={Login} />
          <Route exact path="/admin" component={Admin} />
          <Route path="/admin-create" component={AdminForm} />
          <Route component={NoMatch} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
