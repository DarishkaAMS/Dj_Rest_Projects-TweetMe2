import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {TweetsComponent} from './tweets'
import reportWebVitals from './reportWebVitals';


const appEL = document.getElementById('root')
if (appEL) {
    ReactDOM.render(<App />, appEL);
}

//ReactDOM.render(
//  <React.StrictMode>
//    <App />
//  </React.StrictMode>,
//  document.getElementById('root')
//);

const tweetsEL = document.getElementById('tweetme-2')
if (tweetsEL) {
    ReactDOM.render(<TweetsComponent />, tweetsEL)
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
