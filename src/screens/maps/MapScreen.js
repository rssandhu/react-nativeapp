import React, { Component } from 'react';
// import { View, Text } from 'react-native';
import startMainTabs from '../MainTabs/startMainTabs';
 import { StyleSheet, View, Text  , Dimensions , Alert,Button} from "react-native";
 import MapView from 'react-native-maps';
// import Button from '../../components/Button';


 //import PlaceInput from '../../components/PlaceInput/PlaceInput';
export default class MapScreen extends Component {
    constructor(props) {
        super(props);
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
    }

    state = {
        focusedLocation:{
            latitude:37.7900352,
            longitude : -122.4013726,
            latitudeDelta : 0.0122,
            longitudeDelta : Dimensions.get("window").width/Dimensions.get("window").height * 0.0122 
        },
        locationChosen : false
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

    pickLocationHandler = event =>{   

            // Alert.alert('clicked');

        const coords = event.nativeEvent.coordinate;
        this.map.animateToRegion({
            ...this.state.focusedLocation,
            latitude:coords.latitude,
            longitude:coords.longitude
        });
        this.setState(prevState =>{
            return {
                focusedLocation:{
                    ...prevState.focusedLocation,
                    latitude:coords.latitude,
                    longitude: coords.longitude
                },
                locationChosen: true
            }

        });
    } 

    getLocationHandler = ()=>{
        navigator.geolocation.getCurrentPosition(pos=>{
            const coordsEvet={
                nativeEvent:{
                    coordinate:{
                        latitude:pos.coords.latitude,
                        longitude:pos.coords.longitude
                    }
                }
            };
            this.pickLocationHandler(coordsEvet);
        }),err=>{
            console.log('Postion fetch faild');
            alert('Postion fetch faild');
        }
    }
   

    render () {

        let marker = null;

        if(this.state.locationChosen){
            marker = <MapView.Marker coordinate = {this.state.focusedLocation} />
        }

        return (
            <View>
               <MapView
                initialRegion={this.state.focusedLocation}
                //region ={this.state.focusedLocation}
                style = {styles.map}
                onPress={this.pickLocationHandler}
                ref={ref => this.map = ref}
                >
                {marker}
                </MapView> 
                <View>
                    <Button title="Locate me"  onPress={this.getLocationHandler}/>
                </View>     
            </View>
           
        );
    }
}



const styles = StyleSheet.create({
    map: {
    width:"100%",
    height:500
    }
});