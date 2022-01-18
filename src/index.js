import React from 'react';
import ReactDOM from 'react-dom';
// import App from './components/LiftingStateUP/App';   // lifting state up
import App from './components/CodeSplitting/App';   // code splitting

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

