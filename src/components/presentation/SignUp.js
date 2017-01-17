import React, { Component } from 'react'

class SignUp extends Component {
  constructor(){
    super()
    this.state = {
      visitor: {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
      }
    }
  }


  updateVisitor(event){
    let updated = Object.assign({}, this.state.visitor)
    updated[event.target.id] = event.target.value
    this.setState({
      visitor: updated
    })
  }


  registerUser(event){
    event.preventDefault()
    this.props.onRegister(this.state.visitor)

  }

  logIn(event){
    event.preventDefault()
    this.props.onLogin(this.state.visitor)

  }

  render(){

    return(
      <div>
          <h2>Sign Up</h2>
            <input onChange={this.updateVisitor.bind(this)} id="firstName" className="form-control" type="text" placeholder="FirstName"/><br/>
            <input onChange={this.updateVisitor.bind(this)} id="lastName" className="form-control" type="text" placeholder="LastName"/><br/>
            <input onChange={this.updateVisitor.bind(this)} id="email" className="form-control" type="text" placeholder="Email"/><br/>
            <input onChange={this.updateVisitor.bind(this)} id="password" className="form-control" type="text" placeholder="Password"/><br/>
            <button onClick={this.registerUser.bind(this)} className="btn btn-primary">Sign Up</button>
            <h2>Log In</h2>
            <input onChange={this.updateVisitor.bind(this)} id="email" className="form-control" type="text" placeholder="Email"/><br/>
            <input onChange={this.updateVisitor.bind(this)} id="password" className="form-control" type="text" placeholder="Password"/><br/>
            <button onClick={this.logIn.bind(this)} className="btn btn-success">Log In</button>
      </div>
    )
  }
}

export default SignUp
