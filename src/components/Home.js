import React, { Component } from 'react';
import './w3.css';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div className = "w3-center">
        <h1>Hello, world!</h1>
      </div>
    );
  }
}
