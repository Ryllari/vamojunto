import React, { Component } from 'react';
import { View, Text, Dimensions, Container } from 'react-native';
import { Image } from 'native-base';


const vamojuntoInitImg = require('../statics/img/profile.png')

class Profile extends Component {
  render() {
    const { vamojuntoInitStyle } = styles
    return (
      
        <Image style={vamojuntoInitStyle} source={vamojuntoInitImg} />
      
    );
  }
}

const styles = {
  vamojuntoInitStyle: {
    flex: 1,
    resizeMode: 'contain',
    width: Dimensions.get('window').width
  }
}

export default Profile;