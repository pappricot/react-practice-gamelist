import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './App';

import registerServiceWorker from './registerServiceWorker';
import './index.css';
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();


ReactDOM.render(
    <BrowserRouter>
        <Provider>
            <App />
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);