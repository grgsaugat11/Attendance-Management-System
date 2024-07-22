import { View, Text, Button, StyleSheet, Image } from "react-native";
import React from "react";
import FlatButton from '../../Pages/button'

export default function Dashboard() {
  return (
    <View>
      <View style={styles.button}>
        <FlatButton text="Log Out"></FlatButton>
      </View>
      <Image
        source={require("../../../assets/images/student2.jpg")}
        style={{
          height: 150,
          width: 150,
          marginHorizontal:'auto',
          marginTop: 100
        }}
      />
      <Text style={styles.txt}>Welcome : <Text style={{color: 'hotpink'}}>Preeti Gurung</Text></Text>
      <View style={styles.container}>
        <FlatButton text="View Attendance" ></FlatButton>
      </View>
      <View style={styles.container}>
        <FlatButton text="Leave Appliation" ></FlatButton>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#B1A2CA',
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
    backgroundColor: '#B1A2CA',
    width: 110,
    margin: 20,
    borderRadius: 15,
  },
});
