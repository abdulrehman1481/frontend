import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
  Landing: undefined;
  Welcome: undefined;
  Login: undefined;
  Signup: undefined;
  Dashboard: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

export default function Login({ navigation }: Props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // For MVP, just show success and navigate to Dashboard
    Alert.alert('Success', 'Logged in!');
    navigation.navigate('Dashboard');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <LinearGradient colors={['#f8fafc', '#e2e8f0']} style={styles.gradient}>
        <View style={styles.content}>
          <View style={styles.header}>
            <LinearGradient colors={['#3b82f6', '#2563eb']} style={styles.iconWrapper}>
              <Ionicons name="log-in" size={40} color="white" />
            </LinearGradient>
            <Text style={styles.title}>Log In</Text>
          </View>

          <View style={styles.form}>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
              />
            </View>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
              <LinearGradient colors={['#3b82f6', '#2563eb']} style={styles.loginGradient}>
                <Text style={styles.loginButtonText}>Log In</Text>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity style={styles.signupLink} onPress={() => navigation.navigate('Signup')}>
              <Text style={styles.signupLinkText}>Don&apos;t have an account? Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  gradient: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
  },
  header: {
    marginBottom: 48,
    alignItems: 'center',
    paddingTop: 48,
  },
  iconWrapper: {
    marginBottom: 32,
    height: 80,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
  },
  title: {
    marginBottom: 16,
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#1e293b',
  },
  form: {
    marginBottom: 32,
  },
  inputContainer: {
    marginBottom: 16,
    borderRadius: 16,
    backgroundColor: 'white',
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  input: {
    color: '#1e293b',
  },
  buttonContainer: {
    gap: 16,
    paddingBottom: 48,
  },
  loginButton: {
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  loginGradient: {
    padding: 16,
    borderRadius: 16,
    justifyContent: 'center',
  },
  loginButtonText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
  },
  signupLink: {
    padding: 16,
  },
  signupLinkText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
    color: '#2563eb',
  },
});
