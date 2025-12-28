import React, { useState } from 'react';
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

type Props = NativeStackScreenProps<RootStackParamList, 'Dashboard'>;

export default function Dashboard({ navigation }: Props) {
  const [connectionStatus, setConnectionStatus] = useState('disconnected'); // 'connected', 'disconnected', 'connecting'

  const recentSessions = [
    { id: 1, date: '2025-11-15', duration: '30 min', device: 'Stimulator-A1', status: 'Completed' },
    { id: 2, date: '2025-11-14', duration: '25 min', device: 'Stimulator-A1', status: 'Completed' },
    { id: 3, date: '2025-11-13', duration: '20 min', device: 'Stimulator-B2', status: 'Stopped' },
  ];

  const healthMetrics = [
    { label: 'Sessions Today', value: '2', unit: 'sessions', trend: '+15%' },
    { label: 'Avg Duration', value: '27', unit: 'min', trend: '+8%' },
    { label: 'Device Battery', value: '85', unit: '%', trend: '-5%' },
  ];

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.headerTitle}>Dashboard</Text>
            <Text style={styles.headerSubtitle}>Welcome back, Dr. Sarah</Text>
          </View>
          <View style={styles.headerRight}>
            {/* Connection Status */}
            <View
              style={[
                styles.connectionStatus,
                connectionStatus === 'connected'
                  ? styles.connected
                  : connectionStatus === 'connecting'
                  ? styles.connecting
                  : styles.disconnected,
              ]}>
              <View
                style={[
                  styles.statusDot,
                  connectionStatus === 'connected'
                    ? styles.dotConnected
                    : connectionStatus === 'connecting'
                    ? styles.dotConnecting
                    : styles.dotDisconnected,
                ]}
              />
              <Text
                style={[
                  styles.statusText,
                  connectionStatus === 'connected'
                    ? styles.textConnected
                    : connectionStatus === 'connecting'
                    ? styles.textConnecting
                    : styles.textDisconnected,
                ]}>
                {connectionStatus}
              </Text>
            </View>
            {/* Settings Button */}
            <TouchableOpacity
              onPress={() => navigation.navigate('Settings')}
              style={styles.settingsButton}
              activeOpacity={0.7}>
              <Ionicons name="settings" size={24} color="#64748b" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Dashboard Content */}
        <View style={styles.content}>
          {/* Quick Actions */}
          <View style={styles.quickActions}>
            {/* Connect Device Card */}
            <TouchableOpacity
              onPress={() => navigation.navigate('DeviceScan')}
              style={styles.actionCard}
              activeOpacity={0.8}>
              <LinearGradient colors={['#3b82f6', '#2563eb']} style={styles.actionGradient}>
                <View style={styles.actionContent}>
                  <View style={styles.actionIcon}>
                    <Ionicons name="bluetooth" size={28} color="white" />
                  </View>
                  <View style={styles.actionTextContainer}>
                    <Text style={styles.actionTitle}>Connect Device</Text>
                    <Text style={styles.actionSubtitle}>Scan for nearby devices</Text>
                  </View>
                  <Ionicons name="chevron-forward" size={24} color="rgba(255, 255, 255, 0.6)" />
                </View>
              </LinearGradient>
            </TouchableOpacity>

            {/* Start Session Card */}
            <TouchableOpacity
              onPress={() => navigation.navigate('SessionList')}
              style={styles.actionCard}
              activeOpacity={0.8}>
              <LinearGradient colors={['#10b981', '#059669']} style={styles.actionGradient}>
                <View style={styles.actionContent}>
                  <View style={styles.actionIcon}>
                    <Ionicons name="play-circle" size={28} color="white" />
                  </View>
                  <View style={styles.actionTextContainer}>
                    <Text style={styles.actionTitle}>Start Session</Text>
                    <Text style={styles.actionSubtitle}>Begin a new stimulation session</Text>
                  </View>
                  <Ionicons name="chevron-forward" size={24} color="rgba(255, 255, 255, 0.6)" />
                </View>
              </LinearGradient>
            </TouchableOpacity>
          </View>

          {/* Health Metrics */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Health Metrics</Text>
            <View style={styles.metricsContainer}>
              {healthMetrics.map((metric, index) => (
                <View key={index} style={styles.metricCard}>
                  <View style={styles.metricHeader}>
                    <Text style={styles.metricLabel}>{metric.label}</Text>
                    <View
                      style={[
                        styles.metricTrend,
                        metric.trend.startsWith('+')
                          ? styles.trendPositive
                          : styles.trendNegative,
                      ]}>
                      <Text
                        style={[
                          styles.trendText,
                          metric.trend.startsWith('+')
                            ? styles.trendTextPositive
                            : styles.trendTextNegative,
                        ]}>
                        {metric.trend}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.metricValue}>
                    <Text style={styles.metricNumber}>{metric.value}</Text>
                    <Text style={styles.metricUnit}>{metric.unit}</Text>
                  </View>
                </View>
              ))}
            </View>
          </View>

          {/* Recent Sessions */}
          <View style={styles.section}>
            <View style={styles.sessionsHeader}>
              <Text style={styles.sectionTitle}>Recent Sessions</Text>
              <TouchableOpacity onPress={() => navigation.navigate('History')} activeOpacity={0.7}>
                <Text style={styles.viewAll}>View All</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.sessionsContainer}>
              {recentSessions.map((session, index) => (
                <TouchableOpacity
                  key={session.id}
                  style={[
                    styles.sessionCard,
                    index !== recentSessions.length - 1 && styles.sessionCardBorder,
                  ]}
                  activeOpacity={0.7}>
                  <View style={styles.sessionLeft}>
                    <View style={styles.sessionIconContainer}>
                      <Ionicons
                        name={session.status === 'Completed' ? 'checkmark-circle' : 'stop-circle'}
                        size={24}
                        color={session.status === 'Completed' ? '#10b981' : '#f59e0b'}
                      />
                    </View>
                    <View style={styles.sessionInfo}>
                      <Text style={styles.sessionDate}>{session.date}</Text>
                      <Text style={styles.sessionDevice}>{session.device}</Text>
                    </View>
                  </View>
                  <View style={styles.sessionRight}>
                    <Text style={styles.sessionDuration}>{session.duration}</Text>
                    <View
                      style={[
                        styles.sessionStatus,
                        session.status === 'Completed'
                          ? styles.statusCompleted
                          : styles.statusStopped,
                      ]}>
                      <Text
                        style={[
                          styles.statusText,
                          session.status === 'Completed'
                            ? styles.statusTextCompleted
                            : styles.statusTextStopped,
                        ]}>
                        {session.status}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Usage Trends Chart */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Usage Trends</Text>
            <View style={styles.chartCard}>
              <View style={styles.chartPlaceholder}>
                <Ionicons name="trending-up" size={48} color="#94a3b8" />
                <Text style={styles.chartText}>Chart visualization</Text>
                <Text style={styles.chartSubtext}>Analytics data will appear here</Text>
              </View>
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
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 24,
    gap: 16,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  settingsButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: '700',
    color: '#0f172a',
    letterSpacing: -0.5,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#64748b',
    marginTop: 4,
  },
  connectionStatus: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  connected: {
    backgroundColor: '#d1fae5',
  },
  connecting: {
    backgroundColor: '#fef3c7',
  },
  disconnected: {
    backgroundColor: '#f1f5f9',
  },
  statusDot: {
    marginRight: 8,
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  dotConnected: {
    backgroundColor: '#059669',
  },
  dotConnecting: {
    backgroundColor: '#f59e0b',
  },
  dotDisconnected: {
    backgroundColor: '#94a3b8',
  },
  statusText: {
    fontSize: 13,
    fontWeight: '600',
    textTransform: 'capitalize',
  },
  textConnected: {
    color: '#047857',
  },
  textConnecting: {
    color: '#d97706',
  },
  textDisconnected: {
    color: '#475569',
  },
  content: {
    padding: 20,
    gap: 28,
  },
  quickActions: {
    gap: 12,
  },
  actionCard: {
    borderRadius: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  actionGradient: {
    padding: 20,
  },
  actionContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionIcon: {
    marginRight: 16,
    width: 56,
    height: 56,
    borderRadius: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionTextContainer: {
    flex: 1,
  },
  actionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: 'white',
    marginBottom: 4,
  },
  actionSubtitle: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.85)',
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
    borderRadius: 16,
    backgroundColor: 'white',
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  metricHeader: {
    marginBottom: 12,
  },
  metricLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: '#64748b',
    marginBottom: 8,
  },
  metricTrend: {
    alignSelf: 'flex-start',
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  trendPositive: {
    backgroundColor: '#d1fae5',
  },
  trendNegative: {
    backgroundColor: '#fee2e2',
  },
  trendText: {
    fontSize: 11,
    fontWeight: '700',
  },
  trendTextPositive: {
    color: '#047857',
  },
  trendTextNegative: {
    color: '#dc2626',
  },
  metricValue: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  metricNumber: {
    fontSize: 28,
    fontWeight: '800',
    color: '#0f172a',
  },
  metricUnit: {
    marginLeft: 4,
    fontSize: 13,
    fontWeight: '500',
    color: '#64748b',
  },
  sessionsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  viewAll: {
    fontSize: 15,
    fontWeight: '600',
    color: '#3b82f6',
  },
  sessionsContainer: {
    borderRadius: 16,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
    overflow: 'hidden',
  },
  sessionCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  sessionCardBorder: {
    borderBottomWidth: 1,
    borderBottomColor: '#f1f5f9',
  },
  sessionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  sessionIconContainer: {
    marginRight: 12,
  },
  sessionInfo: {
    gap: 4,
  },
  sessionDate: {
    fontSize: 15,
    fontWeight: '600',
    color: '#0f172a',
  },
  sessionDevice: {
    fontSize: 13,
    color: '#64748b',
  },
  sessionRight: {
    alignItems: 'flex-end',
    gap: 6,
  },
  sessionDuration: {
    fontSize: 14,
    fontWeight: '600',
    color: '#475569',
  },
  sessionStatus: {
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  statusCompleted: {
    backgroundColor: '#d1fae5',
  },
  statusStopped: {
    backgroundColor: '#fef3c7',
  },
  statusTextCompleted: {
    color: '#047857',
  },
  statusTextStopped: {
    color: '#d97706',
  },
  chartCard: {
    borderRadius: 16,
    backgroundColor: 'white',
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  chartPlaceholder: {
    height: 200,
    borderRadius: 12,
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: '#e2e8f0',
    backgroundColor: '#f8fafc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  chartText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#64748b',
    marginTop: 12,
  },
  chartSubtext: {
    fontSize: 13,
    color: '#94a3b8',
    marginTop: 4,
  },
});