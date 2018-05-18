import React, { Component } from 'react';
import { AppRegistry, Text, View, Image } from 'react-native';

export default class Component1 extends Component {
    render() {
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };
        return (
            <View>
                <Text>welcome to component1</Text>

                <Image source={pic} style={{ width: 293, height: 210 }} />
            </View>
        );
    }
}



  // AppRegistry.registerComponent('Component1', () => Component1);