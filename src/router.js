import React, { Component } from 'react';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import Header from './components/header';
import Home from './components/home';
import Login from './components/login';
export default(
  <Router>
    <div>
      <Route path="/" component={Header} />
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
    </div>
  </Router>
)
