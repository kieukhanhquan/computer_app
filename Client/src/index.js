import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import GlobalStyles from './Assets';
import Header from './Components/Header/Header';
import {store} from "./Redux/store";
import { Provider } from 'react-redux'
import { CookiesProvider } from "react-cookie";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CookiesProvider>
    <Provider store={store}>
    <GlobalStyles>
      <App/>
    </GlobalStyles>
    </Provider>
    </CookiesProvider>
</React.StrictMode>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

