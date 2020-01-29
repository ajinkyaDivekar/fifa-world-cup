import React, { Component } from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import { Link, useRouteMatch} from "react-router-dom";
  export default function Header() {
   let match = useRouteMatch();
    return (
      <>
      <Navbar bg="light">
        <Navbar.Brand href="#home"> FIFA WC</Navbar.Brand>
        <Nav className="mr-auto">
          <Link className="nav-link" to="/home"> Home </Link>
          <Link className="nav-link" to="/catalog"> Catalog </Link>
          <Link className="nav-link" to="/hooks"> Hooks </Link>
          <Link className="nav-link" to="/features"> Features </Link>
          <Link className="nav-link" to="/users"> Users </Link>
          <Link className="nav-link" to="/topics"> Topics </Link>
        </Nav>
      </Navbar>
    </>
    );

}
