import React from 'react';
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

type Props = NativeStackScreenProps<RootStackParamList, 'History'>;

export default function History({ navigation }: Props) {
  const sessions = [
    {
      id: '1',
      name: 'Morning Relaxation',
      date: '2024-01-15',
      time: '08:30',
      duration: '15 min',
      type: 'Relaxation',
      effectiveness: 85,
      notes: 'Felt very relaxed and focused',
    },
    {
      id: '2',
      name: 'Focus Enhancement',
      date: '2024-01-14',
      time: '14:00',
      duration: '30 min',
      type: 'Focus',
      effectiveness: 92,
      notes: 'Great concentration boost',
    },
    {
      id: '3',
      name: 'Sleep Preparation',
      date: '2024-01-13',
      time: '22:00',
      duration: '20 min',
      type: 'Sleep',
      effectiveness: 78,
      notes: 'Helped fall asleep faster',
    },
    {
      id: '4',
      name: 'Energy Boost',
      date: '2024-01-12',
      time: '07:15',
      duration: '10 min',
      type: 'Energy',
      effectiveness: 88,
      notes: 'Good morning energy',
    },
    {
      id: '5',
      name: 'Stress Relief',
      date: '2024-01-11',
      time: '19:45',
      duration: '25 min',
      type: 'Relaxation',
      effectiveness: 76,
      notes: 'Reduced anxiety levels',
    },
  ];

  const handleSessionPress = (sessionId: string) => {
    navigation.navigate('HistoryDetail', { historyId: sessionId });
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Relaxation': return '#10b981';
      case 'Focus': return '#3b82f6';
      case 'Sleep': return '#8b5cf6';
      case 'Energy': return '#f59e0b';
      default: return '#64748b';
    }
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
          <Text style={styles.headerTitle}>Session History</Text>
          <View style={{ width: 24 }} />
        </View>

        {/* Content */}
        <View style={styles.content}>
          {/* Summary Stats */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>This Week</Text>
            <View style={styles.statsContainer}>
              <View style={styles.statCard}>
                <Text style={styles.statNumber}>5</Text>
                <Text style={styles.statLabel}>Sessions</Text>
              </View>
              <View style={styles.statCard}>
                <Text style={styles.statNumber}>2h 40m</Text>
                <Text style={styles.statLabel}>Total Time</Text>
              </View>
              <View style={styles.statCard}>
                <Text style={styles.statNumber}>84%</Text>
                <Text style={styles.statLabel}>Avg Effectiveness</Text>
              </View>
            </View>
          </View>

          {/* Session List */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Recent Sessions</Text>
            <View style={styles.sessionsContainer}>
              {sessions.map((session) => (
                <TouchableOpacity
                  key={session.id}
                  style={styles.sessionCard}
                  onPress={() => handleSessionPress(session.id)}
                  activeOpacity={0.7}>
                  <View style={styles.sessionLeft}>
                    <View style={[styles.typeBadge, { backgroundColor: getTypeColor(session.type) + '20' }]}>
                      <Text style={[styles.typeText, { color: getTypeColor(session.type) }]}>
                        {session.type}
                      </Text>
                    </View>
                    <View style={styles.sessionInfo}>
                      <Text style={styles.sessionName}>{session.name}</Text>
                      <Text style={styles.sessionDate}>
                        {session.date} at {session.time}
                      </Text>
                      <View style={styles.sessionMeta}>
                        <View style={styles.metaItem}>
                          <Ionicons name="time" size={14} color="#64748b" />
                          <Text style={styles.metaText}>{session.duration}</Text>
                        </View>
                        <View style={styles.effectivenessBadge}>
                          <Text style={[styles.effectivenessText, { color: getEffectivenessColor(session.effectiveness) }]}>
                            {session.effectiveness}%
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                  <Ionicons name="chevron-forward" size={20} color="#64748b" />
                </TouchableOpacity>
              ))}
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
                <Text style={styles.exportButtonText}>Export All Data</Text>
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
  statsContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  statCard: {
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
  statNumber: {
    fontSize: 24,
    fontWeight: '700',
    color: '#0f172a',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: '#64748b',
    textAlign: 'center',
  },
  sessionsContainer: {
    gap: 8,
  },
  sessionCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  sessionLeft: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    flex: 1,
  },
  typeBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    marginRight: 12,
    marginTop: 2,
  },
  typeText: {
    fontSize: 12,
    fontWeight: '600',
  },
  sessionInfo: {
    flex: 1,
    gap: 4,
  },
  sessionName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#0f172a',
  },
  sessionDate: {
    fontSize: 14,
    color: '#64748b',
  },
  sessionMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginTop: 4,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  metaText: {
    fontSize: 12,
    color: '#64748b',
  },
  effectivenessBadge: {
    backgroundColor: '#f8fafc',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
  },
  effectivenessText: {
    fontSize: 12,
    fontWeight: '600',
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