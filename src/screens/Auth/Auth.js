import React, { Component, PropTypes } from 'react';
import { View, Text, Image, StyleSheet, Alert, Animated ,TextInput,  ScrollView } from 'react-native';

import startMainTabs from '../MainTabs/startMainTabs';
 
import Icon from 'react-native-vector-icons/FontAwesome';
import Container from '../../components/Container';
import Button from '../../components/Button';
import Label from '../../components/Label';

import {FBLogin, FBLoginManager} from 'react-native-facebook-login';

import FBLoginView from '../../components/FbLogin/FbLoginView';


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

        // console.log(this.state);
    }



    loginHandler = (state) => {

        if(this.state.username == 'demo' && this.state.password == 'demo123')
        {
            startMainTabs();
        }else{
            Alert.alert('Please Check The Details.');
        }

        //console.log(this.state);

        // const user_data= {
        //     username: this.state.username,
        //     password: this.state.password
        // }

        // fetch('https://myproject-1526538296969.firebaseio.com/userdata.json', {
        //     method: 'POST',
        //     headers: {
        //         Accept: 'application/json',
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(user_data),
        //     }).then((response) => response.json())
        //     .then((responseJson) => {
        //         console.log(responseJson);
        //     })
        //     .catch((error) => {
        //         console.error(error);
        // });
        
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
                {/* <Button styles={{button: styles.transparentButton}} >
                    <View style={styles.inline}>
                        <Icon name="facebook-official" size={30} color="#3B5699" />
                        <Text style={[styles.buttonBlueText, styles.buttonBigText]}>  Connect </Text> 
                        <Text style={styles.buttonBlueText}>with Facebook</Text>
                    </View>
                </Button> */}

                <View style={styles.loginContainer}>

                    

                    <FBLogin style={{ marginBottom: 10, }}
                    permissions={["email","user_friends"]}
                    onLogin={function(data){
                        console.log("Logged in!");
                        console.log(data);
                        // _this.setState({ user : data.credentials });
                    }}
                    onLogout={function(){
                        console.log("Logged out.");
                       // _this.setState({ user : null });
                    }}
                    onLoginFound={function(data){
                        console.log("Existing login found.");
                        console.log(data);
                        // _this.setState({ user : data.credentials });
                    }}
                    onLoginNotFound={function(){
                        console.log("No user logged in.");
                        //_this.setState({ user : null });
                    }}
                    onError={function(data){
                        console.log("ERROR");
                        console.log(data);
                    }}
                    onCancel={function(){
                        console.log("User cancelled.");
                    }}
                    onPermissionsMissing={function(data){
                        console.log("Check permissions!");
                        console.log(data);
                    }}
                    />

                    {/* <Text>{ user ? user.token : "N/A" }</Text> */}
                </View>
            </Container>


            <View style={styles.footer}>
                <Container>
                    <Button 
                        label="Sign In"
                        styles={{button: styles.primaryButton, label: styles.buttonWhiteText}} 
                        //onPress={this.loginHandler} 
                        //onPressAction={this.loginHandler.bind(this)}
                        // onPress={this.loginHandler.bind(this)}
                        onPress={(event) => this.loginHandler( event.nativeEvent.text )}
                        />
                </Container>
                <Container>
                    <Button 
                        label="Sign Up"
                        styles={{label: styles.buttonBlackText}} 
                        //onPress={this.SignupHandler.bind(this)}
                         
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
       marginTop: 40
    }
});