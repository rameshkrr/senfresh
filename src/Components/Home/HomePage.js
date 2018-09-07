import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ToolbarAndroid,
  StatusBar,
  Button,
  Image,
  ScrollView
} from "react-native";

class HomePage extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        
        <ScrollView
          horizontal
          scrollEventThrottle={10}
          pagingEnabled
          style={{ marginBottom: 10 }}
        >
          <Image
            source={{ uri: 'http://senfresh.com/senfresh/wp-content/uploads/2018/09/1531934701.jpg' }} style={styles.sliderImage}
          />
          <Image
            source={{ uri: 'http://senfresh.com/senfresh/wp-content/uploads/2018/09/1524642359.jpg' }} style={styles.sliderImage}
          />
          <Image
            source={{ uri: 'http://senfresh.com/senfresh/wp-content/uploads/2018/09/1526504670.jpg' }} style={styles.sliderImage}
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    padding: 10
  },
  sliderImage: {
    height: 360,
    width: 360
  }
});

export default HomePage;
