import React, { Component } from 'react';
 import { StyleSheet, View, Text ,Image ,Button} from "react-native";

import ImagePicker from "react-native-image-picker";
 //import PlaceInput from '../../components/PlaceInput/PlaceInput';
export default class PickImage extends Component {
    constructor(props) {
        super(props);
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
    }

    state = {
        PickedImage:{
            uri : "https://i.stack.imgur.com/l60Hf.png"
        }
    }

     onNavigatorEvent = event => {
        if (event.type === "NavBarButtonPress") {
            if (event.id === "sideDrawerToggle") {
                this.props.navigator.toggleDrawer({
                    side: "left"
                });
            } 
        }  
    }

    PickImageHandler =() => {
        ImagePicker.showImagePicker({title:'Pick an Image'},res => {
            if(res.didCancel){
                console.log("User Canceled");
            }else if(res.error){
                console.log("Error",res.error);
            }else{
                this.setState({
                    PickedImage:{uri : res.uri}
                });

                console.log(this.state.PickedImage);
            }
        });
    }

   

    render () {
        return (
            <View>
                <View>
                    <Image source={this.state.PickedImage} style={styles.placeImage} />
                </View>
                <View>
                    <Button title="Pick Image"  onPress={this.PickImageHandler}/>
                </View>     
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      margin: 22
    },
    placeImage: {
      width: "100%",
      height: 500
    },
    placeName: {
      fontWeight: "bold",
      textAlign: "center",
      fontSize: 28
    },
    deleteButton: {
      alignItems: "center"
    }
  });