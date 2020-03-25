import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/login/LoginWeb';
import Routes from './routes/routes'
import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap'



class App extends Component() {  
  render(){
    return (
          <Routes/>
    )
  }
}

export default App;
