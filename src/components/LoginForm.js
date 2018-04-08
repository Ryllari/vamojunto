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


const vamojuntoLogo = require("../statics/img/logo.png")

class LoginForm extends Component {

  constructor(props) {

    super(props);

    this.state = {
      email: 'teste@vamojunto.com',
      password: '123456',
      error: '',
      loading: false
    }
  }

  onSingInPress() {
    const { email, password } = this.state

    this.setState({ loading: true })
    this.props.singIn(email, password, (error) => {
      console.log(`code: ${error.code} message: ${error.message}`)
      this.setState({ loading: false })
    })
  }

  onSingUpPress() {

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

    return (
      <Container>
        <Content>
          <Image style={vamojuntoLogoStyle} source={vamojuntoLogo} />
          <Form>
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
                label="Password"
                value={this.state.password}
                onChangeText={password => this.setState({ password })}
              />
            </Item>
          </Form>
          <Right>
            <Text style={orangeColorStyle}>Esqueceu sua senha?</Text>
          </Right>
          <Button style={buttonLoginStyle} onPress={this.onSingInPress.bind(this)}>
            <Text style={whiteColorStyle}>Entrar</Text>
          </Button>
          <Text style={noRegisterStyle}>Ainda não tem conta?</Text>
          <Text style={registerStyle}>REGISTRE-SE</Text>
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  vamojuntoLogoStyle: {
    flex: 1,
    width: Dimensions.get('window').width,
    resizeMode: 'contain',
    top: 60,
    bottom: 60,
    paddingHorizontal: 10,
  },
  inputStyle: {
    color: '#1e2040'
  },
  buttonLoginStyle: {
    flex: 1,
    alignSelf: 'center',
    color: '#f7941e',
  },
  noRegisterStyle: {
    flex: 1,
    alignSelf: 'center',
    color: '#f7941e'
  },
  registerStyle: {
    flex: 1,
    alignSelf: 'center',
    color: '#fff'
  },
  whiteColorStyle: {
    color: '#fff',
  },
  orangeColorStyle: {
    color: '#f7941e'
  },
})

export default connect(null, { singIn })(LoginForm)