import React, { Component } from 'react'
import { View, Dimensions, Image, Text } from 'react-native'
import { connect } from 'react-redux'
import { fetchCurrentUser, singOut } from '../actions'
import firebase from 'firebase'

import LoginForm from './LoginForm'
import Home from './home'
import Main from './main'
import { Container } from 'native-base';


const vamojuntoInitImg = require('../statics/img/icon-app.png')

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
    console.disableYellowBox = true;

    switch (this.props.user.logged) {
      case true:
        return <Home />
      case false:
        return <LoginForm />
      default:
        return (
          <Container>
        <Image style={vamojuntoInitStyle} source={vamojuntoInitImg} />
        <Text style={{alignSelf: 'center', color:'#FFF', marginTop:-40}} >Por que ir só se você pode ir acompanhado?</Text>
        </Container>
        ) 
      }
  }
}

const styles = {
  vamojuntoInitStyle: {
    flex: 1,
    resizeMode: 'contain',
    width: Dimensions.get('window').width
  }
}

const mapStateToProps = ({ user }) => {
  return { user }
}

export default connect(mapStateToProps, { fetchCurrentUser, singOut })(Index)