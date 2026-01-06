import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
  Login: undefined;
  Signup: undefined;
  BasicInfo: undefined;
  Questionnaire: undefined;
  MainTabs: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

export default function Login({ navigation }: Props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [language, setLanguage] = useState('English');

  const handleGetStarted = () => {
    // Navigate to Basic Info for first-time users
    navigation.navigate('BasicInfo');
  };

  const handleSignIn = () => {
    // For existing users, navigate directly to Main Tabs
    navigation.navigate('MainTabs');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <LinearGradient colors={['#A3D9F0', '#5DADE2']} style={styles.gradient}>
        <View style={styles.content}>
          {/* Logo/Header Section */}
          <View style={styles.header}>
            <View style={styles.logoContainer}>
              <LinearGradient colors={['#3b82f6', '#2563eb']} style={styles.logoBg}>
                <Ionicons name="musical-notes" size={32} color="white" />
              </LinearGradient>
            </View>
            <Text style={styles.appTitle}>AudioStim Pro</Text>
            <Text style={styles.appSubtitle}>Professional Audio Stimulation Therapy</Text>
            <Text style={styles.tagline}>
              Advanced neurostimulation technology for medical professionals and researchers
            </Text>
          </View>

          {/* Login Form for Sign In */}
          <View style={styles.formSection}>
            <View style={styles.inputContainer}>
              <Ionicons name="mail-outline" size={20} color="#64748b" style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#94a3b8"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>
            <View style={styles.inputContainer}>
              <Ionicons name="lock-closed-outline" size={20} color="#64748b" style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="#94a3b8"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
              />
            </View>
          </View>

          {/* Buttons */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.getStartedButton} onPress={handleGetStarted}>
              <Text style={styles.getStartedButtonText}>Get Started</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>
              <LinearGradient colors={['#3b82f6', '#2563eb']} style={styles.signInGradient}>
                <Text style={styles.signInButtonText}>Sign In</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>

          {/* Footer Links */}
          <View style={styles.footer}>
            <TouchableOpacity style={styles.footerLink}>
              <Ionicons name="document-text-outline" size={18} color="#1e293b" />
              <Text style={styles.footerLinkText}>Terms & Conditions</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.languageSelector}>
              <Ionicons name="language-outline" size={18} color="#1e293b" />
              <Text style={styles.languageSelectorText}>{language}</Text>
              <Ionicons name="chevron-down-outline" size={16} color="#1e293b" />
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
    backgroundColor: '#A3D9F0',
  },
  gradient: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 40,
    paddingBottom: 24,
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logoContainer: {
    marginBottom: 16,
  },
  logoBg: {
    width: 80,
    height: 80,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  appTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 8,
    textAlign: 'center',
  },
  appSubtitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 8,
  },
  tagline: {
    fontSize: 13,
    color: '#1e293b',
    textAlign: 'center',
    paddingHorizontal: 20,
    lineHeight: 18,
  },
  formSection: {
    marginBottom: 24,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    marginBottom: 12,
  },
  inputIcon: {
    marginRight: 12,
  },
  input: {
    flex: 1,
    color: '#1e293b',
    fontSize: 16,
  },
  buttonContainer: {
    marginBottom: 24,
  },
  getStartedButton: {
    backgroundColor: 'white',
    borderRadius: 12,
    paddingVertical: 16,
    marginBottom: 12,
    borderWidth: 2,
    borderColor: '#3b82f6',
  },
  getStartedButtonText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
    color: '#3b82f6',
  },
  signInButton: {
    borderRadius: 12,
  },
  signInGradient: {
    paddingVertical: 16,
    borderRadius: 12,
  },
  signInButtonText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
  },
  footer: {
    marginTop: 'auto',
    gap: 16,
  },
  footerLink: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: 12,
  },
  footerLinkText: {
    fontSize: 15,
    fontWeight: '500',
    color: '#1e293b',
  },
  languageSelector: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 8,
  },
  languageSelectorText: {
    fontSize: 15,
    fontWeight: '500',
    color: '#1e293b',
  },
});
