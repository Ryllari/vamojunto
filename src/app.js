import React, { Component } from 'react'
import { View } from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers'
import firebase from 'firebase'
import { FIREBASE_API_KEY } from './config/keys'

import Index from './components/index'


class App extends Component {

  componentWillMount() {
    firebase.initializeApp(FIREBASE_API_KEY)
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Header headerText="Vamo Junto?" />
          <Index />
        </View>
      </Provider>
    )
  }
}

export default App