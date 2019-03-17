import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import About from './components/About/About';
import Settings from './components/Settings/Settings';
import Footer from './components/Footer/Footer'

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
          <Footer />
        </BrowserRouter>
    );
  }
}

export default App;
