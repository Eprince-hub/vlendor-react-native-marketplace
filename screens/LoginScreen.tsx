import React, {useState} from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Button, Text} from 'react-native-paper';
import TextInputWithIcon from '../components/TextInputWithIcon';

const SignInScreen = ({navigation}: any) => {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const handleSignIn = () => {
    // Implement your sign-in logic here
    console.log('Signing in...');
  };

  const handleForgotPassword = () => {
    // Implement your forgot password navigation here
    console.log('Forgot Password');
  };

  const handleSignUp = () => {
    // Implement your sign-up navigation here
    navigation.navigate('SignUp');
    console.log('Sign Up');
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/productImages/cleaning.jpg')}
          style={styles.logo}
        />
      </View>
      <TextInputWithIcon
        label="Email or Phone"
        value={emailOrPhone}
        onChangeText={text => setEmailOrPhone(text)}
        icon="account"
      />
      <TextInputWithIcon
        label="Password"
        secureTextEntry={!isPasswordVisible}
        value={password}
        onChangeText={text => setPassword(text)}
        icon={isPasswordVisible ? 'eye-off' : 'eye'}
        onPress={() => setPasswordVisible(!isPasswordVisible)}
      />
      <Button mode="contained" onPress={handleSignIn} style={styles.button}>
        Sign In
      </Button>
      <TouchableOpacity onPress={handleForgotPassword}>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleSignUp}>
        <Text style={styles.signUp}>Don't have an account? Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logo: {
    width: 80,
    height: 80,
    borderRadius: 100,
  },
  button: {
    marginTop: 8,
  },
  forgotPassword: {
    color: '#007bff',
    fontSize: 16,
    marginTop: 8,
  },
  signUp: {
    fontSize: 16,
    color: '#007bff',
    marginTop: 24,
  },
});

export default SignInScreen;
