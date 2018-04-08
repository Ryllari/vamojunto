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

class Home extends Component {

  constructor(props) {
    super(props)

    this.state = {
    }
  }

  componentDidMount() {
  }

  render() {
    const { vamojuntoInitStyle } = styles

    return (
      <Container>
        <Header>
          <Body>
            <Title><Image style={vamojuntoInitStyle} source={vamojuntoInitImg} /></Title>
          </Body>
        </Header>

        <Tabs initialPage={1}>
          <Tab heading={<TabHeading><Icon name="person" /></TabHeading>}>
            <Profile />
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
  }
}

export default Home