import constants from '../constants'

var initialState = {
      currentUser: null
}

export default (state = initialState, action) => {

    let updated = Object.assign({}, state)
    switch(action.type){
      case constants.PROFILE_CREATED:
        //console.log('PROFILE_CREATED: ' + JSON.stringify(action.profile))
        updated['currentUser'] = action.profile
        return updated

      case constants.CURRENT_USER_RECIEVED:
          //console.log('PROFILE_CREATED: ' + JSON.stringify(action.profile))
        updated['currentUser'] = action.profile
        return updated


      default:
          return state
    }

}
