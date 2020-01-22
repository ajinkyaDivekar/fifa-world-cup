import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import BasicRoute from './basicRoute';
import Header from '../common/Header';
class Stuff extends Component {
  render() {
    return (
      <Router>
        <Header />
        <BasicRoute />
      </Router>

    );
  }
}

export default Stuff;