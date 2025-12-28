import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
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

type Props = NativeStackScreenProps<RootStackParamList, 'Welcome'>;

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    gradient: {
        flex: 1,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        padding: 24,
    },
    header: {
        marginBottom: 48,
        alignItems: 'center',
    },
    iconWrapper: {
        marginBottom: 32,
        height: 96,
        width: 96,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 24,
    },
    title: {
        marginBottom: 16,
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        color: '#1e293b',
    },
    subtitle: {
        textAlign: 'center',
        fontSize: 18,
        lineHeight: 24,
        color: '#475569',
    },
    signupButton: {
        borderRadius: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 8,
    },
    signupGradient: {
        padding: 16,
        borderRadius: 16,
        justifyContent: 'center',
    },
    signupText: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '600',
        color: 'white',
    },
    loginButton: {
        borderRadius: 16,
        borderWidth: 2,
        borderColor: '#e2e8f0',
        backgroundColor: 'white',
        padding: 16,
        marginTop: 16,
    },
    loginText: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '600',
        color: '#1e293b',
    },
});

export default function Welcome({ navigation }: Props) {
    return (
        <SafeAreaView style={styles.safeArea}>
            <LinearGradient colors={['#f8fafc', '#e2e8f0']} style={styles.gradient}>
                <View style={styles.content}>
                    <View style={styles.header}>
                        <LinearGradient colors={['#3b82f6', '#2563eb']} style={styles.iconWrapper}>
                            <Ionicons name="headset" size={48} color="white" />
                        </LinearGradient>
                        <Text style={styles.title}>
                            Welcome to Audio Stimulator
                        </Text>
                        <Text style={styles.subtitle}>
                            Discover personalized audio stimulation programs to enhance your well-being and focus.
                        </Text>
                    </View>

                    <View>
                        <TouchableOpacity style={styles.signupButton} onPress={() => navigation.navigate('Signup')}>
                            <LinearGradient colors={['#3b82f6', '#2563eb']} style={styles.signupGradient}>
                                <Text style={styles.signupText}>Sign Up</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.loginButton}
                            onPress={() => navigation.navigate('Login')}>
                            <Text style={styles.loginText}>Log In</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </LinearGradient>
        </SafeAreaView>
    );
}
