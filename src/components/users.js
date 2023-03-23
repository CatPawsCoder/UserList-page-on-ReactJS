import React from "react";
import User from "./User";

class  Users extends React.Component {

 
// users = [
//     {id: 1,
//     firstname: 'Bob',
//     lastname: 'Marley',
//     bio:'a Jamaican singer, musician, and songwriter, one of the pioneers of reggae',
//     isHappy: true
//     },
//     {id: 2,
//     firstname: 'Selena',
//     lastname: 'Gomez',
//     bio:'an American singer, actress, producer, and businesswoman ',
//     isHappy: false},

// ];

  render () {
    if (this.props.users.length > 0 )

        return( <div>
            {this.props.users.map((el) => 
            (<User onEdit={this.props.onEdit} 
            onDelete ={this.props.onDelete} key = {el.id} user = {el}/>))}
        </div>)

    else
        return(
         <div className="users" > 
               <h3>No users</h3>
            </div>)}
        
  }


export default Users