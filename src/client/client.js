// startup point of client side application
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import Routes from './Routes';


ReactDOM.hydrate(
    <BrowserRouter>
        <Routes/>
    </BrowserRouter>, document.querySelector('#root'));// its not replaced the dic content that
//rendered by the server its add the necessary code .

console.log('hi client');
