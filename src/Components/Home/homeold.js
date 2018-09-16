import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
  ScrollView
} from "react-native";
import Swiper from 'react-native-swiper';

class HomePage extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={{backgroundColor:'#fff'}}>
        	   <View style={styles.slider}>
			<Swiper 
					autoplay={true}
					style={{height:200}}>
					<View style={{flex:1}}>
					<Image
					style={{flex:1,height:200,width:null,}}
					 source={require('../assets/images/banner1.jpg')} />
					</View>
					<View style={{flex:1}}>
					<Image 
					style={{flex:1,height:200,width:null,}}
					source={require('../assets/images/banner2.jpg')} />
					</View>
					<View style={{flex:1}}>
					<Image 
					style={{flex:1,height:200,width:null,}}
					source={require('../assets/images/banner3.jpg')} />
					</View>
					</Swiper>
            
						<View style={{ display: 'flex', flexDirection: 'row', padding: 5, marginLeft: 10,marginRight:20,marginTop:20 }}>
						<TouchableHighlight style={{flex:1,elevation: 3,position:'relative',backgroundColor:'#fff',height:150}}  onPress={() => navigate("CategoryList", { catid:1 })} underlayColor="transparent">
						<View >
						<Image 
					style={{flex:1,height:120,width:null,}}
					source={require('../assets/images/poultry.jpg')} />
				<Text style={styles.title}>Poultry</Text>
				</View>
				</TouchableHighlight> 
				<TouchableHighlight style={{flex:1,elevation: 3,marginLeft:20,position:'relative',backgroundColor:'#fff',height:150}} onPress={() => navigate("CategoryList", { catid:1 })} underlayColor="transparent">
				<View  >
				<Image 
					style={{flex:1,height:120,width:null,}}
					source={require('../assets/images/mutton.jpg')} />
				<Text style={styles.title}>Mutton</Text>
				</View>
				</TouchableHighlight> 

						</View>
						<View style={{ display: 'flex', flexDirection: 'row', padding: 5, marginLeft: 10,marginRight:20,marginTop:20 }}>
						<TouchableHighlight style={{width:'50%'}} onPress={() => navigate("CategoryList", { catid:1 })} underlayColor="transparent">
						<View style={{flex:1,elevation: 3,flexDirection: 'column',position:'relative',backgroundColor:'#fff',height:150}}>
						<Image 
					style={{flex:1,height:120,width:null,}}
					source={require('../assets/images/fish.jpeg')} />
				<Text style={styles.title}>Fish</Text>
				</View>
				</TouchableHighlight> 
				<TouchableHighlight style={{width:'50%'}} onPress={() => navigate("CategoryList", { catid:1 })} underlayColor="transparent">
				<View  style={{flex:1,elevation: 3,marginLeft:20,flexDirection: 'column',position:'relative',backgroundColor:'#fff',height:150}}>
				<Image 
					style={{flex:1,height:120,width:null,}}
					source={require('../assets/images/vegi.jpg')} />
				<Text style={styles.title}>Vegitables</Text>
				</View>
				</TouchableHighlight> 
						</View>
						<View style={{ display: 'flex', flexDirection: 'row', padding: 5, marginLeft: 10, marginRight:20,marginTop:20 }}>
						<TouchableHighlight style={{width:'50%'}}  onPress={() => navigate("CategoryList", { catid:1 })} underlayColor="transparent">
						<View style={{flex:1,elevation: 3,flexDirection: 'column',position:'relative',backgroundColor:'#fff',height:150}}>
						<Image 
					style={{flex:1,height:120,width:null}}
					source={require('../assets/images/fruits.jpg')} />
				<Text style={styles.title}>Fruits</Text>
				</View>
				</TouchableHighlight> 
				<TouchableHighlight style={{width:'50%'}}  onPress={() => navigate("CategoryList", { catid:1 })} underlayColor="transparent">
				<View  style={{flex:1,elevation: 3,marginLeft:20,flexDirection: 'column',position:'relative',backgroundColor:'#fff',height:150}}>
				<Image 
					style={{flex:1,height:120,width:null,}}
					source={require('../assets/images/grocery.jpg')} />
				<Text style={styles.title}>Grocery</Text>
				</View>
				</TouchableHighlight> 
				
						</View>
			
						</View>
						</ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
		padding: 3,
		textAlign:'center',
		fontWeight:'100'
  },
  slider:{
		width:370,
		marginBottom:10,

	}
	
});

export default HomePage;
