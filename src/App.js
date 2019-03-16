import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from "./components/Main";
import About from "./components/About";
import Settings from "./components/Settings";

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/about" component={About} />
            <Route path="/settings" component={Settings} />
          </Switch>
        </BrowserRouter>
    );
  }
}

export default App;
