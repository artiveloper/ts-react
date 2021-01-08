import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
// import ResponseCheck from "./lectures/ResponseCheck";
// import RSP from "./lectures/RSP";
import Lotto from "./lectures/lotto/Lotto";
// import GuGuDan from './GuGuDan';
// import WordRelay from './lectures/WordRealy';
// import NumberBaseBall from "./lectures/numberbaseball/NumberBaseBall";


ReactDOM.render(
  <Lotto />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
