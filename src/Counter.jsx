import React, { Component } from 'react';
import './Counter.scss';

class Counter extends Component {
  state = {
    count: 0
  }

  subtract = () => {
    if (this.state.count === 0) {
      return;
    }
    this.setState({ count: this.state.count - 1});
  }

  add = () => {
    this.setState({ count: this.state.count + 1});
  }

  render() {
    return (
      <div className="counter">
        <button onClick={this.subtract}>-</button>
        <span className="count">{this.state.count}</span>
        <button onClick={this.add}>+</button>
      </div>
    )
  }
}

export default Counter;
