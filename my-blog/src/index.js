import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//This function render all the components and add them inside the root
ReactDOM.render(
  <React.StrictMode>
  {/* All the components want to render */}
    <App /> 
  </React.StrictMode>,
  document.getElementById('root') // index.html the has div of root id
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

