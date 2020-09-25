import React, { Component } from 'react' ;

// function use state
// class allows you to use props and state.
// Normally you will eventually need to add a state so you can start with a class
// react hooks now actually allows you to do states in a function as well
class Hello extends Component {
  state = { clicked:false }

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked})
  }

  render() {
    return (
      <div>
        <h1 onClick={this.handleClick}>
          Hello {this.props.name} ({this.props.age})
          <span role="img" aria-label="Check">
            { this.state.clicked ? '✔️' : '◻️' }
          </span>
        </h1>
      </div>
    );
  }
}

// props - immutable data (intitial data)
// state mutable data (internal dynamic data)
// props = { name: 'Sean' }
// const Hello = (props) => {
//   return (
//     <div>
//       <h1>
//         Hello {props.name} ({props.age})
//         Clicked <span role="img" aria-label="Check">
//           { props.clicked ? '✔️' : '◻️' }
//         </span>
//       </h1>
//     </div>
//   );
// }


export default Hello;

