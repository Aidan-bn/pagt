import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header from './header';
import reportWebVitals from './reportWebVitals';
import Second from './second';
import Kanuni from './Kanuni';
import Idara from './idara';
import Social from './Social';
import History from './History';
import Events from './Events';
import Majimbo from './Majimbo';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Header />
    <Second />
    <Kanuni />
    <Idara />
    <Social />
    <History />
    <Events />
    <Majimbo />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
