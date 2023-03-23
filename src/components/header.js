import React from "react";


// ReactDOM.render (React.createElement ('input', {
//     placeholder: "Help text",
//     onClick: () => console.log("clecked"),
//     onMouseEnter: () => console.log ("mouse over")
// }),
// document.getElementById("app"))

class  Header extends React.Component {
  render () {
    return(<header className="header"> {this.props.title} 

    
    </header>
    
    )
  }
} 

export default Header