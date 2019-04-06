import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, TextInput, View, Button, Dimensions} from 'react-native';
import MapView from 'react-native-maps';
import Polyline from '@mapbox/polyline';
const{width, height} = Dimensions.get('window')
const SCREEN_HEIGHT = height;
const SCREEN_WIDTH = width;
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
export default class GeoLocation extends Component{
  constructor(props){
    super(props)
    this.state={
      text: 'Current Location',
      initialPosition:{
        latitude: 0,
        longitude:0,
        latitudeDelta:LATITUDE_DELTA,
        longitudeDelta:LONGITUDE_DELTA
      },
      position1:{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
      position2:{
        latitude: 40.78825,
        longitude: -100.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
      markerPosition:{
        latitude:0,
        longitude:0
      },
      coords: []
    }
  }
  watchID: ?number = null
  componentDidMount(){
    navigator.geolocation.getCurrentPosition((position) => {
      var lat = parseFloat(position.coords.latitude)
      var lon = parseFloat(position.coords.longitude)
      var initialRegion={
        latitude:lat,
        longitude:lon,
        latitudeDelta:LATITUDE_DELTA,
        longitudeDelta:LONGITUDE_DELTA
      }
      this.setState({initialPosition: initialRegion})
      this.setState({markerPosition: initialRegion})
    },
    (error) => alert(JSON.stringify(error)),
    {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000})
    this.watchID = navigator.geolocation.watchPosition((position) => {
      var lat=parseFloat(position.coords.latitude)
      var lon=parseFloat(position.coords.longitude)
      var lastRegion={
        latitude:lat,
        longitude:lon,
        latitudeDelta:LATITUDE_DELTA,
        longitudeDelta:LONGITUDE_DELTA
      }
      this.setState({initialPosition: lastRegion})
      this.setState({markerPosition: lastRegion})
    })
    //this.getDirections(this.state.markerPosition, 'Los Angeles, CA')
  }
  componentWillUnmount(){
    navigator.geolocation.clearWatch(this.watchID)
  }
  static navigationOptions = {
    title: 'Current Location',
  };

  async getDirections(startLoc, destinationLoc) {
        try {
            let resp = await fetch(`https://maps.googleapis.com/maps/api/directions/json?origin=${ startLoc }&destination=${ destinationLoc }`)
            let respJson = await resp.json();
            let points = Polyline.decode(respJson.routes[0].overview_polyline.points);
            let coords = points.map((point, index) => {
                return  {
                    latitude : point[0],
                    longitude : point[1]
                }
            })
            this.setState({coords: coords})
            return coords
        } catch(error) {
            alert(error)
            return error
        }
    }
    render(){
      const { navigate } = this.props.navigation;
        return(
          <View style ={styles.container}>
          <MapView
          style={styles.map}
          region={this.state.initialPosition}>
            <MapView.Marker
              coordinate={this.state.markerPosition}>
            </MapView.Marker>
            <MapView.Polyline
            coordinates={this.state.coords}
            strokeWidth={2}
            strokeColor="red"/>
        </MapView>
        <View style={styles.directionsContainer}>
        <Text>Get Directions</Text>
          <TextInput value={this.state.text}
            placeholder="Start Address"
            onChangeText={(text) => this.setState({text})}
          />
          <Text>To</Text>
          <TextInput
            placeholder="Destination Address"
            onChangeText={(text) => this.setState({text})}
          />
          <Button
          onPress={() => navigate('MapScreen')}
          title="Go"
          style={styles.button}
          />
          </View>
      </View>
        );
    }
}
const styles = StyleSheet.create({
  button: {
    textAlign: 'center',
    borderRadius: 10
    },
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  directionsContainer: {
    backgroundColor: 'skyblue',
    borderRadius: 15,
    width: 350,
    padding: 25
  }
});
AppRegistry.registerComponent('GeoLocation', () => GeoLocation);
