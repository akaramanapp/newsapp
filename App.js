import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button, Title } from 'native-base';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { dataSource: [] }
  }

  componentDidMount = () => {
    fetch('http://localhost:3000/news', {
      method: 'GET'
    })
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          dataSource: responseJson
        })
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <Container>
        <Header>
          <Title>Haberler</Title>
        </Header>
        <Content>
          <List
            dataArray={this.state.dataSource}
            renderRow={(item) => {
              return (
                <ListItem thumbnail>
                <Left>
                  <Thumbnail square source={{ uri: item.Files[0].FileUrl }} />
                </Left>
                <Body>
                  <Text>{item.Title}</Text>
                  <Text note numberOfLines={1}>{item.CreatedDate.substring(0,10)}</Text>
                </Body>
                <Right>
                  <Button transparent>
                    <Text>Detay</Text>
                  </Button>
                </Right>
              </ListItem>
              )
            }}
          >
          </List>
        </Content>
      </Container>
    );
  }
}
