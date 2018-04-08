import React, { Component } from 'react'
import { Dimensions, Image, DrawerLayoutAndroid } from 'react-native'
import {
  Body,
  Button,
  Container,
  Content,
  Footer,
  FooterTab,
  Form,
  Header,
  Icon,
  Input,
  Item,
  Label,
  Left,
  Radio,
  Right,
  Tab,
  TabHeading,
  Tabs,
  Text,
  Title,
  View
} from 'native-base'

import Profile from './profile'
import Mark from './mark'
import Friends from './friends'


const vamojuntoInitImg = require('../statics/img/logo.png')

const profileImg = require('../statics/img/profile.png')

class Home extends Component {

  constructor(props) {
    super(props)

    this.state = {
    }
  }

  componentDidMount() {
  }

  render() {
    const { vamojuntoInitStyle, profileStyle } = styles

    return (
      <Container>
        <Header>
          <Body>
            <Title><Image style={vamojuntoInitStyle} source={vamojuntoInitImg} /></Title>
          </Body>
        </Header>
        <Tabs initialPage={1}>
          <Tab heading={<TabHeading><Icon name="person" /></TabHeading>}>
            <Image style={profileStyle} source={profileImg} />
          </Tab>
          <Tab heading={<TabHeading><Icon name="shuffle" /></TabHeading>}>
            <Mark />
          </Tab>
          <Tab heading={<TabHeading><Icon name="navigate" /></TabHeading>}>
            <Friends />
          </Tab>
        </Tabs>
      </Container>
    )
  }
}

const styles = {
  vamojuntoInitStyle: {
    alignSelf: 'center',
    flex: 1,
    height: 60,
    resizeMode: 'contain',
  },
  profileStyle: {
    alignSelf: 'center',
    flex: 1,
    resizeMode: 'contain',
    width: Dimensions.get('window').width * 0.8,
  }
}

export default Home