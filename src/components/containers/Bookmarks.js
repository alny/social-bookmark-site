import React, { Component} from 'react'
import { APIManager } from '../../utils'
import { connect } from 'react-redux'
import actions from '../../actions'


class Bookmarks extends Component {
  constructor(){
    super()
    this.state = {

    }
  }


componentDidMount(){

}

componentDidUpdate(){
  console.log('componentDidUpdate: ' + JSON.stringify(this.props.selected))
  const params = {profile: this.props.selected.id}
  APIManager.get('/api/bookmark', params, (err, response) => {
     if(err){
       return
     }
   this.props.bookmarksRecieved(response.results)
 })
}

  render(){
    return(
      <div>
        <h2>Bookmarks</h2>
        <ol>{

          this.props.bookmarks.map((bookmark, i) => {
            return(
              <li key={bookmark.id}><b>Title:</b>{bookmark.title} <br/> <b>Image:</b>{bookmark.image} </li>
            )
          })
        }

        </ol>
      </div>

    )
  }
}

const stateToProps = (state) => {
  return {
    bookmarks: state.bookmark.bookmarks,
    selected: state.profile.selected
  }
}

const dispatchToProps = (dispatch) => {
  return {
    bookmarksRecieved: (bookmarks, params) => dispatch(actions.bookmarksRecieved(bookmarks, params))
  }
}

export default connect(stateToProps, dispatchToProps)(Bookmarks)
