import React, { Children, Component } from 'react';
import logo, { ReactComponent } from './logo.svg';
import './App.css';
import "./css/NavBar.css";
import NavBar from './NavBar';
import {Route, Switch } from "react-router-dom";
import Product from "./navigation/product"
import Services from "./navigation/services"
import About from "./navigation/about"
import Contact from "./navigation/contact"

type CounterProps = {

}

type CounterState = {

}

class Home extends React.Component{
  render(){
      return <h2 style={{textAlign: 'center'}}>Home</h2>
  }
}

class NotFound extends React.Component{
  render(){
      return <h2 style={{textAlign: 'center'}}>Component NotFound</h2>
  }
}


class App extends Component<CounterProps,CounterState> {
  render(){
    return (
      <div>
        <header>
          <NavBar />
        </header>
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/navigation/product" component={Product} />
            <Route path="/navigation/services" component={Services} />
            <Route path="/navigation/about" component={About} />
            <Route path="/navigation/contact" component={Contact} />
            <Route component={NotFound} />
          </Switch>
        </main>
      </div>

    );
  }
}

export default App;
