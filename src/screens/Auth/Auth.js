import React, { Component, PropTypes } from 'react';
import { View, Text, Image, StyleSheet, Alert, Animated ,TextInput,  ScrollView } from 'react-native';

import startMainTabs from '../MainTabs/startMainTabs';
 
import Icon from 'react-native-vector-icons/FontAwesome';
import Container from '../../components/Container';
import Button from '../../components/Button';
import Label from '../../components/Label';


export default class Login extends Component {

    constructor(props) {
        super(props);
      
    //    this.handlers = createHandlers(this.props.dispatch);
    }

    state = {
        username:'',
        password:''     
     };

    handleChangeInput(stateName, text) {   
        this.setState({
            [stateName]: text
        })

        console.log(this.state);
    }



    loginHandler = (state) => {

        if(this.state.username == 'demo' && this.state.password == 'demo123')
        {
            startMainTabs();
        }else{
            Alert.alert('Please Check The Details.');
        }
        
    }
  render() {
    return (
        <ScrollView style={styles.scroll}>
        
            <Container>
                <Label text="Username or Email" />
                <TextInput
                    style={styles.textInput}
                    value={this.state.username}
                    // onChange={this.handleChangeInput.bind(this, 'username')}
                    onChange={(event) => this.handleChangeInput('username' , event.nativeEvent.text )}
                />
            </Container>
            <Container>
                <Label text="Password" />
                <TextInput
                    secureTextEntry={true}
                    style={styles.textInput}
                    value={this.state.password}
                    // onChange={this.handleChangeInput.bind(this, 'password')}
                    onChange={(event) => this.handleChangeInput('password' , event.nativeEvent.text )}
                />
            </Container>
            <Container>
                <Button styles={{button: styles.transparentButton}} >
                    <View style={styles.inline}>
                        <Icon name="facebook-official" size={30} color="#3B5699" />
                        <Text style={[styles.buttonBlueText, styles.buttonBigText]}>  Connect </Text> 
                        <Text style={styles.buttonBlueText}>with Facebook</Text>
                    </View>
                </Button>
            </Container>


            <View style={styles.footer}>
                <Container>
                    <Button 
                        label="Sign In"
                        styles={{button: styles.primaryButton, label: styles.buttonWhiteText}} 
                        //onPress={this.loginHandler} 
                        //onPressAction={this.loginHandler.bind(this)}
                        onPress={this.loginHandler.bind(this)}
                        />
                </Container>
                <Container>
                    <Button 
                        label="CANCEL"
                        styles={{label: styles.buttonBlackText}} 
                         
                         />
                </Container>
            </View>

        </ScrollView>
    );
  }
}




const styles = StyleSheet.create({
    scroll: {
        backgroundColor: '#E1D7D8',
        padding: 30,
        flexDirection: 'column'
    },
    label: {
        color: '#0d8898',
        fontSize: 20
    },
    alignRight: {
        alignSelf: 'flex-end'
    },
    transparentButton: {
    marginTop: 30,
    borderColor: '#3B5699',
    borderWidth: 2
    },
    buttonBlueText: {
        fontSize: 20,
        color: '#3B5699'
    },
    buttonBigText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    inline: {
        flexDirection: 'row'
    },
    buttonWhiteText: {
    fontSize: 20,
    color: '#FFF',
    },
    buttonBlackText: {
        fontSize: 20,
        color: '#595856'
    },
    primaryButton: {
        backgroundColor: '#34A853'
    },
    footer: {
       marginTop: 100
    }
});