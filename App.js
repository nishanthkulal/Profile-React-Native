import React from "react";
import { View,Text,Image,StyleSheet } from "react-native";

const App = () => {
  return (
  <View style = {styles.rectangle}>
    <Image source={require('./assets/img1.jpg')} style={styles.profimg} />
    <Text style={styles.title} >Nishanth Kulal</Text>
    <Text style={styles.profession} >React-Native Developer</Text>
  </View>)

}
const styles = StyleSheet.create({
  rectangle : {
   width:'100%',
   height:180,
   backgroundColor:'#E8D8BE',

  },
  profimg : {
    width : 100,
    height:100,
    borderRadius:75,
    position : 'absolute',
    top:100,
    left:30,
  },
  title : {
    fontSize : 30,
    fontWeight : 'bold',
    position : 'absolute',
    top : 89,
    left: 150,
  },
  profession :{
    fontSize : 18,
    position : 'absolute',
    top : 130,
    left: 160,
    color: '#888888'
  }
});
export default App;