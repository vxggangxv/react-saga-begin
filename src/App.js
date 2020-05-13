import React from 'react';
import Router from './routes';
import CounterContainer from './containers/CounterContainer';
import GlobalStyles from './components/common/GlobalStyles';
// import './App.scss';

function App() {
  return (
    <>
      <GlobalStyles></GlobalStyles>
      <div className="app">
        <h1 className="app-name hide">React Movie Saga</h1>
        <main className="app-contents" id="main">
          {/* <Router></Router> */}
          <CounterContainer></CounterContainer>
        </main>
      </div>
    </>
  );
}

export default App;
