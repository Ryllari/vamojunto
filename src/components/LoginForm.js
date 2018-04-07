import React, { Component } from 'react'
import { Text } from 'react-native'
import { connect } from 'react-redux'

import { singIn } from '../actions'
import { Button, Card, CardSection, Input, Spinner } from './common'


class LoginForm extends Component {

  constructor(props) {

    super(props);

    this.state = {
      email: '',
      password: '',
      error: '',
      loading: false
    }
  }

  onButtonPress() {
    const { email, password } = this.state

    this.props.singIn(email, password)
  }

  renderButton() {
    console.log("STATE:", this.state)

    if (this.state.loading) {
      return <Spinner size="small" />
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
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
          {this.renderButton()}
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