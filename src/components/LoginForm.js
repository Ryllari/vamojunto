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
    const { containerStyle, vamojuntoInitStyle } = styles

    return (
      <Container style={containerStyle}>
        <Content>
          <Image style={vamojuntoInitStyle} source={vamojuntoLogo} />
          <Form>
            <Item inlineLabel>
              <Label>Email</Label>
              <Input
                placeholder="user@gmail.com"
                label="Email"
                value={this.state.email}
                onChangeText={email => this.setState({ email })}
              />
            </Item>
            <Item inlineLabel last>
              <Label>Password</Label>
              <Input
                secureTextEntry
                placeholder="password"
                label="Password"
                value={this.state.password}
                onChangeText={password => this.setState({ password })}
              />
            </Item>
          </Form>
          <Button>
            <Text>Login</Text>
          </Button>
          <Button>
            <Text>Cadastrar</Text>
          </Button>
        </Content>
      </Container>
    )
  }
}


const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2B2D5C',
  },
  vamojuntoInitStyle: {
    flex: 1,
    width: Dimensions.get('window').width,
  }
})

export default connect(null, { singIn })(LoginForm)