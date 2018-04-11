import firebase from 'firebase'

import {
  LOGOUT,
  FETCH_USER,
  FETCH_USERS,
  FETCH_PROFILE
} from './types'


export const singUp = (data, callback) => {
  return dispatch => firebase.auth()
    .createUserWithEmailAndPassword(data.email, data.password)
    .then(user => {
      dispatch({
        type: FETCH_USER,
        payload: user
      })

      firebase.database()
        .ref(`users/${user.uid}/`)
        .set({
          username: data.username,
          stars:    data.stars
        })
        .catch(error => {
          console.log(`code: ${error.code} message: ${error.message}`)
        })

      callback()
    })
    .catch(error => {
      console.log(`code: ${error.code} message: ${error.message}`)
      callback()
    })
}

export const singIn = (email, password, callback) => {
  return dispatch => firebase.auth()
    .signInWithEmailAndPassword(email, password)
    .then(user => {
      dispatch({
        type: FETCH_USER,
        payload: user
      })
      callback()
    })
    .catch(error => {
      console.log(`code: ${error.code} message: ${error.message}`)
      callback()
    })
}

export const singOut = () => {
  return dispatch => firebase.auth()
    .signOut()
    .then(() => {
      dispatch({ type: LOGOUT })
    })
    .catch(error => {
      console.log(`code: ${error.code} message: ${error.message}`)
    })
}

export const logOut = () => {
  return { type: LOGOUT }
}

export const createUser = ({ uid, username, stars }) => {
  return dispatch => firebase.database()
    .ref(`users/${uid}/`)
    .set({
      username: username,
      stars:    stars
    })
    .catch(error => {
      console.log(`code: ${error.code} message: ${error.message}`)
    })
}

export const fetchUser = (uid) => {
  return dispatch => firebase.database()
    .ref(`users/${uid}`)
    .once('value')
    .then(snapshot => {
      if (snapshot.exists()) {
        dispatch({
          type: FETCH_PROFILE,
          payload: snapshot.val()
        })
      }
    })
    .catch(error => {
      console.log(`code: ${error.code} message: ${error.message}`)
    })
}

export const fetchCurrentUser = (user) => {
  return { type: FETCH_USER, payload: user }
}
