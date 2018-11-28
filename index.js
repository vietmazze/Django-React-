import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import {fetchCoincap} from './store/actions/auth';

import reducer from './store/reducers/auth';

const composeEnhances = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer, composeEnhances(
    applyMiddleware(thunk)
));

store.dispatch(fetchCoincap());

const app = (
    <Provider store={store}>
         <App />
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'));

serviceWorker.unregister();