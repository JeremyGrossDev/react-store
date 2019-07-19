import React from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom';
import { PersistGate } from 'redux-persist/integration/react'
import App from './App';
import { store, persistor } from './redux/store';
import './index.css';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <PersistGate persistor={persistor}>
                <App />
            </PersistGate>
        </BrowserRouter>
    </Provider>
, document.getElementById('root'));
