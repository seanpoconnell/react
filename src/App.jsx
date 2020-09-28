import React from 'react';
import './App.css';
import Hello from './Hello'
import Counter from './Counter'

class App extends React.Component {
  state = {
    userStep: 1
  }

  handleChange = (event) => {
    const value = event.target.value;
    this.setState({ userStep: parseInt(value)})
  }
  render () {
    return (
      <div className="App">
        <label>Step:</label>
        <input type="number" name="step" onChange={this.handleChange} value={this.state.userStep} />
        <Counter name="Default" step={this.state.userStep} />
        ---------------------------
        <Hello name="Sean" age={23} />
        <Hello name="Ashley" age={17} />
        <Counter initialCount={20} step={10} />
        <Counter initialCount={40} step={15} />
      </div>
    );
  }
}

export default App;
