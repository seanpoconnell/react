import React, { Component } from 'react' ;

class Name extends Component {
  state = {
    name: ''
  }

  handleChange = (event) => {
    this.setState({name: event.target.value})
  }

  resetName = () => {
    this.setState({ name: "" })
  }

  // everytime your state or props change the render will run again
  render() {
    return(
      <div>
        <input type="text" onChange={this.handleChange} value={this.state.name}/>
        <button onClick={this.resetName}>Reset!</button>
        <p>{this.state.name}</p>
      </div>
    );
  }
}

export default Name;
