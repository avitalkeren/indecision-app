"use strict";

console.log("hello");

var appRoot = document.getElementById("app");
var template = React.createElement(
  "p",
  null,
  "Hello"
);

ReactDOM.render(template, appRoot);
