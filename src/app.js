import React, { Component } from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reduxThunk from 'redux-thunk'
import firebase from 'firebase'
import { FIREBASE_CONFIG } from './config/firebase'

import reducers from './reducers'
import { Container } from 'native-base'
import Index from './components/index'
import { Header } from './components/common'


firebase.initializeApp(FIREBASE_CONFIG)
const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore)

class App extends Component {

  render() {
    const { containerStyle } = styles

    return (
      <Provider store={createStoreWithMiddleware(reducers)}>
        <Container style={containerStyle}>
          <Index />
        </Container>
      </Provider>
    )
  }
}

const styles = {
  containerStyle: {
    backgroundColor: '#2B2D5C'
  }
}

export default App