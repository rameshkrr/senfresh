import React from 'react';
import {
  Text,
  Button,
  Animated,
  Easing,
  Image,
  StyleSheet
} from "react-native";
import { StackNavigator, DrawerNavigator } from "react-navigation";
import { Ionicons, EvilIcons } from '@expo/vector-icons';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import HomePage from './src/Components/Home/HomePage';
import DrawerContainer from './src/Components/Navigations/DrawerContainer';
import { Icon } from 'react-native-elements'


const DrawerNavigation = DrawerNavigator({
  Home: {
    screen: HomePage,
    navigationOptions: {
      title: ""
    }
  },

}, {
    contentComponent: DrawerContainer
  });


const StackNavigation = StackNavigator({
  DrawerNavigation: { screen: DrawerNavigation }
}, {
    headerMode: 'float',
    navigationOptions: ({ navigation, screenProps }) => ({
      headerStyle: { backgroundColor: '#F7820D' },
      headerTintColor: 'white',
      headerLeft: drawerButton(navigation),
      headerRight: cartButton(navigation, screenProps)
    })
  });

const drawerButton = (navigation) => (
  <Text
    style={{ padding: 15, color: 'white' }}
    onPress={() => {
      if (navigation.state.index === 0) {
        navigation.navigate('DrawerOpen')
      } else {
        navigation.navigate('DrawerClose')
      }
    }
    }><Ionicons name="ios-menu" size={30} /></Text>
);

const cartButton = (navigation, screenProps) => (
  <Text style={{ padding: 15, color: 'white' }}
    onPress={() => { navigation.navigate('HomePage') }}
  >
    <EvilIcons name="cart" size={30} />
    
  </Text>
);


export default class App extends React.Component {

  render() {
    console.disableYellowBox = true;
    return (
      
      <StackNavigation  />
      
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
