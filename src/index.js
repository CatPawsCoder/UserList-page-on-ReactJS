import React from "react";
import ReactDOMClient from "react-dom/client";
import App from './App';
import './css/index.css';
// ReactDOM.render (React.createElement ('input', {
//     placeholder: "Help text",
//     onClick: () => console.log("clecked"),
//     onMouseEnter: () => console.log ("mouse over")
// }),
// document.getElementById("app"))

// class  Header extends React.Component {
//   render () {
//     return(<header> {this.props.title} </header>)
//   }
// } 
 
// class App extends React.Component {
//   newtext = "newtext"
//   render() {  
//     return(
//     <div >
//     < Header title = "My header!" />
//        <h1> {this.newtext}</h1> 
//      <input placeholder = {this.newtext }
//     onClick = {this.inputClick} onMouseEnter = {this.mouseOver}/>
//     <p> {this.newtext === "newtext" ? "Yes" : "No" } </p>
//      </div>) }
 
//  inputClick () {console.log("clecked")}
//   mouseOver () {console.log ("mouse over")} 

// }

        
const app = ReactDOMClient.createRoot(document.getElementById("app"))

app.render (< App />)
