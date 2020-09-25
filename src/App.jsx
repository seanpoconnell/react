import React from 'react';
import './App.css';
import Hello from './Hello'
import Name from './Name'

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Name />
        <Hello name="Sean" age={23} />
        <Hello name="Ashley" age={17} />
        <Hello name="Chris" age={27} />
      </header>
    </div>
  );
}

export default App;
