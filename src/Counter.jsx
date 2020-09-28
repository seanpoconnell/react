import React, { Component } from 'react';
import './Counter.scss';

class Counter extends Component {
  state = {
    count: this.props.initialCount
  }

  subtract = () => {
    const newCount = this.state.count - this.props.step

    if ( newCount <= 0) {
      this.setState({ count: 0 });
    } else {
      this.setState({ count: this.state.count - this.props.step });
      }
  }

  add = () => {
    this.setState({ count: this.state.count + this.props.step });
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
