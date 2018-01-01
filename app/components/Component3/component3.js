import React, {Component} from 'react';
import {AppRegistry, View, Text, TextInput, Switch} from 'react-native';

export default class Component3 extends Component {
    constructor() {
        super();
    
        this.state = {
          textValue: 'Yo Mama',
          switchValue: false
        }
      }
    
    onChangeText(value) {
        this.setState({
            textValue: value
        });
    }

    onSubmit() {
        console.log('Input Submitted ... ')
    }

    onSwitchChange(value) {
        this.setState({
            switchValue: value
        });
    }

  render() {

    return(
      <View>
        <TextInput 
            placeholder='Enter yo name!'
            value={this.state.textValue}
            onChangeText={value => this.onChangeText(value)}
            onSubmitEditing={this.onSubmit}
        >
        </TextInput>
        <Text>{this.state.textValue}</Text>
        <Switch
            value={this.state.switchValue}
            onValueChange={(value) => this.onSwitchChange(value)}
        />
      </View>
    );
  }
}

AppRegistry.registerComponent('Component3', () => Component3);