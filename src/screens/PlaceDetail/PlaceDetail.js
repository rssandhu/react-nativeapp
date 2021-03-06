import React, { Component } from "react";
import {
  View,
  Image,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import { connect } from "react-redux";

import Icon from "react-native-vector-icons/Ionicons";
import { deletePlace } from "../../store/actions/index";

import ImagePicker from "react-native-image-picker";

class PlaceDetail extends Component {
  placeDeletedHandler = () => {
    this.props.onDeletePlace(this.props.selectedPlace.key);
    this.props.navigator.pop();
  }

  state = {
    image:{
        uri : "https://www.mountaineers.org/activities/routes-and-places/default-route-place/activities-and-routes-places-default-image/image"
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
                image:{uri : res.uri}
            });

            console.log(this.state.image);
        }
    });
}

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Image source={this.state.image} style={styles.placeImage} />
          <Text style={styles.placeName}>{this.props.selectedPlace.name}</Text>
        </View>
        <View>
               <Button title="Pick Image"  onPress={this.PickImageHandler}/>
        </View>     
        <View>
          <TouchableOpacity onPress={this.placeDeletedHandler}>
            <View style={styles.deleteButton}>
              <Icon size={30} name="ios-trash" color="red" />
            </View>
          </TouchableOpacity>
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
    height: 400
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

const mapDispatchToProps = dispatch => {
  return {
    onDeletePlace: key => dispatch(deletePlace(key))
  };
};

export default connect(null, mapDispatchToProps)(PlaceDetail);
