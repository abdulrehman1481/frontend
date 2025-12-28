import React from 'react';
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

type Props = NativeStackScreenProps<RootStackParamList, 'HistoryDetail'>;

export default function HistoryDetail({ navigation, route }: Props) {
  const { historyId } = route.params;

  // Mock session data - in real app, fetch based on historyId
  const session = {
    id: historyId,
    name: 'Morning Relaxation',
    date: '2024-01-15',
    time: '08:30',
    duration: '15:00',
    type: 'Relaxation',
    effectiveness: 85,
    notes: 'Felt very relaxed and focused after the session. Good start to the day.',
    parameters: {
      frequency: '40 Hz',
      intensity: '30%',
      waveform: 'Sine Wave',
    },
    metrics: {
      avgHeartRate: 72,
      avgStressLevel: 25,
      avgFocusLevel: 78,
      peakFocus: 89,
    },
    brainwaveData: [45, 52, 48, 55, 50, 47, 53, 49, 46, 51], // Mock data points
  };

  const renderBrainwaveChart = () => {
    const points = session.brainwaveData.map((value, index) => {
      const x = (index / (session.brainwaveData.length - 1)) * (width - 80);
      const y = 100 - ((value - 40) / 20) * 80; // Scale from 40-60 range to 80px height
      return `${index === 0 ? 'M' : 'L'} ${x} ${y}`;
    }).join(' ');

    return (
      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Brainwave Activity</Text>
        <View style={styles.chart}>
          <Svg width={width - 80} height={100} style={{ backgroundColor: 'transparent' }}>
            <Path
              d={points}
              stroke="#3b82f6"
              strokeWidth="2"
              fill="none"
            />
          </Svg>
        </View>
        <View style={styles.chartLabels}>
          <Text style={styles.chartLabel}>0s</Text>
          <Text style={styles.chartLabel}>15min</Text>
        </View>
      </View>
    );
  };

  const getEffectivenessColor = (effectiveness: number) => {
    if (effectiveness >= 85) return '#10b981';
    if (effectiveness >= 70) return '#f59e0b';
    return '#ef4444';
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color="#0f172a" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Session Details</Text>
          <View style={{ width: 24 }} />
        </View>

        {/* Content */}
        <View style={styles.content}>
          {/* Session Overview */}
          <View style={styles.section}>
            <View style={styles.overviewCard}>
              <Text style={styles.sessionName}>{session.name}</Text>
              <Text style={styles.sessionDate}>
                {session.date} at {session.time}
              </Text>
              <View style={styles.overviewStats}>
                <View style={styles.statItem}>
                  <Ionicons name="time" size={20} color="#64748b" />
                  <Text style={styles.statText}>{session.duration}</Text>
                </View>
                <View style={styles.statItem}>
                  <Ionicons name="star" size={20} color={getEffectivenessColor(session.effectiveness)} />
                  <Text style={[styles.statText, { color: getEffectivenessColor(session.effectiveness) }]}>
                    {session.effectiveness}% Effective
                  </Text>
                </View>
              </View>
            </View>
          </View>

          {/* Parameters */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Session Parameters</Text>
            <View style={styles.parametersContainer}>
              <View style={styles.parameterRow}>
                <Text style={styles.parameterLabel}>Frequency</Text>
                <Text style={styles.parameterValue}>{session.parameters.frequency}</Text>
              </View>
              <View style={styles.parameterRow}>
                <Text style={styles.parameterLabel}>Intensity</Text>
                <Text style={styles.parameterValue}>{session.parameters.intensity}</Text>
              </View>
              <View style={styles.parameterRow}>
                <Text style={styles.parameterLabel}>Waveform</Text>
                <Text style={styles.parameterValue}>{session.parameters.waveform}</Text>
              </View>
            </View>
          </View>

          {/* Metrics */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Session Metrics</Text>
            <View style={styles.metricsContainer}>
              <View style={styles.metricCard}>
                <View style={styles.metricIcon}>
                  <Ionicons name="heart" size={24} color="#ef4444" />
                </View>
                <View style={styles.metricContent}>
                  <Text style={styles.metricValue}>{session.metrics.avgHeartRate}</Text>
                  <Text style={styles.metricUnit}>BPM</Text>
                  <Text style={styles.metricLabel}>Avg Heart Rate</Text>
                </View>
              </View>

              <View style={styles.metricCard}>
                <View style={styles.metricIcon}>
                  <Ionicons name="thermometer" size={24} color="#f59e0b" />
                </View>
                <View style={styles.metricContent}>
                  <Text style={styles.metricValue}>{session.metrics.avgStressLevel}</Text>
                  <Text style={styles.metricUnit}>%</Text>
                  <Text style={styles.metricLabel}>Avg Stress</Text>
                </View>
              </View>

              <View style={styles.metricCard}>
                <View style={styles.metricIcon}>
                  <Ionicons name="bulb" size={24} color="#10b981" />
                </View>
                <View style={styles.metricContent}>
                  <Text style={styles.metricValue}>{session.metrics.avgFocusLevel}</Text>
                  <Text style={styles.metricUnit}>%</Text>
                  <Text style={styles.metricLabel}>Avg Focus</Text>
                </View>
              </View>

              <View style={styles.metricCard}>
                <View style={styles.metricIcon}>
                  <Ionicons name="trending-up" size={24} color="#8b5cf6" />
                </View>
                <View style={styles.metricContent}>
                  <Text style={styles.metricValue}>{session.metrics.peakFocus}</Text>
                  <Text style={styles.metricUnit}>%</Text>
                  <Text style={styles.metricLabel}>Peak Focus</Text>
                </View>
              </View>
            </View>
          </View>

          {/* Brainwave Chart */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Brainwave Activity</Text>
            <View style={styles.chartCard}>
              {renderBrainwaveChart()}
            </View>
          </View>

          {/* Notes */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Session Notes</Text>
            <View style={styles.notesContainer}>
              <Text style={styles.notesText}>{session.notes}</Text>
            </View>
          </View>

          {/* Actions */}
          <View style={styles.section}>
            <View style={styles.actionsContainer}>
              <TouchableOpacity
                style={styles.actionButton}
                onPress={() => {/* Handle repeat */}}
                activeOpacity={0.8}>
                <LinearGradient
                  colors={['#3b82f6', '#2563eb']}
                  style={styles.actionGradient}>
                  <Ionicons name="repeat" size={20} color="white" />
                  <Text style={styles.actionButtonText}>Repeat Session</Text>
                </LinearGradient>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.secondaryButton}
                onPress={() => {/* Handle export */}}
                activeOpacity={0.8}>
                <Ionicons name="download" size={20} color="#3b82f6" />
                <Text style={styles.secondaryButtonText}>Export Data</Text>
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
  overviewCard: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 20,
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
  sessionDate: {
    fontSize: 16,
    color: '#64748b',
    marginBottom: 16,
  },
  overviewStats: {
    gap: 8,
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  statText: {
    fontSize: 16,
    color: '#0f172a',
  },
  parametersContainer: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    gap: 12,
  },
  parameterRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  parameterLabel: {
    fontSize: 16,
    color: '#64748b',
  },
  parameterValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#0f172a',
  },
  metricsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  metricCard: {
    flex: 1,
    minWidth: (width - 60) / 2 - 6,
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
  chartCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  chartContainer: {
    gap: 8,
  },
  chartTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#0f172a',
  },
  chart: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chartLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  chartLabel: {
    fontSize: 12,
    color: '#64748b',
  },
  notesContainer: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
  },
  notesText: {
    fontSize: 16,
    color: '#0f172a',
    lineHeight: 24,
  },
  actionsContainer: {
    gap: 12,
  },
  actionButton: {
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  actionGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    gap: 12,
  },
  actionButtonText: {
    fontSize: 18,
    fontWeight: '700',
    color: 'white',
  },
  secondaryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  secondaryButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#3b82f6',
  },
});