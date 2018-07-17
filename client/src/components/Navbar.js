import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <div>
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" Link to="#">Places</a>
          </div>
          <ul className="nav navbar-nav">

            <li><a Link to="/">Home</a></li>
            <li><a Link to="/form">Form</a></li>
            <li><a Link to="/historical">Previous Searches</a></li>
          </ul>
        </div>
      </nav>
      </div>


    );
  }
}

export default Navbar;
