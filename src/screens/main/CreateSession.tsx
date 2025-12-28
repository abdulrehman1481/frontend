import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, TextInput } from 'react-native';
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
  DeviceScan: undefined;
  DeviceDetails: { deviceId: string };
  DeviceConnected: { deviceId: string };
  SessionList: undefined;
  CreateSession: undefined;
  SessionRunning: { sessionId: string };
  LiveTelemetry: { sessionId: string };
  History: undefined;
  HistoryDetail: { historyId: string };
  Settings: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'CreateSession'>;

export default function CreateSession({ navigation }: Props) {
  const [sessionName, setSessionName] = useState('');
  const [duration, setDuration] = useState('15');
  const [frequency, setFrequency] = useState('40');
  const [intensity, setIntensity] = useState('50');
  const [sessionType, setSessionType] = useState('Relaxation');

  const sessionTypes = ['Relaxation', 'Focus', 'Sleep', 'Energy', 'Custom'];

  const handleCreate = () => {
    // In real app, save session and get ID
    const sessionId = 'new-session-' + Date.now();
    navigation.navigate('SessionRunning', { sessionId });
  };

  const handleTypeSelect = (type: string) => {
    setSessionType(type);
    // Auto-fill based on type
    switch (type) {
      case 'Relaxation':
        setFrequency('40');
        setIntensity('30');
        break;
      case 'Focus':
        setFrequency('80');
        setIntensity('60');
        break;
      case 'Sleep':
        setFrequency('10');
        setIntensity('20');
        break;
      case 'Energy':
        setFrequency('100');
        setIntensity('70');
        break;
      default:
        break;
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color="#0f172a" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Create Session</Text>
          <View style={{ width: 24 }} />
        </View>

        {/* Content */}
        <View style={styles.content}>
          {/* Session Name */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Session Details</Text>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Session Name</Text>
              <TextInput
                style={styles.textInput}
                value={sessionName}
                onChangeText={setSessionName}
                placeholder="Enter session name"
                placeholderTextColor="#94a3b8"
              />
            </View>
          </View>

          {/* Session Type */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Session Type</Text>
            <View style={styles.typesContainer}>
              {sessionTypes.map((type) => (
                <TouchableOpacity
                  key={type}
                  style={[
                    styles.typeButton,
                    sessionType === type && styles.typeButtonSelected,
                  ]}
                  onPress={() => handleTypeSelect(type)}
                  activeOpacity={0.8}>
                  <Text
                    style={[
                      styles.typeButtonText,
                      sessionType === type && styles.typeButtonTextSelected,
                    ]}>
                    {type}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Parameters */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Parameters</Text>

            {/* Duration */}
            <View style={styles.parameterContainer}>
              <View style={styles.parameterHeader}>
                <Text style={styles.parameterLabel}>Duration</Text>
                <Text style={styles.parameterValue}>{duration} min</Text>
              </View>
              <View style={styles.sliderContainer}>
                <TouchableOpacity
                  style={styles.sliderButton}
                  onPress={() => setDuration(Math.max(5, parseInt(duration) - 5).toString())}>
                  <Ionicons name="remove" size={16} color="#64748b" />
                </TouchableOpacity>
                <View style={styles.sliderTrack}>
                  <View style={[styles.sliderFill, { width: `${(parseInt(duration) / 60) * 100}%` }]} />
                </View>
                <TouchableOpacity
                  style={styles.sliderButton}
                  onPress={() => setDuration(Math.min(60, parseInt(duration) + 5).toString())}>
                  <Ionicons name="add" size={16} color="#64748b" />
                </TouchableOpacity>
              </View>
            </View>

            {/* Frequency */}
            <View style={styles.parameterContainer}>
              <View style={styles.parameterHeader}>
                <Text style={styles.parameterLabel}>Frequency</Text>
                <Text style={styles.parameterValue}>{frequency} Hz</Text>
              </View>
              <View style={styles.sliderContainer}>
                <TouchableOpacity
                  style={styles.sliderButton}
                  onPress={() => setFrequency(Math.max(1, parseInt(frequency) - 10).toString())}>
                  <Ionicons name="remove" size={16} color="#64748b" />
                </TouchableOpacity>
                <View style={styles.sliderTrack}>
                  <View style={[styles.sliderFill, { width: `${(parseInt(frequency) / 200) * 100}%` }]} />
                </View>
                <TouchableOpacity
                  style={styles.sliderButton}
                  onPress={() => setFrequency(Math.min(200, parseInt(frequency) + 10).toString())}>
                  <Ionicons name="add" size={16} color="#64748b" />
                </TouchableOpacity>
              </View>
            </View>

            {/* Intensity */}
            <View style={styles.parameterContainer}>
              <View style={styles.parameterHeader}>
                <Text style={styles.parameterLabel}>Intensity</Text>
                <Text style={styles.parameterValue}>{intensity}%</Text>
              </View>
              <View style={styles.sliderContainer}>
                <TouchableOpacity
                  style={styles.sliderButton}
                  onPress={() => setIntensity(Math.max(0, parseInt(intensity) - 10).toString())}>
                  <Ionicons name="remove" size={16} color="#64748b" />
                </TouchableOpacity>
                <View style={styles.sliderTrack}>
                  <View style={[styles.sliderFill, { width: `${parseInt(intensity)}%` as any }]} />
                </View>
                <TouchableOpacity
                  style={styles.sliderButton}
                  onPress={() => setIntensity(Math.min(100, parseInt(intensity) + 10).toString())}>
                  <Ionicons name="add" size={16} color="#64748b" />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* Preview */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Session Preview</Text>
            <View style={styles.previewContainer}>
              <View style={styles.previewItem}>
                <Ionicons name="time" size={20} color="#3b82f6" />
                <Text style={styles.previewText}>{duration} minutes</Text>
              </View>
              <View style={styles.previewItem}>
                <Ionicons name="radio" size={20} color="#3b82f6" />
                <Text style={styles.previewText}>{frequency} Hz</Text>
              </View>
              <View style={styles.previewItem}>
                <Ionicons name="flash" size={20} color="#3b82f6" />
                <Text style={styles.previewText}>{intensity}% intensity</Text>
              </View>
            </View>
          </View>

          {/* Create Button */}
          <View style={styles.section}>
            <TouchableOpacity
              style={styles.createButton}
              onPress={handleCreate}
              activeOpacity={0.8}>
              <LinearGradient
                colors={['#10b981', '#059669']}
                style={styles.createGradient}>
                <Ionicons name="play-circle" size={24} color="white" />
                <Text style={styles.createButtonText}>Start Session</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 16,
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#0f172a',
  },
  content: {
    padding: 20,
    gap: 28,
  },
  section: {
    gap: 12,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#0f172a',
    letterSpacing: -0.3,
  },
  inputContainer: {
    gap: 8,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#0f172a',
  },
  textInput: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    fontSize: 16,
    color: '#0f172a',
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  typesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  typeButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    backgroundColor: 'white',
  },
  typeButtonSelected: {
    borderColor: '#3b82f6',
    backgroundColor: '#eff6ff',
  },
  typeButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#64748b',
  },
  typeButtonTextSelected: {
    color: '#3b82f6',
  },
  parameterContainer: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  parameterHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  parameterLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#0f172a',
  },
  parameterValue: {
    fontSize: 16,
    fontWeight: '700',
    color: '#3b82f6',
  },
  sliderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  sliderButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#f1f5f9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sliderTrack: {
    flex: 1,
    height: 6,
    backgroundColor: '#e2e8f0',
    borderRadius: 3,
    overflow: 'hidden',
  },
  sliderFill: {
    height: '100%',
    backgroundColor: '#3b82f6',
    borderRadius: 3,
  },
  previewContainer: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    gap: 12,
  },
  previewItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  previewText: {
    fontSize: 16,
    color: '#0f172a',
  },
  createButton: {
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  createGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    gap: 12,
  },
  createButtonText: {
    fontSize: 18,
    fontWeight: '700',
    color: 'white',
  },
});