import React, {Component} from 'react';
import {AppRegistry, View, Text} from 'react-native';

export default class Component1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name: 'Joey2',
          showName: true,
          message: this.props.message
        }
      }

    static defaultProps = {
        message: 'Hi There'
    } 


    render() {
        let name = this.state.showName ? this.state.name : 'No Name';
        console.log('HELLO')
    return(
      <View>
      <Text>{this.state.message}</Text>
      <Text>{name}</Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('Component1', () => Component1);