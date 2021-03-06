import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { TweetsComponent, TweetDetailComponent, FeedComponent } from './tweets'
import { ProfileBadgeComponent } from './profiles'
import * as serviceWorker from './serviceWorker';

const appEl = document.getElementById('root');
if(appEl) {
  ReactDOM.render(<App />, appEl);
}

const element = React.createElement;
const tweetsEl = document.getElementById('twittexample');
if(tweetsEl) {
  ReactDOM.render(element(TweetsComponent, tweetsEl.dataset), tweetsEl);
}

const tweetFeedEl = document.getElementById('twittexample-feed');
if (tweetFeedEl) {
  ReactDOM.render(
    element(FeedComponent, tweetFeedEl.dataset), tweetFeedEl);
}

const tweetDetailElements = document.querySelectorAll('.twittexample-detail');

tweetDetailElements.forEach(container=> {
    ReactDOM.render(
      element(TweetDetailComponent, container.dataset), 
        container);
});

const userProfileBadgeElements = document.querySelectorAll(".twittexample-profile-badge")

userProfileBadgeElements.forEach(container=> {
  ReactDOM.render(
    element(ProfileBadgeComponent, container.dataset), container);
})


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
