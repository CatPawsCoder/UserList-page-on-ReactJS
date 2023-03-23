import React from "react";
import Header from "./components/header";
import Users from "./components/users";
import AddUser from "./components/AddUser";
import axios from "axios";

const baseUrl = "https://reqres.in/api/users?page=1"

class App extends React.Component {

  constructor (props) {
    super (props)

    axios.get(baseUrl).then((respons) => {
      this.setState({users: respons.data.data})
    })

    this.state = {
        users : [
                // {id: 1,
                // firstname: 'Bob',
                // lastname: 'Marley',
                // bio:'a Jamaican singer, musician, and songwriter, one of the pioneers of reggae',
                // isHappy: true
                // },
                // {id: 2,
                // firstname: 'Selena',
                // lastname: 'Gomez',
                // bio:'an American singer, actress, producer, and businesswoman ',
                // isHappy: false},
                ]
    }

    this.addUser = this.addUser.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
    this.editUser = this.editUser.bind(this);
}
  render() {  
    return(
    <div >
        < Header title = "User list" />
        <main>
          <Users users = {this.state.users} onEdit={this.editUser} onDelete={this.deleteUser}/>
        </main>
        <aside>
          <AddUser onAdd={this.addUser}/>
        </aside>
     </div>)
  }
 
deleteUser (id) {
        this.setState (
          {users: this.state.users.filter ((el) => el.id !==id)
          })
}

editUser (user){
  // getting  a list of all users
  let allUsers = this.state.users
  // finding the right user
  allUsers[user.id - 1] = user
// clear the list after which a function for a new list
  this.setState({users: []}, () => {
      this.setState ({users: [...allUsers]})

  })
}

  addUser(user){
    const id = this.state.users.length + 1
    //write a new user in our list of users
    //обращаемся ко всему текущему списку [..., new object]
    this.setState({
      users:[...this.state.users, {id,...user}] 
    })
  }

}

export default App
