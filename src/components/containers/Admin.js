import React, { Component } from 'react'
import { APIManager } from '../../utils'
import { connect } from 'react-redux'
import actions from '../../actions'
import { SignUp } from '../presentation'

class Admin extends Component{
  constructor(){
    super()
    this.state = {
      link: ''
    }
  }

  componentDidMount(){
    APIManager.get('/account/currentuser', null, (err, response) => {
      if(err){
        alert(err)
        return
      }
      if(response.profile == null)
        return

      this.props.currentUserRecieved(response.profile)
    })
  }

  registerUser(visitor){
    APIManager.post('/account/register', visitor, (err, response) => {
      if(err){
        let msg = err.message || err
        alert(msg)
        return
      }
      this.props.profileCreated(response.profile)
    })
  }

  logIn(credentials){
    APIManager.post('/account/login', credentials, (err, response) => {
      if(err){
        let msg = err.message || err
        alert(msg)
        return
      }
    //  console.log('LOG IN: ' + JSON.stringify(response))
      this.props.currentUserRecieved(response.profile)

    })
  }
  updateLink(event){
    event.preventDefault()
    this.setState({
      link: event.target.value
    })
  }

  submitLink(event){
    event.preventDefault()
    //console.log('submitLink: ' + this.state.link)

    const bookmark = {
      profile: this.props.currentUser.id,
      url: this.state.link
    }
    APIManager.post('/api/bookmark', bookmark, (err, response) => {
      if(err){
        alert(err)
        return
      }
      //console.log('BOOKMARK POSTED: '  + JSON.stringify(response))
    })

  }

  logOut(event){
    event.preventDefault()
    APIManager.get('/account/logout', null, (err, response) => {
      if(err){
        alert(err)
        return
      }
      console.log('Logged Out: ' + JSON.stringify(response))
      this.props.currentUserRecieved(response.profile)

    })
  }



  render(){
    return(
      <div>
        {(this.props.currentUser == null) ? <SignUp onRegister={this.registerUser.bind(this)} onLogin={this.logIn.bind(this)}/> :
        <div>
          <h2>Welcome {this.props.currentUser.firstName}</h2>
          <input onChange={this.updateLink.bind(this)} className="form-control" type="text" placeholder="www.example.com"/><br/>
          <button onClick={this.submitLink.bind(this)} className="btn btn-info">Submit Link</button><br/>
          <button onClick={this.logOut.bind(this)} className="btn btn-warning">Log Out</button>
        </div>
        }
      </div>

    )
  }
}

const stateToProps = (state) => {
  return {
    currentUser: state.account.currentUser

  }
}

const dispatchToProps = (dispatch) => {
  return {
    profileCreated: (profile) => dispatch(actions.profileCreated(profile)),
    currentUserRecieved: (profile) => dispatch(actions.currentUserRecieved(profile))
  }
}


export default connect(stateToProps, dispatchToProps)(Admin)
