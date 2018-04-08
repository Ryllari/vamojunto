import React, { Component } from 'react'
import { Image } from 'react-native'
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Icon, Text } from 'native-base'


const manImg = require('../statics/img/man.png')
const girl1Img = require('../statics/img/girl1.png')
const girl2Img = require('../statics/img/girl2.png')
const star = require('../statics/img/star.png')

export default class ListAvatarExample extends Component {
  render() {
    const {
      textGuardsStyle,
      textInviteStyle,
      iconWhatsappStyle,
      iconFacebookStyle,
      imgStarStyle
    } = styles

    return (
      <Container>
        <Content>
          <Text style={textGuardsStyle}>Meus guardiões</Text>
          <Text style={textInviteStyle}>Convidar através <Icon style={iconWhatsappStyle} name="logo-whatsapp" /> <Icon style={iconFacebookStyle} name="logo-facebook" /></Text>
          <List>
            <ListItem avatar>
              <Left>
                <Thumbnail source={manImg} />
              </Left>
              <Body>
                <Text>Alisson Soares</Text>
                <Text note>Estou disponível ...</Text>
              </Body>
              <Right>
                <Text note>4.8 <Image style={imgStarStyle} source={star} /></Text>
              </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail source={girl1Img} />
              </Left>
              <Body>
                <Text>Brenda Câmara</Text>
                <Text note>Estou disponível ...</Text>
              </Body>
              <Right>
                <Text note>3.7 <Image style={imgStarStyle} source={star} /></Text>
              </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail source={girl2Img} />
              </Left>
              <Body>
                <Text>Gleydeanne Lucena</Text>
                <Text note>Estou disponível ...</Text>
              </Body>
              <Right>
                <Text note>3.9 <Image style={imgStarStyle} source={star} /></Text>
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    )
  }
}

const styles = {
  textGuardsStyle: {
    alignSelf: 'center',
    color: '#2B2D5C',
    flex: 1,
    fontSize: 24
  },
  textInviteStyle: {
    alignSelf: 'center',
    color: '#555',
    flex: 1
  },
  iconWhatsappStyle: {
    color: '#25D366'
  },
  iconFacebookStyle: {
    color: '#3b5998'
  },
  imgStarStyle: {
    height: 25,
    width: 25
  }
}