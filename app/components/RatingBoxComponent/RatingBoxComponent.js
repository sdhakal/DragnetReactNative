import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, TextInput, View, Button} from 'react-native';
import { StackNavigator } from 'react-navigation';
import RadioButton from 'radio-button-react-native';
export default class RatingBoxComponent extends Component{
  constructor (props){
    super(props)
      this.state = {
            value: 0
        }

}


handleOnPress(value){
    this.setState({value:value})
}
  static navigationOptions = {
    title: 'Rating Box',
  };
    render(){
      const { navigate } = this.props.navigation;
        return(
          <View>
          <RadioButton currentValue={this.state.value} value={0} onPress={this.handleOnPress.bind(this)}>
                          <Text>John Doe</Text>
                           </RadioButton>

                           <RadioButton currentValue={this.state.value} value={1} onPress={this.handleOnPress.bind(this)}>
                           <Text>Howard Alpha</Text>
                           </RadioButton>

                           <RadioButton currentValue={this.state.value} value={2} onPress={this.handleOnPress.bind(this)}>
                           <Text>Ben Johnson</Text>
                           </RadioButton>
                           <Button
                           onPress={() => navigate('RatingInfoScreen')}
                           title="Go to Info Screen"
                           style={styles.button}
                           />
          </View>
        );
    }
}
const styles = StyleSheet.create({
  button: {
    textAlign: 'center',
    padding: 10,
  }
});

AppRegistry.registerComponent('RatingBoxComponent', () => RatingBoxComponent);
