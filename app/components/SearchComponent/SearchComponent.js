import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, Button} from 'react-native';
import { StackNavigator } from 'react-navigation';
import CheckBox from 'react-native-checkbox';
import { SearchBar } from 'react-native-elements'
export default class SearchComponent extends Component{
  static navigationOptions = {
    title: 'Search Location and Foods',
  };
    render(){
      const { navigate } = this.props.navigation;
        return(
          <View style={styles.container}>
              <Text style={styles.textAayur}>AAYUR</Text>
              <View style={styles.locationContainer}>
                <SearchBar style={styles.button}
                  placeholder='Select your location' />
                <Button style={styles.button}
                  onPress={() => navigate('MapScreen')}
                  title="Search"/>
              </View>
              <View style={styles.locationContainer}>
                <SearchBar style={styles.button}
                  placeholder='Select your favourite food type' />
                <Button
                  onPress={() => navigate('MapScreen')}
                  title="Select"
                  style={styles.button}/>
              </View>
              <CheckBox
                label='Send Request'
                onChange={(checked) => console.log('I am checked', checked)}/>
              <Button
                onPress={() => navigate('RecommenderAlertScreen')}
                title="Go to Recommender page"
                style={styles.button}/>
          </View>
        );
    }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#F5FCFF',
  },
  locationContainer: {
    flexDirection: 'column',
    width: 350
    },
  button: {
    textAlign: 'center',
    padding: 10
  },
  textAayur: {
    fontSize: 20,
    textAlign: 'center',
  },
  searchContainer: {
    justifyContent: 'space-between',
    borderRadius: 10,
    width: 350

  }
});

AppRegistry.registerComponent('SearchComponent', () => SearchComponent);
