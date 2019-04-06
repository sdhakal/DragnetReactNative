import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, TextInput, View, Button, Easing} from 'react-native';
import { StackNavigator } from 'react-navigation';
import StarRating from 'react-native-star-rating';
export default class RatingInfoComponent extends Component{
  static navigationOptions = {
    title: 'Rating Information',
  };

  constructor(props) {
      super(props);
      this.state = {
        starCount: 3.5,
        starCount1: 4,
        starCount2: 2
      };
    }

    onStarRatingPress(rating) {
      this.setState({
        starCount: rating
      });
    }
    onStarRatingPress1(rating) {
      this.setState({
        starCount1: rating
      });
    }
    onStarRatingPress2(rating) {
      this.setState({
        starCount2: rating
      });
    }
    render(){
      const { navigate } = this.props.navigation;
        return(
          <View style={styles.container}>
          <View style={styles.ratingscontainer}>
          <Text>John Doe</Text>
          <StarRating
            disabled={false}
            maxStars={5}
            rating={this.state.starCount}
            selectedStar={(rating) => this.onStarRatingPress(rating)}
          />
          <Text>Howard Alpha</Text>
          <StarRating
            disabled={false}
            maxStars={5}
            rating={this.state.starCount1}
            selectedStar={(rating) => this.onStarRatingPress1(rating)}
          />
          <Text>Ben Johnson</Text>
          <StarRating
            disabled={false}
            maxStars={5}
            rating={this.state.starCount2}
            selectedStar={(rating) => this.onStarRatingPress2(rating)}
          />
</View>
          </View>
        );
    }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  ratingsContainer: {
    backgroundColor: 'red',
    borderRadius: 10,
    width: 350
  },
});

AppRegistry.registerComponent('RatingInfoComponent', () => RatingInfoComponent);
