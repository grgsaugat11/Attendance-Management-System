import * as React from "react";
import { Text, View, Button, StyleSheet, TextInput } from "react-native";
import FlatButton from './button';

export default function Application() {
  return (
    <View>
      <Text style={{ fontSize: 30, textAlign: "center", margin: 30 }}>
        Application
      </Text>
      <View style={styles.container}>
        <Text style={styles.label}>Date :</Text>
        <TextInput
          placeholder="Enter the date"
          style={styles.input}
        ></TextInput>
      </View>
      <View style={styles.container}>
        <Text style={styles.label}>Reason For leave :</Text>
        <TextInput
          placeholder="Enter the reason for leave"
          style={styles.input}
        ></TextInput>
      </View>
      <View style={styles.container}>
        <Text style={styles.label}>Leave Duration :</Text>
        <TextInput
          placeholder="Enter leave duration"
          style={styles.input}
        ></TextInput>
      </View>
      <View style={styles.container}>
        <Text style={styles.label}>From :</Text>
        <TextInput placeholder="Enter Start date of Leave" style={styles.input}></TextInput>
      </View>
      <View style={styles.container}>
        <Text style={styles.label}>To :</Text>
        <TextInput placeholder="Enter End date of Leave" style={styles.input}></TextInput>
      </View>
      <Text style={{ fontSize: 30, textAlign: "center", margin: 30 }}>
        Student Information
      </Text>
      <View style={styles.container}>
        <Text style={styles.label}>Name :</Text>
        <TextInput
          placeholder="Enter Your Name"
          style={styles.input}
        ></TextInput>
      </View>
      <View style={styles.container}>
        <Text style={styles.label}>Semester :</Text>
        <TextInput
          placeholder="Enter Semester"
          style={styles.input}
        ></TextInput>
      </View>
      <View style={styles.container}>
        <Text style={styles.label}>Email :</Text>
        <TextInput
          placeholder="Enter Your Email"
          style={styles.input}
        ></TextInput>
      </View>
      <View style={styles.container}>
        <Text style={styles.label}>Contact no :</Text>
        <TextInput
          placeholder="Enter Your Contact No"
          style={styles.input}
        ></TextInput>
      </View>
      <View style={styles.button}>
        <FlatButton text="Submit"></FlatButton>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 10,
  },
  label: {
    flex: 0.64,
    fontSize: 18,
    marginRight: 10,
  },
  input: {
    flex: 1,
    marginRight: 10,
    textAlign: 'center',
    backgroundColor: "gray",
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 10,
  },
  button: {
    height: 150,
    width: 150,
    justifyContent: "center",
    marginHorizontal: "auto"
  },
});
