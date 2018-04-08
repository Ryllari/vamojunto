import React, { Component } from 'react'
import { Dimensions, Image } from 'react-native'
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text,
  View
} from 'native-base'


const vamojuntoInitImg = require('../statics/img/logo.png')
const persons = require('../statics/img/persons.png')

class Home extends Component {

  constructor(props) {
    super(props)

    this.state = {
    }
  }

  componentDidMount() {
  }

  render() {
    const {
      vamojuntoInitStyle,
      personsStyle,
      buttonStyle,
     } = styles

    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title><Image style={vamojuntoInitStyle} source={vamojuntoInitImg} /></Title>
          </Body>
        </Header>
        <Content style={{backgroundColor: '#FFF'}}>
          <Content>
          <Image style={personsStyle} source={persons} />
          <Text style={{alignSelf: 'center', marginVertical: 30, marginHorizontal:20, }}>Encontre guardiões para te acompanhar até a sua casa, trabalho ou qualquer lugar!</Text>
          <Button large warning style={buttonStyle}>
            <Text>COMEÇAR</Text>
          </Button>
          </Content>
        </Content>
      </Container>
    )
  }
}

const styles = {
  buttonStyle: {
    alignSelf: 'center',
  },
  vamojuntoInitStyle: {

    alignSelf: 'center',
    flex: 1,
    height: 60,
    resizeMode: 'contain',
  },
  personsStyle: {
    flex: 1,
    width: Dimensions.get('window').width * 0.8,
    top: 30,
    resizeMode: 'contain',

  },
}

export default Home