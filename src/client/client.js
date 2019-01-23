// startup point of client side application
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import Routes from './Routes';

const store = createStore(reducers, {}, applyMiddleware(thunk));

ReactDOM.hydrate(
    <Provider store={store}>
        <BrowserRouter>
            <Routes/>
        </BrowserRouter>
    </Provider>, document.querySelector('#root'));// its not replaced the dic content that
//rendered by the server its add the necessary code .

console.log('hi client');
