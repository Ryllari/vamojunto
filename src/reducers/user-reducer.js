import {
  FETCH_USER,
  FETCH_PROFILE,
  SING_OUT
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
        name: action.payload.name,
        email: action.payload.email
      }

    case FETCH_PROFILE:
      return {
        ...state,
        logged: true,
        uid: action.payload.uid,
        name: action.payload.name,
        email: action.payload.email,
        photoURL: action.payload.photoURL
      }

    case SING_OUT:
      return {
        logged: false
      }

    default:
      return state
  }
}