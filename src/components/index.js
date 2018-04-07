import React, { Component } from 'react'
import { View, Image } from 'react-native'
import { connect } from 'react-redux'
import { fetchCurrentUser, singOut } from '../actions'
import firebase from 'firebase'

import LoginForm from './LoginForm'
import Home from './home'
import { Button, Spinner, Card, CardSection } from './common'


const vamojuntoInitImg = require('../statics/img/vamojunto_init.png')

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

  render() {
    const { vamojuntoInitStyle } = styles

    switch (this.props.user.logged) {
      case true:
        return <Home />
      case false:
        return <LoginForm />
      default:
        return <Image style={vamojuntoInitStyle} source={vamojuntoInitImg} />
    }
  }
}

const styles = {
  vamojuntoInitStyle: {
  }
}

const mapStateToProps = ({ user }) => {
  return { user }
}

export default connect(mapStateToProps, { fetchCurrentUser, singOut })(Index)