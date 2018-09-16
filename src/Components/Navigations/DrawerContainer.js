import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { NavigationActions } from 'react-navigation'

export default class DrawerContainer extends React.Component {
  render() {
    const { navigation } = this.props
    return (
        <View style={styles.container}>
          <Image
          style={styles.drawerImage}
           source={{ uri: 'http://senfresh.com/senfresh/wp-content/uploads/2018/09/senfresh.png'}}/>
      
      <View style={styles.container2}>
        <Text
          onPress={() => navigation.navigate('HomePage')}
          style={styles.transparentButton}>
          Home
        </Text>
        <Text
          onPress={() => navigation.navigate('HomePage')}
          style={styles.transparentButton}>
          Categories
        </Text>
        <Text
          onPress={() => navigation.navigate('HomePage')}
          style={styles.transparentButton}>
          Cart
        </Text>
        <Text
          onPress={() => navigation.navigate('HomePage')}
          style={styles.transparentButton}>
          Login
        </Text>
        <Text
          onPress={() => navigation.navigate('HomePage')}
          style={styles.transparentButton}>
          Orders
        </Text>

      </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
    paddingTop: 40,
    paddingHorizontal: 20
  },
  transparentButton: {
    fontSize: 22,
    color: '#4C3E54',
    textAlign: 'left',
    paddingBottom:10,
    paddingTop:5,
    
  },
  drawerImage:{
    height:170,
    width:290,
    marginLeft:-30,
    marginTop:-55,
    alignItems:'center',
    resizeMode:'contain',
    justifyContent:'center',
    
  },
  container2:{
      marginTop:-40
  }
})
