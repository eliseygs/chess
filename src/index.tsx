// // import React from "react";
// // import ReactDOM from "react-dom";
// // import App from "./App";

// // ReactDOM.render(
// //   <App/>,
// //   document.getElementById('root')
// // )

// import React from "react";
// import * as ReactDOMClient from 'react-dom/client';
// import App from "./App";
//     const container = document.getElementById('root');
//     const root = ReactDOMClient.createRoot(container);
//     root.render(
//             <App />
//     )

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
