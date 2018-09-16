import React from 'react';
import {
  Text,
  Button,
  Animated,
  View,
  Image,
  StyleSheet
} from "react-native";
import { StackNavigator, DrawerNavigator } from "react-navigation";
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import { Ionicons, EvilIcons } from '@expo/vector-icons';
import {Icon, Container, Header, Content,Left, Body } from 'native-base';
import Splash from './src/Components/loaders/Splash'
import HomePage from './src/Components/Home/HomePage';
import DrawerContainer from './src/Components/Navigations/DrawerContainer';
import configureStore from './src/store/configureStore';

//https://senfresh.com/senfresh/wp-json/wc/v2/products?per_page=100&consumer_key=ck_3c0b578e5698a4a1930431274090b44ee32965e2&consumer_secret=cs_04abc3cb10640085f0cfcbb6205caa8424b2b2b3
////alternate = https://rkhomeappliances.co.in/apitest/wp-json/wc/v2/products/categories?per_page=100&consumer_key=ck_ba41b0062fd30ea9bfd8ccbc6d47b964ab04cdeb&consumer_secret=cs_29b5a15f8c7455a15f537a5a4a0cd8c59b798f26

const DrawerNavigation = DrawerNavigator({
  HomePage: {
    screen: HomePage,
    navigationOptions: {
      title: ""
    }
  },

}, {
    contentComponent: DrawerContainer,
    initialRouteName:'HomePage',

  });


  const StackNavigation = StackNavigator({
    DrawerNavigation: { screen: DrawerNavigation }
  }, {
    headerMode: 'float',
      navigationOptions: ({ navigation, screenProps }) => ({
        headerStyle: { backgroundColor: '#4C3E54' },
        headerTintColor: 'white',
        headerLeft: drawerButton(navigation),
        headerRight: cartButton(navigation, screenProps),
        
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
      onPress={() => { navigation.navigate('Cart') }}
    >
      <EvilIcons name="cart" size={30} />
      {screenProps.cartCount}
    </Text>
  );
  
  class CA extends React.Component {
    render() {
      const cart = this.props.cart
      const lengths = cart.length
      var sum = 0
      cart.forEach(function(element) {
              
              sum += parseFloat(element.quantity ) ;
            });
      const catLength = {cartCount:sum}
      return (
        <StackNavigation screenProps={catLength} />
      );
    }
  }
  
  function mapStateToProps(state) {
    return {
      cart: state.cart
    };
  }
  
  const ConnectedApp = connect(mapStateToProps, null)(CA);
  
  const store = configureStore();
  
  class App extends React.Component {
    constructor(props){
   super(props);
  
   
   this.state = {
    component : <Splash />
   };
   
  }
  contentAll(){
    return(
    <Provider store={store}>
          <ConnectedApp />
        </Provider>
        )
  }
  componentDidMount(){
       // Start counting when the page is loaded
       this.timeoutHandle = setTimeout(()=>{
        // Add your logic for the transition
        this.setState({ component: this.contentAll() })
   }, 2500);
  }
    render() {
      console.disableYellowBox = true;
  
      return (
        
          this.state.component
        
      )
    }
  }
  
  export default App;