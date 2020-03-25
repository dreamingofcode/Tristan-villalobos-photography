import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import { increment, decrement } from './actions';
import './App.css';
import HomePage from './containers/HomePage';
import { About } from './containers/About';
import { NoMatch } from './components/NoMatch';
import Login from './components/Login';

import Layout from './components/Layout';
import Home from './components/Home';
import Admin from './containers/Admin';
import AdminForm from './components/AdminForm';
// import {Home} from './components/Home'
//import SideBar from './components/SideBar';
function App() {
  // const counter = useSelector(state => state.counter);
  // const isLogged = useSelector(state => state.isLogged);
  // const dispatch = useDispatch();
  return (
    <div className="App">
      {/* <Layout> */}
      <Router>
        {/* <NavigationBar /> */}
        {/* <SideBar /> */}

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={HomePage} />
          <Route path="/about" component={About} />
          <Route path="/login" component={Login} />
          <Route exact path="/admin" component={Admin} />
          <Route path="/admin-create" component={AdminForm} />
          <Route component={NoMatch} />
        </Switch>
        {/* <HomePage />  */}

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
      </button>  */}

        {/* {isLogged ? (
         <h1>valiable info not able to see unlesss logged in</h1>
         ) : (
           ''
          )}  */}
      </Router>
      {/* </Layout> */}
    </div>
  );
}

export default App;
