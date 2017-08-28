import React, { Component } from 'react';

import NavBar from './NavBar.js'
import Footer from './Footer.js'

export default class BaseLayout extends Component {
  render() {
    return (
      <div>
        <NavBar />
          {this.props.children}
        <Footer />
      </div>
    );
  }
}
