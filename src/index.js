import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Aboutus_Components from "./components/Aboutus_Components";
import Portfolio_Components from "./components/Portfolio_Components";
import Contactus_Components from "./components/Contactus_Components";
import Conditions_Components from "./components/Conditions_Components";

// const routing=(
//     <Router>
//         <div>
//             <Route path='/' component={App}></Route>
//             <Route path='/Aboutus' component={Aboutus_Components}></Route>
//             <Route path='/portfolio' component={Portfolio_Components}></Route>
//             <Route path='/Contactus' component={Contactus_Components}></Route>
//         </div>
//     </Router>
// )

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
