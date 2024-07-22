import { View, Text, Button, StyleSheet, Image } from "react-native";
import React from "react";
import FlatButton from '../../Pages/button'

export default function Dashboard( {navigation} ) {  
  return (
    <View>
      <View style={styles.button}>
        <FlatButton text="Log Out"></FlatButton>
      </View>
      <Image
        source={require("../../../assets/images/teacher.jpg")}
        style={{
          height: 150,
          width: 150,
          marginHorizontal:'auto',
          marginTop: 100
        }}
      />
      <Text style={styles.txt}>Welcome : <Text style={{color: 'blue'}}>Saroj Giri</Text></Text>
      <View style={styles.container}>
        <FlatButton text="Take Attendance" ></FlatButton>
      </View>
      <View style={styles.container}>
        <FlatButton text="View Attendance" ></FlatButton>
      </View>
      <View style={styles.container}>
        <FlatButton text="Leave Appliation" onPress={()=> navigation.navigate("Application")}></FlatButton>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FF6D6A',
    marginHorizontal: 20,
    marginTop:20,
    borderRadius: 15,
  },

  txt: {
    textAlign: 'center',
    marginTop: 30,
    fontSize: 30,
    fontWeight: 'bold'
  },

  button: {
    width: 110,
    margin: 20,
    backgroundColor: '#FF6D6A',
    borderRadius: 15,
  },
});
