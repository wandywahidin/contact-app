import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '../src/components/app/App'
import reportWebVitals from './reportWebVitals';

// React-router
import {BrowserRouter as Router} from 'react-router-dom'

// react-redux
import { Provider } from 'react-redux'

// reducer
import store from './redux'

ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    </React.StrictMode>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
