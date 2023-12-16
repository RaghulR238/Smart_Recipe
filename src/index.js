import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Render1 from './page2/Render';
import RoundContainer from './page2/signup';
import TemporaryDrawer from './filterpage.js/leftfilter';
import Up from './upload.js/up';
import Result from './result.js/result';
import Output from './output.js/output';
import Final from './Final_page/final';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

   <TemporaryDrawer/>
  //  <App/>
  //  <Up/>
//  <Result/>
//  <Final/> 

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
