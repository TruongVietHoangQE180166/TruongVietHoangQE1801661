import React from "react";
import ReactDOM from "react-dom";
import App from "./component/app.js";
import HelloWorld from "./component/helloworld.js";

// Render App in the 'root' div
ReactDOM.render(<App />, document.getElementById("root"));

// Render HelloWorld in the 'root1' div
ReactDOM.render(<HelloWorld />, document.getElementById("root1"));
