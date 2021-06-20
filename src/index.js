import './scss/style.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import {configureStore} from '@reduxjs/toolkit';
import {createAPI} from './services/api';
import {Provider} from 'react-redux';
import {Router as BrowserRouter} from 'react-router-dom';
import App from './components/app/app';
import rootReducer from './store/root-reducer';
import {redirect} from './store/middlewares/redirect';
import browserHistory from './browser-history';

const api = createAPI();

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api
      },
      serializableCheck: false,
    }).concat(redirect)
});

ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter history={browserHistory}>
        <App />
      </BrowserRouter>
    </Provider>,
    document.querySelector(`#root`)
);
