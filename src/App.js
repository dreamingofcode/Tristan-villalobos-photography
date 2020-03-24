import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { increment, decrement } from './actions';
import './App.css';
import HomePage from './containers/HomePage';
import { About } from './components/About';
import { NoMatch } from './components/NoMatch';
import  Login  from './components/Login';
import { NavigationBar } from './components/NavigationBar';
//import SideBar from './components/SideBar';
function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <Router>
        <NavigationBar />
        {/* <SideBar /> */}
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={About} />
          <Route path="/login" component={Login} />
          <Route component={NoMatch} />
        </Switch>
        {/* <HomePage /> */}

        {/* <h1>Counter {counter}</h1>
        <button
          onClick={() => {
            dispatch(increment(1));
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            dispatch(decrement());
          }}
        >
          -
        </button> */}

        {isLogged ? (
          <h1>valiable info not able to see unlesss logged in</h1>
        ) : (
          ''
        )}
      </Router>
    </div>
  );
}

export default App;
