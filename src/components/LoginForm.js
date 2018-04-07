import React, { Component } from 'react'
import { Text } from 'react-native'
import { connect } from 'react-redux'

import { singIn } from '../actions'
import { Button, Card, CardSection, Input, Spinner } from './common'


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
    return (
      <Card>
        <CardSection>
          <Input
            placeholder="user@gmail.com"
            label="Email"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            placeholder="password"
            label="Password"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>

        <CardSection>
          {this.renderSingInButton()}
        </CardSection>

        <CardSection>
          <Button onPress={this.onSingUpPress.bind(this)}>
            Cadastrar
          </Button>
        </CardSection>
      </Card>
    )
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
}

export default connect(null, { singIn })(LoginForm)