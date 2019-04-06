import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, TextInput, View, Button, TouchableOpacity} from 'react-native';
import MapView from 'react-native-maps';
let id = 0;
function randomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export default class MapComponent extends Component{
  static navigationOptions = {
    title: 'Map here',
  };
  constructor(props) {
      super(props);
      this.state = {
        region: {
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        },
        markers: [],
      };
    }
    onRegionChange(region) {
      this.setState({ region });
    }
    onMapPress(e) {
    this.setState({
      markers: [
        ...this.state.markers,
        {
          coordinate: e.nativeEvent.coordinate,
          key: id++,
          color: randomColor(),
        },
      ],
    });
  }
    render(){
      const { navigate } = this.props.navigation;
        return(
          <View style ={styles.container1}>
        <MapView
          style={styles.map}
          region={this.state.region}
          onRegionChange={(region) => this.onRegionChange(region)}
          onPress={(e) => this.onMapPress(e)}
        >
        {this.state.markers.map(marker => (
          <MapView.Marker
              key={marker.key}
              coordinate={marker.coordinate}
              pinColor={marker.color}
              />
            ))}
        </MapView>
        <TouchableOpacity activeOpacity={.5} onPress={() => navigate('SearchScreen')}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Search Location and Food</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={.5} onPress={() => navigate('GeoLocationScreen')}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Get Current Location</Text>
          </View>
        </TouchableOpacity>
      </View>
        );
    }
}

const styles = StyleSheet.create({
  container1: {
    position: 'absolute',
    padding: 10,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'space-between'
    },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  signupLinkText: {
    color: "#FFF",
    marginLeft: 5,
  },
  button: {
    backgroundColor: "#1F5FC4",
    paddingVertical: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 15,
    marginBottom: 10
    },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
  }
});
AppRegistry.registerComponent('MapComponent', () => MapComponent);
