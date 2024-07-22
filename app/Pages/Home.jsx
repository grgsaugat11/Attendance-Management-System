import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const Roles = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.attenContainer}>
        <Text style={styles.attenText}>Attendance Management System</Text>
      </View>
      <View>
        <Text style={styles.signInText}>Please select your roles:</Text>
      </View>
      <View style={styles.container}>
        <TouchableOpacity style={[styles.button, styles.Admin]}>
          <Text style={styles.buttonText}>Admin</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.Faculty]}>
          <Text style={styles.buttonText}>Faculty</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.Student]}>
          <Text style={styles.buttonText}>Student</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    marginBottom: 150,
  },
  button: {
    width: '100%',
    padding: 15,
    marginVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  Admin: {
    backgroundColor: '#8BD3E6',
  },
  Faculty: {
    backgroundColor: '#FF6D6A',
  },
  Student: {
    backgroundColor: '#B1A2CA',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
 attenContainer: {
    marginBottom: 20,
    marginTop: 50,
  },
  attenText: {
    textAlign: 'center',
    fontSize: 40,
    fontWeight: '500',
    color: 'black',
    marginTop: 30,
  },
  signInText: {
    textAlign: 'center',
    fontSize: 26,
    marginBottom: 5,
    marginTop: 50,
    color: '#6EB5FF',
  },
});

export default Roles;