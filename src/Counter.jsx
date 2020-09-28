import React, { Component } from 'react';
import './Counter.scss';

class Counter extends Component {
  state = {
    count: 0
  }

  subtract = () => {
    const step = this.props.step || 1;
    const newCount = this.state.count - step;


    if ( newCount <= 0) {
      this.setState({ count: 0 });
    } else {
      this.setState({ count: this.state.count - step });
      }
  }

  add = () => {
    const step = this.props.step || 1;
    this.setState({ count: this.state.count + step });
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
