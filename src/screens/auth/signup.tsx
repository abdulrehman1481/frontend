import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
  Login: undefined;
  Signup: undefined;
  MainTabs: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'Signup'>;

export default function Signup({ navigation }: Props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = () => {
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }
    // For MVP, just show success and navigate to Login
    Alert.alert('Success', 'Account created! Please log in.');
    navigation.navigate('Login');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <LinearGradient colors={['#ffffff', '#e0f2fe']} style={styles.gradient}>
        <View style={styles.content}>
          <View style={styles.header}>
            <LinearGradient colors={['#5DADE2', '#48A0D4']} style={styles.iconWrapper}>
              <Ionicons name="person-add" size={40} color="white" />
            </LinearGradient>
            <Text style={styles.title}>Sign Up</Text>
            <Text style={styles.subtitle}>Create your wellness account</Text>
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
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Confirm Password"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry
              />
            </View>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.signupButton} onPress={handleSignup}>
              <LinearGradient colors={['#5DADE2', '#48A0D4']} style={styles.signupGradient}>
                <Text style={styles.signupButtonText}>Sign Up</Text>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity style={styles.loginLink} onPress={() => navigation.navigate('Login')}>
              <Text style={styles.loginLinkText}>Already have an account? Log In</Text>
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
    backgroundColor: '#ffffff',
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
    marginBottom: 24,
    height: 80,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
  },
  title: {
    marginBottom: 8,
    textAlign: 'center',
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1e293b',
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 16,
    color: '#64748b',
  },
  form: {
    marginBottom: 32,
  },
  inputContainer: {
    marginBottom: 16,
    borderRadius: 12,
    backgroundColor: 'white',
    padding: 16,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  input: {
    color: '#1e293b',
    fontSize: 16,
  },
  buttonContainer: {
    gap: 16,
    paddingBottom: 48,
  },
  signupButton: {
    borderRadius: 12,
    shadowColor: '#5DADE2',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  signupGradient: {
    padding: 18,
    borderRadius: 12,
    justifyContent: 'center',
  },
  signupButtonText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
  },
  loginLink: {
    padding: 16,
  },
  loginLinkText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
    color: '#5DADE2',
  },
});
