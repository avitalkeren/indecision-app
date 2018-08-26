import * as React from "react"; 
import * as ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp'

console.log("hello");

const appRoot = document.getElementById("app");
//console.log(appRoot);
const template = <p>Hello</p>;

ReactDOM.render(<IndecisionApp />,appRoot);