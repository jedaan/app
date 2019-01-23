import {applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk';

// why is function ?
export default () => {
    const store = createStore(reducers, {}, applyMiddleware(thunk));
    return store;
};

