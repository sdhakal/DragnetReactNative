import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, TextInput, View, Button} from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class SendRecommendationComponent extends Component{
  static navigationOptions = {
    title: 'John Doe (Recommender)',
  };
    render(){
      const { navigate } = this.props.navigation;
        return(
          <View style={styles.container}>
          <View style={styles.sendRecommendationContainer}>
          <TextInput
            style={{height: 50}}
            placeholder="Type"
            onChangeText={(text) => this.setState({text})}
          />
          <Button
          onPress={() => navigate('RatingBoxScreen')}
          title="Send"
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
    padding: 10,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  sendRecommendationContainer: {
    backgroundColor: '#D6DBDF',
    borderRadius: 10,
    width: 350,
    padding: 15
  }
});

AppRegistry.registerComponent('SendRecommendationComponent', () => SendRecommendationComponent);
