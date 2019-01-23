// startup point of client side application
import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';


ReactDOM.hydrate(<Home/>, document.querySelector('#root'));// its not replaced the dic content that
//rendered by the server its add the necessary code .

console.log('hi client');
