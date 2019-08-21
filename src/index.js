import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { reducer } from './reducers/reducer';

import App from './App';

import 'bulma/css/bulma.css';
import './styles.scss';


const store = createStore(reducer);

console.log("store in index.js", store);

const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement
);
