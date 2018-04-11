import React, { Component } from 'react'
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
  Spinner,
  Text,
  Title
} from 'native-base'
import { connect } from 'react-redux'
import { singUp, createUser } from '../actions'


class CreateUser extends Component {

  constructor(props) {
    super(props)

    this.state = {
      username: 'alissonrgs',
      email: 'alissonrgs@vamojunto.com',
      password: '123456',
      password_confirm: '',
      loading: false
    }
  }

  onSingUpPress() {
    const { username, email, password } = this.state
    const user = {
      email: email,
      password: password,
      username: username,
      stars: 5
    }

    this.setState({ loading: true })
    this.props.singUp(user, () => {
      this.setState({ loading: false })
    })
  }

  renderSingUpButton() {
    if (this.state.loading) {
      return <Spinner />
    }

    return (
      <Button
        warning
        style={{alignSelf: 'center'}}
        onPress={this.onSingUpPress.bind(this)}>
        <Text>Registrar</Text>
      </Button>
    )
  }

  render() {
    return (
      <Container style={{flex: 1, marginTop: 30}}>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label style={{color: '#fff'}}>Username</Label>
              <Input
                style={{color: '#ccc', left: 10}}
                value={this.state.username}
                onChangeText={username => this.setState({ username })}
              />
            </Item>
            <Item floatingLabel>
              <Label style={{color: '#fff'}}>Email</Label>
              <Input
                style={{color: '#ccc', left: 10}}
                value={this.state.email}
                onChangeText={email => this.setState({ email })}
              />
            </Item>
            <Item floatingLabel>
              <Label style={{color: '#fff'}}>Password</Label>
              <Input
                style={{color: '#ccc', left: 10}}
                secureTextEntry
                value={this.state.password}
                onChangeText={password => this.setState({ password })}
              />
            </Item>
          </Form>
          {this.renderSingUpButton()}
        </Content>
      </Container>
    )
  }
}

export default connect(null, { singUp, createUser })(CreateUser)