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

type Props = NativeStackScreenProps<RootStackParamList, 'SessionList'>;

export default function SessionList({ navigation }: Props) {
  const sessions = [
    {
      id: '1',
      name: 'Morning Relaxation',
      description: 'Gentle audio stimulation for morning wellness',
      duration: '15 min',
      type: 'Relaxation',
      lastUsed: 'Yesterday',
    },
    {
      id: '2',
      name: 'Focus Enhancement',
      description: 'High-frequency stimulation for concentration',
      duration: '30 min',
      type: 'Focus',
      lastUsed: '3 days ago',
    },
    {
      id: '3',
      name: 'Sleep Preparation',
      description: 'Low-frequency waves for better sleep',
      duration: '20 min',
      type: 'Sleep',
      lastUsed: '1 week ago',
    },
    {
      id: '4',
      name: 'Energy Boost',
      description: 'Stimulating frequencies for energy',
      duration: '10 min',
      type: 'Energy',
      lastUsed: '2 weeks ago',
    },
  ];

  const handleSessionPress = (sessionId: string) => {
    navigation.navigate('SessionRunning', { sessionId });
  };

  const handleCreateSession = () => {
    navigation.navigate('CreateSession');
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

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color="#0f172a" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Sessions</Text>
          <TouchableOpacity onPress={handleCreateSession} style={styles.addButton}>
            <Ionicons name="add" size={24} color="#3b82f6" />
          </TouchableOpacity>
        </View>

        {/* Content */}
        <View style={styles.content}>
          {/* Create New Session */}
          <View style={styles.section}>
            <TouchableOpacity
              style={styles.createButton}
              onPress={handleCreateSession}
              activeOpacity={0.8}>
              <LinearGradient
                colors={['#3b82f6', '#2563eb']}
                style={styles.createGradient}>
                <Ionicons name="add-circle" size={24} color="white" />
                <View style={styles.createText}>
                  <Text style={styles.createTitle}>Create New Session</Text>
                  <Text style={styles.createSubtitle}>Customize your audio stimulation</Text>
                </View>
              </LinearGradient>
            </TouchableOpacity>
          </View>

          {/* Saved Sessions */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Saved Sessions</Text>
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
                      <Text style={styles.sessionDescription}>{session.description}</Text>
                      <View style={styles.sessionMeta}>
                        <View style={styles.metaItem}>
                          <Ionicons name="time" size={14} color="#64748b" />
                          <Text style={styles.metaText}>{session.duration}</Text>
                        </View>
                        <View style={styles.metaItem}>
                          <Ionicons name="calendar" size={14} color="#64748b" />
                          <Text style={styles.metaText}>{session.lastUsed}</Text>
                        </View>
                      </View>
                    </View>
                  </View>
                  <Ionicons name="chevron-forward" size={20} color="#64748b" />
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Quick Start */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Quick Start</Text>
            <View style={styles.quickContainer}>
              <TouchableOpacity
                style={styles.quickCard}
                onPress={() => handleSessionPress('quick-relax')}
                activeOpacity={0.8}>
                <View style={styles.quickIcon}>
                  <Ionicons name="leaf" size={24} color="#10b981" />
                </View>
                <Text style={styles.quickTitle}>Quick Relax</Text>
                <Text style={styles.quickDuration}>5 min</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.quickCard}
                onPress={() => handleSessionPress('quick-focus')}
                activeOpacity={0.8}>
                <View style={styles.quickIcon}>
                  <Ionicons name="bulb" size={24} color="#3b82f6" />
                </View>
                <Text style={styles.quickTitle}>Quick Focus</Text>
                <Text style={styles.quickDuration}>10 min</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.quickCard}
                onPress={() => handleSessionPress('quick-energy')}
                activeOpacity={0.8}>
                <View style={styles.quickIcon}>
                  <Ionicons name="flash" size={24} color="#f59e0b" />
                </View>
                <Text style={styles.quickTitle}>Quick Energy</Text>
                <Text style={styles.quickDuration}>5 min</Text>
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
  addButton: {
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
    padding: 20,
    gap: 16,
  },
  createText: {
    flex: 1,
  },
  createTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: 'white',
    marginBottom: 4,
  },
  createSubtitle: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.8)',
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
  sessionDescription: {
    fontSize: 14,
    color: '#64748b',
    lineHeight: 20,
  },
  sessionMeta: {
    flexDirection: 'row',
    gap: 16,
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
  quickContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  quickCard: {
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
  quickIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#f8fafc',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  quickTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#0f172a',
    textAlign: 'center',
  },
  quickDuration: {
    fontSize: 12,
    color: '#64748b',
    marginTop: 4,
  },
});