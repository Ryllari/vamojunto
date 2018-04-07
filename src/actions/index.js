import firebase from 'firebase'

import {
  SING_IN,
  SING_OUT,
  FETCH_USER,
  FETCH_USERS,
} from './types'


export const createUser = (email, password) => {
  return dispatch => firebase.auth()
    .createUserWithEmailAndPassword(email, password)
    .then(user => {
      if (user !== undefined) {
        dispatch({
          type: FETCH_USER,
          payload: user
        })
      }
    })
    .catch(error => {
      console.log(`code: ${error.code} message: ${error.message}`)
    })
}

export const fetchCurrentUser = (user) => {
  return dispatch => dispatch({
    type: FETCH_USER,
    payload: user
  })
}

export const singIn = (email, password, callback) => {
  return dispatch => firebase.auth()
    .signInWithEmailAndPassword(email, password)
    .then(user => {
      if (user !== undefined) {
        dispatch({
          type: FETCH_USER,
          payload: user
        })

        /* TODO
        firebase.database()
          .ref('/profile/' + response.uid)
          .once('value')
          .then((snapshot) => {
            if (snapshot.exists()) {
              dispatch({
                type: FETCH_PROFILE,
                payload: response
              })
            }
          })
        */
      }
    })
    .catch((error) => {
      callback(error)
    })
}

export const singOut = (user, callback) => {
  return dispatch => firebase.auth()
    .signOut()
    .then(() => {
      dispatch({
        type: SING_OUT
      })
    })
    .catch(error => {
      console.log(`code: ${error.code} message: ${error.message}`)
    })
}