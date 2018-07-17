import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <div>
      <nav class="navbar navbar-default navbar-fixed-top">
        <div class="container-fluid">
          <div class="navbar-header">
            <a class="navbar-brand" href="#">Places</a>
          </div>
          <ul class="nav navbar-nav">

            <li><a href="/">Home</a></li>
            <li><a href="/form">Form</a></li>
            <li><a href="/historical">Previous Searches</a></li>
          </ul>
        </div>
      </nav>
      </div>


    );
  }
}

export default Navbar;
