import React, { Component } from 'react';
import './Counter.scss';

class Counter extends Component {
  render() {
    return (
      <div className="counter">
        <button>-</button>
        <span className="count">NUMBER</span>
        <button>+</button>
      </div>
    )
  }
}

export default Counter;
