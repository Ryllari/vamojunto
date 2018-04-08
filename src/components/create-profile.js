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
  Text,
  Title
} from 'native-base'
import { connect } from 'react-redux'
import { singUp } from '../actions'


class CreateProfile extends Component {

  constructor(props) {
    super(props)

    this.state = {
      name: '',
      email: '',
      password: ''
    }
  }

  onSingUpPress() {
    this.setState({
      stars: 5,
      photoURL: null
    })

    this.props.singUp(this.state)
  }

  render() {
    return (
      <Container style={{flex: 1, marginTop: 30}}>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label style={{color: '#fff'}}>Name</Label>
              <Input
                style={{color: '#ccc', left: 10}}
                value={this.state.name}
                onChangeText={name => this.setState({ name })}
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
          <Button warning style={{alignSelf:'center'}} onPress={this.onSingUpPress.bind(this)}>
            <Text>Registrar</Text>
          </Button>
        </Content>
      </Container>
    )
  }
}

export default connect(null, { singUp })(CreateProfile)