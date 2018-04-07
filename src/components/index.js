import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { fetchCurrentUser, singOut } from '../actions'
import firebase from 'firebase'

import LoginForm from './LoginForm'
import { Button, Spinner } from './common'


class Index extends Component {

  componentWillMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user)
        this.props.fetchCurrentUser(user)
      else
        this.props.singOut()
    })
  }

  onLogOutPress() {
    this.props.singOut()
  }

  renderContent() {
    console.log("USER:", this.props.user)
    switch (this.props.user.logged) {
      case true:
        return (
          <Button onPress={this.onLogOutPress.bind(this)}>
            Log Out
          </Button>
        )
      case false:
        return <LoginForm />
      default:
        return <Spinner size="large" />
    }
  }

  render() {
    return (
      <View>
        {this.renderContent()}
      </View>
    )
  }
}

const mapStateToProps = ({ user }) => {
  return { user }
}

export default connect(mapStateToProps, { fetchCurrentUser, singOut })(Index)