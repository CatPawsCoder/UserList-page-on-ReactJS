import React from "react";

class  AddUser extends React.Component {
  userAdd = {}
  constructor (props) {
    super (props)
    this.state = {
      
      first_name: "",
      last_name: "",
      avatar: "",
      email:"",
      isHappy: false
    }
}
  
  
  render () {
    return(
    // свойство  в котором указано значение формы
    <form ref={(el) => this.myForm = el}>
        <input placeholder="name" onChange={(e) => this.setState({first_name: e.target.value})}/>
        <input placeholder="last_name" onChange={(e) => this.setState({last_name: e.target.value})}/>
        <input placeholder="avatar_url" onChange={(e) => this.setState({avatar: e.target.value})}/>
        <input placeholder="email" onChange={(e) => this.setState({ email: e.target.value })}/>
        <label htmlFor="isHappy">
            Feeling good?
        </label>
        <input type="checkbox" id="isHappy" 
        onChange={(e) => this.setState({ isHappy: e.target.checked })}/>
        <button type="button"
           onClick = {() => {
            this.myForm.reset ()
            this.userAdd = {
              first_name: this.state.first_name,
              last_name: this.state.last_name,
              email: this.state.email,
              avatar:this.state.avatar,
              isHappy: this.state.isHappy,
             }
            if (this.props.user)
              this.userAdd.id = this.props.user.id
              this.props.onAdd (this.userAdd)
                    }}>
                  
                      Add</button>
    </form>
    )
  }
} 

export default AddUser