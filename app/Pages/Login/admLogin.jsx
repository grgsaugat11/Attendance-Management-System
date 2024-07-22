import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/Fontisto';
import Icon2 from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

const LoginScreenAdmin = () => {
  const navigation = useNavigation();

  const handleSignIn = () => {
    console.log('Sign in button pressed');
   
  };

  const handleRegister = () => {
    navigation.navigate("SignUp");
  };

  return (
    <View style={styles.container}>
      <View style={styles.topImageContainer}>
        <Image source={require('../../../assets/images/TopVector.png')} style={styles.topImage} />
      </View>
      <View style={styles.attenContainer}>
        <Text style={styles.attenText}>Attendance Management System</Text>
      </View>
      <View>
        <Text style={styles.signInText}>Sign in to your account</Text>
      </View>
      <View style={styles.InputContainer}>
        <Icon name="user" size={24} color="grey" style={styles.InputIcon} />
        <TextInput style={styles.TextInput} placeholder="Email" />
      </View>
      <View style={styles.InputContainer}>
        <Icon1 name="locked" size={24} color="grey" style={styles.InputIcon} />
        <TextInput style={styles.TextInput} placeholder="Password" secureTextEntry />
      </View>
      <Text style={styles.forgotPasswordText}>Forgot your password?</Text>
      <TouchableOpacity style={styles.SignInButtonContainer} onPress={handleSignIn}>
        <Text style={styles.SignIn}>Sign In</Text>
        <Icon2 name="arrowright" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleRegister}>
        <Text style={styles.footerText}>Don't have an account? <Text style={{ textDecorationLine: 'underline' }}>Create.</Text></Text>
      </TouchableOpacity>
      <View style={styles.leftVectorContainer}>
        <Image source={require('../../../assets/images/LeftVector.png')} style={styles.LeftVectorImage} />
      </View>
    </View>
  );
};

export default LoginScreenAdmin;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F5F5',
    flex: 1,
    position: 'relative',
  },
  topImageContainer: {
    marginBottom: 20,
  },
  topImage: {
    width: '100%',
    height: 150,
  },
  attenContainer: {
    marginBottom: 20,
  },
  attenText: {
    textAlign: 'center',
    fontSize: 38,
    fontWeight: '500',
    color: 'black',
  },
  signInText: {
    textAlign: 'center',
    fontSize: 15,
    marginBottom: 10,
    color: 'blue',
  },
  InputContainer: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    borderRadius: 20,
    marginHorizontal: 40,
    elevation: 100,
    marginVertical: 20,
    width: '80%',
    paddingVertical: 15,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  InputIcon: {
    marginLeft: 10,
    marginRight: 5,
  },
  TextInput: {
    flex: 1,
    marginLeft: 10,
  },
  forgotPasswordText: {
    color: '#BEBEBE',
    textAlign: 'right',
    width: '90%',
    marginBottom: 20,
  },
  SignInButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  SignIn: {
    color: '#262626',
    fontSize: 25,
    fontWeight: 'bold',
    marginRight: 10,
  },
  footerText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 17,
    marginTop: 100,
  },
  leftVectorContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  LeftVectorImage: {
    height: 250,
    width: 200,
  },
});
