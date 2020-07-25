import React from 'react';
import logo from './logo.svg';
import './App.css';
import MovieLogo from './components/logo';
import Body from './components/body';
import Bar from './components/bar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MovieLogo logo={logo} alt="logo" />
      </header>
      <Body />
      <Bar />
    </div>
  );
}

export default App;
