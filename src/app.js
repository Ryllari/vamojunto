import React, { Component } from 'react'
import { Provider } from 'react-redux'
import reduxThunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
import firebase from 'firebase'
import { FIREBASE_CONFIG } from './config/firebase'

import { Container } from 'native-base'
import Index from './components/index'
import { Header } from './components/common'


const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore)

class App extends Component {

  componentWillMount() {
    firebase.initializeApp(FIREBASE_CONFIG)
  }

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