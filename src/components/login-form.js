import React, { Component } from 'react'
import {
  Image,
  Platform,
  StyleSheet,
  View,
  Dimensions
  } from 'react-native';
import { connect } from 'react-redux'

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
  Right,
  Text,
  Title
} from 'native-base'
import { singIn } from '../actions'

import CreateUser from './create-user'


const vamojuntoLogo = require("../statics/img/logo.png")

class LoginForm extends Component {

  constructor(props) {

    super(props);

    this.state = {
      email: 'alissonrgs@vamojunto.com',
      password: '123456',
      error: '',
      loading: false,
      profile: true
    }
  }

  onSingInPress() {
    const { email, password } = this.state

    this.setState({ loading: true })
    this.props.singIn(email, password, () => {
      this.setState({ loading: false })
    })
  }

  onSingUpPress() {
    this.setState({ profile: false })
  }

  renderSingInButton() {
    if (this.state.loading) {
      return <Spinner size="small" />
    }

    return (
      <Button onPress={this.onSingInPress.bind(this)}>
        Log in
      </Button>
    )
  }

  render() {
    const {
      vamojuntoLogoStyle,
      inputStyle,
      buttonLoginStyle,
      noRegisterStyle,
      registerStyle,
      whiteColorStyle,
      orangeColorStyle,
      containerStyle,
    } = styles

    if (this.state.profile)
      return (
        <Container style={{flex: 1, marginTop: 30}}>
          <Content>
            <Image style={vamojuntoLogoStyle} source={vamojuntoLogo} />
            <Form style={{marginTop: 60, marginHorizontal:20}}>
              <Item floatingLabel>
                <Label style={whiteColorStyle}>Email</Label>
                <Input
                  style={inputStyle}
                  label="Email"
                  value={this.state.email}
                  onChangeText={email => this.setState({ email })}
                />
              </Item>
              <Item floatingLabel last>
                <Label style={whiteColorStyle}>Password</Label>
                <Input
                  style={inputStyle}
                  secureTextEntry
                  value={this.state.password}
                  onChangeText={password => this.setState({ password })}
                />
              </Item>
            </Form>

            <Button transparent warning style={{alignSelf:'flex-end'}}><Text>Esqueceu sua senha?</Text></Button>

            <Button warning large style={{alignSelf:'center', marginTop:20}} onPress={this.onSingInPress.bind(this)}>
              <Text style={whiteColorStyle}>Entrar</Text>
            </Button>
            <Text style={noRegisterStyle}>Ainda não tem conta?</Text>
            <Button transparent warning style={{alignSelf:'center',}} onPress={this.onSingUpPress.bind(this)}>
              <Text>REGISTRE-SE</Text>
            </Button>
          </Content>
        </Container>
      )
    return <CreateUser />
  }
}

const styles = StyleSheet.create({
  vamojuntoLogoStyle: {
    width: Dimensions.get('window').width,
    resizeMode: 'contain',
    paddingHorizontal: 10,
    marginTop:60,
  },
  inputStyle: {
    color: '#ccc',
    left: 10,
  },
  buttonLoginStyle: {
    flex: 1,
    alignSelf: 'center',
    color: '#f7941e',
    marginBottom: 20,
  },
  noRegisterStyle: {
    flex: 1,
    alignSelf: 'center',
    color: '#fff',
    marginTop: 20,
  },
  registerStyle: {
    flex: 1,
    alignSelf: 'center',

  },
  whiteColorStyle: {
    color: '#fff',
  },
  orangeColorStyle: {
    color: '#f7941e'
  },
})

export default connect(null, { singIn })(LoginForm)