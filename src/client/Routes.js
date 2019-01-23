import React from 'react';
import {Route} from 'react-router-dom';
import Home from './components/Home';

//http://react-ssr-api.herokuapp.com/
export default () => {

    return (
        <div>
            <Route exact path="/" component={Home}/>
            <Route exact path="/hi" component={() => 'hi'}/>

        </div>
    );
};
