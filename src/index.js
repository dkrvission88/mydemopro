//import React from "./App.js";
// import App from "./App.js";
// // import User from "./User.js";
// import ReactDOM from 'react-dom';
// ReactDOM.render(<App roll="100"/>,document.getElementById("root"))

import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import "bootstrap/dist/css/bootstrap.min.css"
import './index.css'
import Main from './Pages/Main';

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(

    <>
    <Main/>
    </>


)
//let no=30// (<App age={no}/>)

//ReactDOM.render(<User/>,document.getElementById("root"))




// import React from 'react';
// import ReactDOM from 'react-dom/client';

// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// // reportWebVitals();
