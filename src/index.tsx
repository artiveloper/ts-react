import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import GuGuDan from './GuGuDan';
import WordRelay from './lectures/WordRealy';
import {hot} from 'react-hot-loader/root';


const Hot = hot(WordRelay);

ReactDOM.render(
  <Hot />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
