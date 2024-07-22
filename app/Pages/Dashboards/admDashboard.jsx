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
        source={require("../../../assets/images/admin2.jpg")}
        style={{
          height: 150,
          width: 150,
          marginHorizontal:'auto',
          marginTop: 100
        }}
      />
      <View style={styles.container}>
        <FlatButton text="Manage Teachers" ></FlatButton>
      </View>
      <View style={styles.container}>
        <FlatButton text="Manage Students" ></FlatButton>
      </View>
      <View style={styles.container}>
        <FlatButton text="Attendance Report" ></FlatButton>
      </View>
      <View style={styles.container}>
        <FlatButton text="Applications" ></FlatButton>
      </View>
      <View style={styles.container}>
        <FlatButton text="Manage Course" ></FlatButton>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#8BD3E6',
    marginHorizontal: 20,
    marginTop:20,
    borderRadius: 15,
  },
  button: {
    backgroundColor: '#8BD3E6',
    width: 110,
    margin: 20,
    borderRadius: 15,
  },
});
