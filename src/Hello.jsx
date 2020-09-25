import React from 'react' ;

//props = { name: 'Gabriel' }
const Hello = (props) => {
  return (
    <h1>Hello {props.name} ({props.age})</h1>
  );
}

export default Hello;

