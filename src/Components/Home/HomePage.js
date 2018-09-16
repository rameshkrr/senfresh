import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
  ScrollView,
  FlatList
} from "react-native";
import Swiper from 'react-native-swiper';

class HomePage extends React.Component {

	state={ 
        data:[],
    }

    fetchData = async() => {
				//response
		const url = 'https://rkhomeappliances.co.in/apitest/wp-json/wc/v2/products/categories?per_page=100&consumer_key=ck_ba41b0062fd30ea9bfd8ccbc6d47b964ab04cdeb&consumer_secret=cs_29b5a15f8c7455a15f537a5a4a0cd8c59b798f26'
				
        const response = await
        //Fetching cat using V1
        fetch(url);
        //posts
        const posts = await response.json();
        this.setState({data:posts});
    }
    componentDidMount(){
        //page load
   		 this.fetchData();
        
    }

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
            </View>

	<View>
	<FlatList contentContainerStyle={styles.list} numColumns={2} style={{width:null}}
	data={this.state.data }
	keyExtractor = {(x,i) =>i.toString()}
	renderItem = {({item})=>
			<TouchableHighlight style={styles.contents}>

<View style={styles.view} >
<View >
<Image style={styles.image} source={{uri:  item.image.src }} /> 
</View>

<Text style={styles.text}>{item.name}</Text>



</View>
	</TouchableHighlight> 
	} />
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
		marginBottom:20,

	},
	image:{
		width:200,
		height:100
	},
	contents:{
		elevation:3,
		backgroundColor:'#fff',
		width:'43%',
		marginLeft:18,
		marginBottom:20,
	},
	text:{
		textAlign:'center',
		padding:5,
		fontSize:18	
	}
	
});

export default HomePage;
