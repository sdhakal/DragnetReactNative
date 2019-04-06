import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, TextInput, View, Button} from 'react-native';
import { StackNavigator } from 'react-navigation';
import PopupDialog, { DialogTitle} from 'react-native-popup-dialog';
export default class RecommenderAlertComponent extends Component{
  static navigationOptions = {
    title: 'John Doe (Recommender)',
  };
    render(){
      const { navigate } = this.props.navigation;
        return(
          <View style={styles.container}>
          <Button style={styles.button}
            title="Notifications"
            onPress={() => {
              this.popupDialog.show();
            }}
  />
  <View >
  <PopupDialog height={130}
  width={330}
  dialogTitle={<DialogTitle title="Notifications" />}
    ref={(popupDialog) => { this.popupDialog = popupDialog; }}
  >
      <Text style={styles.dialogText}>Aayur Thapa is looking for best indian food.</Text>
<View style={styles.buttons}>
      <Button style={styles.button1}
        title="Deny"
        onPress={() => {
        }}
/>
<Button style={styles.button2}
  title="Accept"
    onPress={() => navigate('SendRecommendationScreen')}

/>
    </View>
  </PopupDialog>
  </View>
</View>
        );
    }
}
const styles = StyleSheet.create({
  button: {
    textAlign: 'center',
    paddingLeft: 25,
    paddingRight: 25,
    },
  button1: {
    textAlign: 'center'
    },
    button2: {
      textAlign: 'center'
      },
  buttons: {
    paddingTop: 15,
    paddingLeft: 25,
    paddingRight: 25,
    paddingBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    },
  dialogText: {
    textAlign: 'center'
  },
  popupdialog: {
    borderRadius: 20,
    paddingLeft: 10,
    paddingRight: 10
    }
});

AppRegistry.registerComponent('RecommenderAlertComponent', () => RecommenderAlertComponent);
