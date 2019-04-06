/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet
} from 'react-native';
import TextInputComponent from './app/components/TextInputComponent/TextInputComponent';
import MapComponent from './app/components/MapComponent/MapComponent';
import SearchComponent from './app/components/SearchComponent/SearchComponent';
import RecommenderAlertComponent from './app/components/RecommenderAlertComponent/RecommenderAlertComponent';
import SendRecommendationComponent from './app/components/SendRecommendationComponent/SendRecommendationComponent';
import RatingBoxComponent from './app/components/RatingBoxComponent/RatingBoxComponent';
import RatingInfoComponent from './app/components/RatingInfoComponent/RatingInfoComponent';
import GeoLocation from './app/components/GeoLocation/GeoLocation';
import SignUpComponent from './app/components/SignUpComponent/SignUpComponent';

import { StackNavigator } from 'react-navigation';


export default class App extends Component<{}> {
  render(){
    return(
      <SimpleApp />
    );
  }
}
export const SimpleApp = StackNavigator({
  SignInScreen: { screen: TextInputComponent },
  MapScreen: { screen: MapComponent },
  SearchScreen: { screen: SearchComponent },
  RecommenderAlertScreen: { screen: RecommenderAlertComponent },
  SendRecommendationScreen: { screen: SendRecommendationComponent },
  RatingBoxScreen: { screen: RatingBoxComponent },
  RatingInfoScreen: { screen: RatingInfoComponent },
  GeoLocationScreen: { screen: GeoLocation },
  SignUpScreen: { screen: SignUpComponent }
});
const styles = StyleSheet.create({

});
