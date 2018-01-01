import React, {Component} from 'react';
import {AppRegistry, View, Text} from 'react-native';

import Component6 from './app/components/Component6/component6';

export default class rnapp extends Component {

    render() {

        return(
            <View>
                <Component6/>
            </View>
        );
    }
}

AppRegistry.registerComponent('rnapp', () => rnapp);