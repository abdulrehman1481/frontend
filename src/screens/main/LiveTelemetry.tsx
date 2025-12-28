import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Svg, { Path } from 'react-native-svg';

const { width } = Dimensions.get('window');

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

type Props = NativeStackScreenProps<RootStackParamList, 'LiveTelemetry'>;

export default function LiveTelemetry({ navigation, route }: Props) {
  const { sessionId } = route.params;
  const [brainwaves, setBrainwaves] = useState<number[]>([]);
  const [heartRate, setHeartRate] = useState(72);
  const [stressLevel, setStressLevel] = useState(35);
  const [focusLevel, setFocusLevel] = useState(68);

  useEffect(() => {
    // Simulate real-time data updates
    const interval = setInterval(() => {
      // Generate mock brainwave data
      const newPoint = Math.sin(Date.now() / 1000) * 20 + Math.random() * 10 + 50;
      setBrainwaves(prev => [...prev.slice(-49), newPoint]);

      // Update metrics with slight variations
      setHeartRate(prev => Math.max(60, Math.min(100, prev + (Math.random() - 0.5) * 2)));
      setStressLevel(prev => Math.max(0, Math.min(100, prev + (Math.random() - 0.5) * 5)));
      setFocusLevel(prev => Math.max(0, Math.min(100, prev + (Math.random() - 0.5) * 8)));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const renderWaveform = () => {
    if (brainwaves.length === 0) return null;

    const points = brainwaves.map((value, index) => {
      const x = (index / (brainwaves.length - 1)) * (width - 80);
      const y = 100 - (value / 100) * 80; // Scale to fit in 80px height
      return `${index === 0 ? 'M' : 'L'} ${x} ${y}`;
    }).join(' ');

    return (
      <View style={styles.waveformContainer}>
        <Text style={styles.waveformTitle}>Brainwave Activity</Text>
        <View style={styles.waveformChart}>
          <Svg width={width - 80} height={100} style={{ backgroundColor: 'transparent' }}>
            <Path
              d={points}
              stroke="#3b82f6"
              strokeWidth="2"
              fill="none"
            />
          </Svg>
        </View>
        <View style={styles.waveformLabels}>
          <Text style={styles.waveformLabel}>0s</Text>
          <Text style={styles.waveformLabel}>50s</Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color="#0f172a" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Live Telemetry</Text>
          <View style={{ width: 24 }} />
        </View>

        {/* Content */}
        <View style={styles.content}>
          {/* Real-time Metrics */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Real-time Metrics</Text>
            <View style={styles.metricsContainer}>
              <View style={styles.metricCard}>
                <View style={styles.metricIcon}>
                  <Ionicons name="heart" size={24} color="#ef4444" />
                </View>
                <View style={styles.metricContent}>
                  <Text style={styles.metricValue}>{Math.round(heartRate)}</Text>
                  <Text style={styles.metricUnit}>BPM</Text>
                  <Text style={styles.metricLabel}>Heart Rate</Text>
                </View>
              </View>

              <View style={styles.metricCard}>
                <View style={styles.metricIcon}>
                  <Ionicons name="thermometer" size={24} color="#f59e0b" />
                </View>
                <View style={styles.metricContent}>
                  <Text style={styles.metricValue}>{Math.round(stressLevel)}</Text>
                  <Text style={styles.metricUnit}>%</Text>
                  <Text style={styles.metricLabel}>Stress Level</Text>
                </View>
              </View>

              <View style={styles.metricCard}>
                <View style={styles.metricIcon}>
                  <Ionicons name="bulb" size={24} color="#10b981" />
                </View>
                <View style={styles.metricContent}>
                  <Text style={styles.metricValue}>{Math.round(focusLevel)}</Text>
                  <Text style={styles.metricUnit}>%</Text>
                  <Text style={styles.metricLabel}>Focus Level</Text>
                </View>
              </View>
            </View>
          </View>

          {/* Brainwave Visualization */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Brainwave Activity</Text>
            <View style={styles.chartContainer}>
              {renderWaveform()}
            </View>
          </View>

          {/* Session Stats */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Session Statistics</Text>
            <View style={styles.statsContainer}>
              <View style={styles.statRow}>
                <Text style={styles.statLabel}>Session Duration</Text>
                <Text style={styles.statValue}>12:34</Text>
              </View>
              <View style={styles.statRow}>
                <Text style={styles.statLabel}>Average Heart Rate</Text>
                <Text style={styles.statValue}>74 BPM</Text>
              </View>
              <View style={styles.statRow}>
                <Text style={styles.statLabel}>Peak Focus</Text>
                <Text style={styles.statValue}>89%</Text>
              </View>
              <View style={styles.statRow}>
                <Text style={styles.statLabel}>Data Points</Text>
                <Text style={styles.statValue}>742</Text>
              </View>
            </View>
          </View>

          {/* Device Status */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Device Status</Text>
            <View style={styles.deviceStatus}>
              <View style={styles.statusRow}>
                <Ionicons name="bluetooth" size={20} color="#10b981" />
                <Text style={styles.statusText}>Connected</Text>
                <View style={[styles.statusIndicator, { backgroundColor: '#10b981' }]} />
              </View>
              <View style={styles.statusRow}>
                <Ionicons name="battery-full" size={20} color="#10b981" />
                <Text style={styles.statusText}>Battery: 78%</Text>
                <View style={styles.batteryBar}>
                  <View style={[styles.batteryFill, { width: '78%' }]} />
                </View>
              </View>
              <View style={styles.statusRow}>
                <Ionicons name="radio" size={20} color="#10b981" />
                <Text style={styles.statusText}>Signal: Excellent</Text>
                <View style={[styles.statusIndicator, { backgroundColor: '#10b981' }]} />
              </View>
            </View>
          </View>

          {/* Export Data */}
          <View style={styles.section}>
            <TouchableOpacity
              style={styles.exportButton}
              onPress={() => {/* Handle export */}}
              activeOpacity={0.8}>
              <LinearGradient
                colors={['#3b82f6', '#2563eb']}
                style={styles.exportGradient}>
                <Ionicons name="download" size={20} color="white" />
                <Text style={styles.exportButtonText}>Export Session Data</Text>
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
  metricsContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  metricCard: {
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
  metricIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#f8fafc',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  metricContent: {
    alignItems: 'center',
  },
  metricValue: {
    fontSize: 24,
    fontWeight: '700',
    color: '#0f172a',
  },
  metricUnit: {
    fontSize: 12,
    color: '#64748b',
    marginBottom: 4,
  },
  metricLabel: {
    fontSize: 12,
    color: '#64748b',
    textAlign: 'center',
  },
  chartContainer: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  waveformContainer: {
    gap: 8,
  },
  waveformTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#0f172a',
  },
  waveformChart: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  waveformLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  waveformLabel: {
    fontSize: 12,
    color: '#64748b',
  },
  statsContainer: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    gap: 12,
  },
  statRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  statLabel: {
    fontSize: 16,
    color: '#64748b',
  },
  statValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#0f172a',
  },
  deviceStatus: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    gap: 12,
  },
  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  statusText: {
    flex: 1,
    fontSize: 16,
    color: '#0f172a',
  },
  statusIndicator: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
  batteryBar: {
    flex: 1,
    height: 6,
    backgroundColor: '#e2e8f0',
    borderRadius: 3,
    overflow: 'hidden',
  },
  batteryFill: {
    height: '100%',
    backgroundColor: '#10b981',
    borderRadius: 3,
  },
  exportButton: {
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  exportGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    gap: 12,
  },
  exportButtonText: {
    fontSize: 18,
    fontWeight: '700',
    color: 'white',
  },
});