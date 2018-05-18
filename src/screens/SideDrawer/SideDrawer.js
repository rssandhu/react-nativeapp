import React, { Component } from "react";
import { View, Text, Dimensions, StyleSheet,TouchableOpacity } from "react-native";

import { Navigation } from "react-native-navigation";

class SideDrawer extends Component {

  logouthandler = () =>{
    Navigation.startSingleScreenApp({
      screen: {
        screen: "awesome-places.AuthScreen",
        title: "Login"
      }
    });
  }


  render() {
    return (
      <View
        style={[
          styles.container,
          { width: Dimensions.get("window").width * 0.8 }
        ]}
      >
         <Text style={styles.menu}
              onPress={this.logouthandler}>
          Logout
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 22,
    backgroundColor: "white",
    flex: 1
  },
  menu:{
    
    flexDirection: 'row',
    fontSize: 20,
    color: '#595856',
    justifyContent: 'center', 
    alignItems: 'center' 
  } 
});

export default SideDrawer;
