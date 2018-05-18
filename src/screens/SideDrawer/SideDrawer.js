import React, { Component } from "react";
import { View, Text, Dimensions, StyleSheet,Button } from "react-native";


class SideDrawer extends Component {

  logouthandler = () =>{
    
  }


  render() {
    return (
      <View
        style={[
          styles.container,
          { width: Dimensions.get("window").width * 0.8 }
        ]}
      >
       {/* <Icon name="md-menu" size={30} color="#3B5699" /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 22,
    backgroundColor: "white",
    flex: 1
  }
});

export default SideDrawer;
