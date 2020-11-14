import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import HomePage from './HomePage';
import mail from './images/mail.png';
import telephone from './images/telephone2.png';

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
          <Route path="/" component={HomePage} />
        </Switch>
      </Router>
      <footer>
        <h4>Tristan Villalobos &copy; 2020</h4>
        <ul>
          <li>
            <a href="tel:3125130834">
              <img src={telephone} alt="telephone icon" />
            </a>
            <p> (312)-513-0834</p>
          </li>
          <li>
            <a href="mailto:tvee267@yahoo.com" target="blank">
              <img src={mail} alt="email symbol" />
            </a>
            <p>tvee267@yahoo.com</p>
          </li>
          <li></li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
