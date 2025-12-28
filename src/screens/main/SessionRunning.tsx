import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
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

type Props = NativeStackScreenProps<RootStackParamList, 'SessionRunning'>;

export default function SessionRunning({ navigation, route }: Props) {
  const { sessionId } = route.params;
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [totalTime] = useState(900); // 15 minutes in seconds
  const [intensity, setIntensity] = useState(50);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= totalTime) {
            setIsPlaying(false);
            return prev;
          }
          return prev + 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, totalTime]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const progress = (currentTime / totalTime) * 100;

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleStop = () => {
    setIsPlaying(false);
    setCurrentTime(0);
  };

  const handleViewTelemetry = () => {
    navigation.navigate('LiveTelemetry', { sessionId });
  };

  const handleAdjustIntensity = (delta: number) => {
    setIntensity(Math.max(0, Math.min(100, intensity + delta)));
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color="#0f172a" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Session Running</Text>
          <TouchableOpacity onPress={handleViewTelemetry} style={styles.telemetryHeaderButton}>
            <Ionicons name="stats-chart" size={20} color="#3b82f6" />
          </TouchableOpacity>
        </View>

        {/* Content */}
        <View style={styles.content}>
          {/* Session Info */}
          <View style={styles.section}>
            <View style={styles.sessionCard}>
              <Text style={styles.sessionName}>Morning Relaxation</Text>
              <Text style={styles.sessionType}>Relaxation Session</Text>
              <View style={styles.timeDisplay}>
                <Text style={styles.currentTime}>{formatTime(currentTime)}</Text>
                <Text style={styles.totalTime}>{formatTime(totalTime)}</Text>
              </View>
              <View style={styles.progressBar}>
                <View style={[styles.progressFill, { width: `${progress}%` }]} />
              </View>
            </View>
          </View>

          {/* Controls */}
          <View style={styles.section}>
            <View style={styles.controlsContainer}>
              <TouchableOpacity
                style={[styles.controlButton, styles.stopButton]}
                onPress={handleStop}
                activeOpacity={0.8}>
                <Ionicons name="stop" size={24} color="#dc2626" />
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.controlButton, styles.playButton]}
                onPress={handlePlayPause}
                activeOpacity={0.8}>
                <Ionicons
                  name={isPlaying ? 'pause' : 'play'}
                  size={32}
                  color="white"
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.controlButton, styles.telemetryButton]}
                onPress={handleViewTelemetry}
                activeOpacity={0.8}>
                <Ionicons name="stats-chart" size={24} color="#3b82f6" />
              </TouchableOpacity>
            </View>
          </View>

          {/* Current Parameters */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Current Parameters</Text>
            <View style={styles.parametersContainer}>
              <View style={styles.parameterItem}>
                <Ionicons name="radio" size={20} color="#3b82f6" />
                <View style={styles.parameterText}>
                  <Text style={styles.parameterLabel}>Frequency</Text>
                  <Text style={styles.parameterValue}>40 Hz</Text>
                </View>
              </View>
              <View style={styles.parameterItem}>
                <Ionicons name="flash" size={20} color="#f59e0b" />
                <View style={styles.parameterText}>
                  <Text style={styles.parameterLabel}>Intensity</Text>
                  <Text style={styles.parameterValue}>{intensity}%</Text>
                </View>
                <View style={styles.intensityControls}>
                  <TouchableOpacity
                    style={styles.intensityButton}
                    onPress={() => handleAdjustIntensity(-10)}>
                    <Ionicons name="remove" size={16} color="#64748b" />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.intensityButton}
                    onPress={() => handleAdjustIntensity(10)}>
                    <Ionicons name="add" size={16} color="#64748b" />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.parameterItem}>
                <Ionicons name="pulse" size={20} color="#10b981" />
                <View style={styles.parameterText}>
                  <Text style={styles.parameterLabel}>Waveform</Text>
                  <Text style={styles.parameterValue}>Sine Wave</Text>
                </View>
              </View>
            </View>
          </View>

          {/* Device Status */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Device Status</Text>
            <View style={styles.statusContainer}>
              <View style={styles.statusItem}>
                <View style={[styles.statusDot, { backgroundColor: '#10b981' }]} />
                <Text style={styles.statusText}>Device Connected</Text>
              </View>
              <View style={styles.statusItem}>
                <View style={[styles.statusDot, { backgroundColor: '#10b981' }]} />
                <Text style={styles.statusText}>Signal Strong</Text>
              </View>
              <View style={styles.statusItem}>
                <View style={[styles.statusDot, { backgroundColor: '#f59e0b' }]} />
                <Text style={styles.statusText}>Battery 75%</Text>
              </View>
            </View>
          </View>

          {/* Quick Actions */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Quick Actions</Text>
            <View style={styles.quickActions}>
              <TouchableOpacity
                style={styles.quickButton}
                onPress={() => setIntensity(Math.max(0, intensity - 20))}
                activeOpacity={0.8}>
                <Ionicons name="volume-low" size={20} color="#64748b" />
                <Text style={styles.quickButtonText}>Softer</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.quickButton}
                onPress={() => setIntensity(Math.min(100, intensity + 20))}
                activeOpacity={0.8}>
                <Ionicons name="volume-high" size={20} color="#64748b" />
                <Text style={styles.quickButtonText}>Louder</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.quickButton}
                onPress={handleViewTelemetry}
                activeOpacity={0.8}>
                <Ionicons name="stats-chart" size={20} color="#64748b" />
                <Text style={styles.quickButtonText}>View Data</Text>
              </TouchableOpacity>
            </View>
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
  telemetryHeaderButton: {
    padding: 8,
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
  sessionCard: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  sessionName: {
    fontSize: 24,
    fontWeight: '700',
    color: '#0f172a',
    marginBottom: 4,
  },
  sessionType: {
    fontSize: 16,
    color: '#64748b',
    marginBottom: 20,
  },
  timeDisplay: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 12,
  },
  currentTime: {
    fontSize: 18,
    fontWeight: '600',
    color: '#3b82f6',
  },
  totalTime: {
    fontSize: 18,
    fontWeight: '600',
    color: '#64748b',
  },
  progressBar: {
    width: '100%',
    height: 8,
    backgroundColor: '#e2e8f0',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#3b82f6',
    borderRadius: 4,
  },
  controlsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  controlButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  stopButton: {
    backgroundColor: '#fef2f2',
  },
  playButton: {
    backgroundColor: '#3b82f6',
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  telemetryButton: {
    backgroundColor: '#eff6ff',
  },
  parametersContainer: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    gap: 16,
  },
  parameterItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  parameterText: {
    flex: 1,
  },
  parameterLabel: {
    fontSize: 14,
    color: '#64748b',
  },
  parameterValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#0f172a',
  },
  intensityControls: {
    flexDirection: 'row',
    gap: 8,
  },
  intensityButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#f1f5f9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  statusContainer: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    gap: 12,
  },
  statusItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  statusText: {
    fontSize: 16,
    color: '#0f172a',
  },
  quickActions: {
    flexDirection: 'row',
    gap: 12,
  },
  quickButton: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  quickButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#0f172a',
    marginTop: 4,
  },
});