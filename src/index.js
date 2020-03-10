import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'Hello'}
]

let dialogs = [
    {id: 1, name: 'Dima'},
    {id: 2, name: 'Masha'},
    {id: 3, name: 'Vitya'}
]

let messages = [
    {id: 1, message: 'Hi'},
    {id: 1, message: 'Hello'},
    {id: 1, message: 'hi'}
]


ReactDOM.render(<App posts={posts} dialogs={dialogs} messages={messages} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
