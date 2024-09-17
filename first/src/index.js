import React from "react";
import ReactDOM from "react-dom";
import App from "./component/app.js";
import HelloWorld from "./component/helloworld.js";
import DisplayHello from "./component/person.js"; // Import DisplayHello directly from Person.js


// Render App in the 'root' div
ReactDOM.render(<App />, document.getElementById("root"));

// Render HelloWorld in the 'root1' div
ReactDOM.render(<HelloWorld />, document.getElementById("root1"));

ReactDOM.render(<DisplayHello />, document.getElementById("root2")); // Render DisplayHello in the root div
