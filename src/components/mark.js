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
  List,
  ListItem,
  Radio,
  Right,
  Text,
  Title,
  View
} from 'native-base'


const persons = require('../statics/img/persons.png')

class Mark extends Component {

  constructor(props) {
    super(props)

    this.state = {
      meeting_point: '',
      transport: 'car'
    }

    this.selecteTransport = this.selecteTransport.bind(this)
  }

  selecteTransport(select) {
    this.setState({ transport: select })
  }

  render() {
    const {
      personsStyle,
      buttonStyle,
      buttonMarkStyle
    } = styles

    return (
      <Content style={{alignSelf: 'center', }}>
        <Image style={personsStyle} source={persons} />
        <Form>
          <Item floatingLabel>
            <Label>Ponto de Encontro</Label>
            <Input
              value={this.state.meeting_point}
              onChangeText={meeting_point => this.setState({ meeting_point })}
            />
          </Item>
          <Item floatingLabel last>
            <Label>Destino</Label>
            <Input
              value={this.state.destiny}
              onChangeText={destiny => this.setState({ destiny })}
            />
          </Item>
          <Text>Vamo Junto de:</Text>
          <ListItem>
            <Left>
              <Icon name="body" />
            </Left>
            <Text>A Pé</Text>
            <Right>
              <Radio
                onPress={() => this.selecteTransport("foot")}
                selected={this.state.transport == "foot" ? true : false}
              />
            </Right>
          </ListItem>
          <ListItem>
            <Left>
              <Icon name="bicycle" />
            </Left>
            <Text>Bicicleta</Text>
            <Right>
              <Radio
                onPress={() => this.selecteTransport("bike")}
                selected={this.state.transport == "bike" ? true : false}
              />
            </Right>
          </ListItem>
          <ListItem>
            <Left>
              <Icon name="speedometer" />
            </Left>
            <Text>Carro</Text>
            <Right>
              <Radio
                onPress={() => this.selecteTransport("car")}
                selected={this.state.transport == "car" ? true : false}
              />
            </Right>
          </ListItem>
          <ListItem>
            <Left>
              <Icon name="train" />
            </Left>
            <Text>Ônibus</Text>
            <Right>
              <Radio
                onPress={() => this.selecteTransport("bus")}
                selected={this.state.transport == "bus" ? true : false}
              />
            </Right>
          </ListItem>
          <Button style={buttonMarkStyle}>
            <Text>Marcar</Text>
          </Button>
        </Form>
      </Content>
    )
  }
}

const styles = {
  buttonStyle: {
    alignSelf: 'center'
  },
  personsStyle: {
    backgroundColor: '#FFF',
    flex: 1,
    resizeMode: 'contain',
    width: Dimensions.get('window').width
  },
  buttonMarkStyle: {
    flex: 1,
    alignSelf: 'center'
  }
}

export default Mark