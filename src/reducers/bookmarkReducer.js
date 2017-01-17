import constants from '../constants'

var initialState = {
  bookmarks: []
}

export default (state = initialState, action) => {

  let updated = Object.assign({}, state)

  switch (action.type){

    case constants.BOOKMARKS_RECIEVED:
    console.log('BOOKMARKS_RECIEVED: ' + JSON.stringify(action.bookmarks))
    updated['bookmarks'] = action.bookmarks

    return updated


    default:
      return state
  }

}
