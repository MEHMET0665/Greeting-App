import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';S
import reportWebVitals from './reportWebVitals';

function PrintHeader(){
  const heading1=(
  <div>
    <h1>Hello World</h1>
    <p>This is a parent/ child & sibling exercise</p>
  </div>)
  return heading1
}

ReactDOM.render(<PrintHeader/>, document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
