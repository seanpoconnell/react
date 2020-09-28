import React from 'react';
import './App.css';
import Counter from './Counter'

const App = () => {
  return (
    <div className="App">
      <Counter initialCount={10} step={1} />
      <Counter initialCount={100} step={5} />
      <Counter initialCount={100} step={10} />
    </div>
  );
};

export default App;
