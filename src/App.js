import React from 'react';
import Router from 'routes';
import './App.scss';

function App() {
  return (
    <div className="app">
      <h1 className="app-name hide">React Movie Saga</h1>
      <main className="app-contents" id="main">
        <Router></Router>
      </main>
    </div>
  );
}

export default App;
