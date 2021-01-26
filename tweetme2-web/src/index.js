import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {FeedComponent, TweetsComponent, TweetDetailComponent} from './tweets'
import reportWebVitals from './reportWebVitals';


const appEL = document.getElementById('root')
if (appEL) {
    ReactDOM.render(<App />, appEL);
}

const e = React.createElement
const tweetsEL = document.getElementById('tweetme-2')
if (tweetsEL) {
    ReactDOM.render(
        e(TweetsComponent, tweetsEL.dataset), tweetsEL);
}

const tweetsFeedEL = document.getElementById('tweetme-2-feed')
if (tweetsFeedEL) {
    ReactDOM.render(
        e(FeedComponent, tweetsFeedEL.dataset), tweetsFeedEL);
}

const tweetDetailElement = document.querySelectorAll('.tweetme-2-detail')

tweetDetailElement.forEach(container => {
    ReactDOM.render(
        e(TweetDetailComponent, container.dataset), container);
})
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
