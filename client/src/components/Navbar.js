import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <div class="w3-top">
        <div class="w3-row w3-padding w3-black">
          <div class="w3-col s3">
            <a href="/" class="w3-button w3-block w3-black">HOME</a>
          </div>
          <div class="w3-col s3">
            <a href="#about" class="w3-button w3-block w3-black">ABOUT</a>
          </div>
          <div class="w3-col s3">
            <a href="/form" class="w3-button w3-block w3-black">Form</a>
          </div>
          <div class="w3-col s3">
            <a href="/historical" class="w3-button w3-block w3-black">Previous Searches</a>
          </div>
        </div>
      </div>

    );
  }
}

export default Navbar;
