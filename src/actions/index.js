import constants from '../constants'

export default {
    currentUserRecieved: (profile) => {
      return {
        type: constants.CURRENT_USER_RECIEVED,
        profile: profile
      }
    },

    profilesRecieved: (profiles) => {
      return {
        type: constants.PROFILES_RECIEVED,
        profiles:profiles
      }
    },
    profileCreated: (profile) => {
      return {
        type: constants.PROFILE_CREATED,
        profile: profile
      }
    },

    bookmarksRecieved: (bookmarks, params) => {
      return {
        type: constants.BOOKMARKS_RECIEVED,
        bookmarks: bookmarks,
        params: params
      }
    },

    profileSelected: (profile) => {
      return {
        type: constants.PROFILE_SELECTED,
        profile: profile
      }
    }




}
