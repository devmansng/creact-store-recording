import React, { Component } from 'react';
import {Switch,Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/NavBar"
import ProductList from './components/ProductList';
import Detail from './components/Detail';
import Cart from './components/cart/Cart';
import Default from './components/Default';
import Modal from './components/Modal';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar/>
        <Switch>
          <Route exact path="/" component={ProductList}/>
          <Route path="/details" component={Detail}/>
          <Route path="/cart" component={Cart}/>
          <Route component={Default}/>
        </Switch>
        <Modal/>
      </React.Fragment>

    );
  }
}

export default App;