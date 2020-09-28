import React from 'react';
import './App.css';
import Counter from './Counter'

const App = () => {
  return (
    <div className="App">
      <Counter initialCount={10}/>
      <Counter initialCount={100}/>
    </div>
  );
};

export default App;
