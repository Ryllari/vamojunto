import {
  FETCH_PROFILE,
  FETCH_USER,
  LOGOUT
} from '../actions/types'


initState = {
  logged: null
}

export default (state = initState, action) => {
  switch (action.type) {
    case FETCH_USER:
      return {
        ...state,
        logged: true,
        uid: action.payload.uid,
        email: action.payload.email
      }

    case FETCH_PROFILE:
      return {
        ...state,
        username: action.payload.username,
        picture: action.payload.picture,
        stars: action.payload.stars
      }

    case LOGOUT:
      return { logged: false }

    default:
      return state
  }
}