import React, { Component } from 'react'
import { 
  Dimensions,
  Image,
  Modal,
  PermissionsAndroid,
  TextInput
} from 'react-native'

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
  View,
  Textarea,
} from 'native-base'
import MapView, { Marker } from 'react-native-maps'


const persons = require('../statics/img/map.png')
const person = require('../statics/img/rafaela.png')
const star = require('../statics/img/star.png')
const flagBlue = require('../statics/img/flag-blue.png')

class Mark extends Component {

  constructor(props) {
    super(props)

    this.state = {
      meeting_point: '',
      modalVisible: false,
      region: {
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      },
      transport: 'car'
    }

    this.selecteTransport = this.selecteTransport.bind(this)
    this.onRegionChange = this.onRegionChange.bind(this)
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
      this.setState({
        region: {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }
      })
    })
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible })
  }

  selecteTransport(select) {
    this.setState({ transport: select })
  }

  onRegionChange(region) {
    this.setState({ region })
  }

  render() {
    const { latitude, longitude } = this.state.region

    const {
      personsStyle,
      buttonStyle,
      buttonMarkStyle
    } = styles

    return (
      <Content style={{ flex: 1, flexDirection: 'column' }}>
        <MapView
          style={{ width: Dimensions.get('window').width, height: 300 }}
          region={this.state.region} >
          <Marker
            coordinate={{ latitude: latitude, longitude: longitude }}
            image={flagBlue}
          />
        </MapView>
        <Form style={{backgroundColor: '#2B2D5C'}}>
          <Item floatingLabel>
            <Label style={{color:'#FFF'}}>Ponto de Encontro</Label>
            <Input
              value={this.state.meeting_point}
              onChangeText={meeting_point => this.setState({ meeting_point })}
            />
          </Item>
          <Item floatingLabel last>
            <Label style={{color:'#FFF'}} >Destino</Label>
            <Input
              value={this.state.destiny}
              onChangeText={destiny => this.setState({ destiny })}
            />
          </Item>
          <Text style={{marginTop: 20, color:'#FFF'}} >Vamo Junto de:</Text>
          <ListItem>
            <Left>
              <Icon style={{color:'#FFF'}} name="body" />
            </Left>
            <Text style={{color:'#FFF'}}>A Pé</Text>
            <Right>
              <Radio
                style={{color:'#FFF'}}
                onPress={() => this.selecteTransport("foot")}
                selected={this.state.transport == "foot" ? true : false}
              />
            </Right>
          </ListItem>
          <ListItem>
            <Left>
              <Icon style={{color:'#FFF'}} name="bicycle" />
            </Left>
            <Text style={{color:'#FFF'}}>Bicicleta</Text>
            <Right>
              <Radio
                style={{color:'#FFF'}}
                onPress={() => this.selecteTransport("bike")}
                selected={this.state.transport == "bike" ? true : false}
              />
            </Right>
          </ListItem>
          <ListItem>
            <Left>
              <Icon style={{color:'#FFF'}} name="speedometer" />
            </Left>
            <Text style={{color:'#FFF'}}>Carro</Text>
            <Right>
              <Radio
                style={{color:'#FFF'}}
                onPress={() => this.selecteTransport("car")}
                selected={this.state.transport == "car" ? true : false}
              />
            </Right>
          </ListItem>
          <ListItem>
            <Left>
              <Icon style={{color:'#FFF'}} name="train" />
            </Left>
            <Text style={{color:'#FFF'}}>Ônibus</Text>
            <Right>
              <Radio
                style={{color:'#FFF'}}
                onPress={() => this.selecteTransport("bus")}
                selected={this.state.transport == "bus" ? true : false}
              />
            </Right>
          </ListItem>
        </Form>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            alert('Modal has been closed.')
          }}>
          <View style={{ flex: 1, marginTop: 100, color:'#2B2D5C', alignSelf: 'center'}}>
            <View>
              <Image style={{alignSelf: 'center', color:'#2B2D5C'}} source={person} />
              <Text style={{alignSelf: 'center', color:'#2B2D5C'}} >Gleydeanne Lucena</Text>
              <Text style={{alignSelf: 'center', color:'#2B2D5C'}} >3,9 <Image source={star} /></Text>
              <Item floatingLabel regular last style={{height:40, marginTop: 20, color:'#FFF'}}>
                <Label>Escreva uma mensagem...</Label>
                <TextInput style={{height:40, marginTop: 20}}/>
              </Item>
              <Button warning large style={{alignSelf:'center', marginTop:20}} onPress={() => {this.setModalVisible(!this.state.modalVisible)}}>
                <Text>Vamo Junto?</Text>
              </Button>
            </View>
          </View>
        </Modal>
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
    marginVertical: -25,
    resizeMode: 'contain',
    width: Dimensions.get('window').width
  },
  buttonMarkStyle: {
    flex: 1,
    alignSelf: 'center'
  }
}

export default Mark