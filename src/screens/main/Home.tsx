import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

interface Device {
  id: string;
  name: string;
  type: 'wristband' | 'headset';
  connection: 'connected' | 'disconnected';
  battery: number;
}

interface Session {
  id: string;
  date: string;
  stimulator: string;
  duration: string;
  status: 'Completed' | 'Stopped';
}

export default function Home() {
  const [selectedMood, setSelectedMood] = useState<number | null>(null);
  const [selectedSleep, setSelectedSleep] = useState<number | null>(null);

  const devices: Device[] = [
    { id: 'WB-2024-001', name: 'Wristband', type: 'wristband', connection: 'connected', battery: 85 },
    { id: 'HS-2024-002', name: 'Headset', type: 'headset', connection: 'connected', battery: 72 },
  ];

  const recentSessions: Session[] = [
    { id: '1', date: '2025-11-15', stimulator: 'Stimulator-A1', duration: '30 min', status: 'Completed' },
    { id: '2', date: '2025-11-14', stimulator: 'Stimulator-A1', duration: '25 min', status: 'Completed' },
    { id: '3', date: '2025-11-13', stimulator: 'Stimulator-B2', duration: '20 min', status: 'Stopped' },
  ];

  const moodIcons = ['sad', 'sad-outline', 'remove-circle-outline', 'happy-outline', 'happy'];
  const sleepIcons = ['moon', 'moon-outline', 'sunny'];

  const handleMoodSelect = (index: number) => {
    setSelectedMood(index);
    // TODO: Send mood data to server
    console.log('Mood selected:', index);
  };

  const handleSleepSelect = (index: number) => {
    setSelectedSleep(index);
    // TODO: Send sleep quality data to server
    console.log('Sleep quality selected:', index);
  };

  const handleSync = (deviceId: string) => {
    // TODO: Sync device data to server
    console.log('Syncing device:', deviceId);
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* Header with Greeting */}
        <View style={styles.header}>
          <Text style={styles.greeting}>Hello (Username)</Text>
          <Text style={styles.subtitle}>Main Menu - Home</Text>
        </View>

        {/* Device Connectivity Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Connected Devices</Text>
          {devices.map((device) => (
            <View key={device.id} style={styles.deviceCard}>
              <View style={styles.deviceIcon}>
                <Ionicons
                  name={device.type === 'wristband' ? 'watch' : 'headset'}
                  size={32}
                  color="#5DADE2"
                />
              </View>
              <View style={styles.deviceInfo}>
                <Text style={styles.deviceName}>{device.name}</Text>
                <Text style={styles.deviceId}>Device ID: {device.id}</Text>
                <View style={styles.deviceStats}>
                  <View style={styles.statItem}>
                    <Ionicons
                      name="bluetooth"
                      size={16}
                      color={device.connection === 'connected' ? '#10b981' : '#ef4444'}
                    />
                    <Text
                      style={[
                        styles.statText,
                        { color: device.connection === 'connected' ? '#10b981' : '#ef4444' },
                      ]}>
                      {device.connection === 'connected' ? 'Connected' : 'Disconnected'}
                    </Text>
                  </View>
                  <View style={styles.statItem}>
                    <Ionicons name="battery-charging" size={16} color="#5DADE2" />
                    <Text style={styles.statText}>{device.battery}%</Text>
                  </View>
                </View>
              </View>
              <TouchableOpacity
                style={styles.syncButton}
                onPress={() => handleSync(device.id)}>
                <Ionicons name="sync" size={24} color="#5DADE2" />
              </TouchableOpacity>
            </View>
          ))}
        </View>

        {/* Stimulation Progress Placeholder */}
        <View style={styles.section}>
          <View style={styles.placeholderBox}>
            <Ionicons name="pulse" size={32} color="#64748b" />
            <Text style={styles.placeholderText}>Stimulation Progress</Text>
            <Text style={styles.placeholderSubtext}>Start a session to see progress</Text>
          </View>
        </View>

        {/* Health Info Summary */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Health Summary</Text>
          <View style={styles.healthGrid}>
            <View style={styles.healthCard}>
              <Ionicons name="bed" size={24} color="#5DADE2" />
              <Text style={styles.healthValue}>7h 34m</Text>
              <Text style={styles.healthLabel}>Sleep</Text>
            </View>
            <View style={styles.healthCard}>
              <Ionicons name="fitness" size={24} color="#5DADE2" />
              <Text style={styles.healthValue}>xxx</Text>
              <Text style={styles.healthLabel}>Stress</Text>
            </View>
            <View style={styles.healthCard}>
              <Ionicons name="walk" size={24} color="#5DADE2" />
              <Text style={styles.healthValue}>xxx</Text>
              <Text style={styles.healthLabel}>Steps</Text>
            </View>
            <View style={styles.healthCard}>
              <Ionicons name="heart" size={24} color="#5DADE2" />
              <Text style={styles.healthValue}>xxx</Text>
              <Text style={styles.healthLabel}>HR</Text>
            </View>
            <View style={styles.healthCard}>
              <Ionicons name="pulse" size={24} color="#5DADE2" />
              <Text style={styles.healthValue}>xxx</Text>
              <Text style={styles.healthLabel}>HRV</Text>
            </View>
            <View style={styles.healthCard}>
              <Ionicons name="thermometer" size={24} color="#5DADE2" />
              <Text style={styles.healthValue}>xxx</Text>
              <Text style={styles.healthLabel}>Temp</Text>
            </View>
          </View>
        </View>

        {/* Subjective User Input - Mood */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>How do you fill today</Text>
          <View style={styles.moodContainer}>
            {moodIcons.map((icon, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.moodButton,
                  selectedMood === index && styles.moodButtonSelected,
                ]}
                onPress={() => handleMoodSelect(index)}>
                <Ionicons
                  name={icon as any}
                  size={32}
                  color={selectedMood === index ? '#5DADE2' : '#64748b'}
                />
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Subjective User Input - Sleep Quality */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Sleep Quality</Text>
          <View style={styles.sleepContainer}>
            {sleepIcons.map((icon, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.sleepButton,
                  selectedSleep === index && styles.sleepButtonSelected,
                ]}
                onPress={() => handleSleepSelect(index)}>
                <Ionicons
                  name={icon as any}
                  size={32}
                  color={selectedSleep === index ? '#5DADE2' : '#64748b'}
                />
                <Text style={styles.sleepLabel}>
                  {index === 0 ? 'Bad' : index === 1 ? 'Average' : 'Good'}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Recent Sessions */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Recent Sessions</Text>
            <TouchableOpacity>
              <Text style={styles.viewAllText}>View All</Text>
            </TouchableOpacity>
          </View>
          {recentSessions.map((session) => (
            <View key={session.id} style={styles.sessionCard}>
              <View style={styles.sessionIcon}>
                <Ionicons
                  name="checkmark-circle"
                  size={24}
                  color={session.status === 'Completed' ? '#10b981' : '#f59e0b'}
                />
              </View>
              <View style={styles.sessionInfo}>
                <Text style={styles.sessionDate}>{session.date}</Text>
                <Text style={styles.sessionDetails}>{session.stimulator}</Text>
              </View>
              <View style={styles.sessionMeta}>
                <Text style={styles.sessionDuration}>{session.duration}</Text>
                <Text
                  style={[
                    styles.sessionStatus,
                    {
                      color: session.status === 'Completed' ? '#10b981' : '#f59e0b',
                    },
                  ]}>
                  {session.status}
                </Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#A3D9F0',
    padding: 20,
    paddingTop: 16,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#334155',
    fontWeight: '500',
  },
  section: {
    padding: 20,
    paddingTop: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1e293b',
    marginBottom: 12,
  },
  viewAllText: {
    fontSize: 14,
    color: '#5DADE2',
    fontWeight: '600',
  },
  // Device Cards
  deviceCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8fafc',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  deviceIcon: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#e0f2fe',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  deviceInfo: {
    flex: 1,
  },
  deviceName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1e293b',
    marginBottom: 2,
  },
  deviceId: {
    fontSize: 12,
    color: '#64748b',
    marginBottom: 6,
  },
  deviceStats: {
    flexDirection: 'row',
    gap: 12,
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  statText: {
    fontSize: 12,
    fontWeight: '600',
  },
  syncButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#e0f2fe',
    justifyContent: 'center',
    alignItems: 'center',
  },
  // Placeholder
  placeholderBox: {
    backgroundColor: '#f8fafc',
    borderRadius: 12,
    padding: 32,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#e2e8f0',
    borderStyle: 'dashed',
  },
  placeholderText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#64748b',
    marginTop: 12,
  },
  placeholderSubtext: {
    fontSize: 14,
    color: '#94a3b8',
    marginTop: 4,
  },
  // Health Grid
  healthGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  healthCard: {
    width: '31%',
    backgroundColor: '#f8fafc',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  healthValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1e293b',
    marginTop: 8,
    marginBottom: 4,
  },
  healthLabel: {
    fontSize: 12,
    color: '#64748b',
    fontWeight: '600',
  },
  // Mood Container
  moodContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 8,
  },
  moodButton: {
    flex: 1,
    aspectRatio: 1,
    backgroundColor: '#f8fafc',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#e2e8f0',
  },
  moodButtonSelected: {
    backgroundColor: '#e0f2fe',
    borderColor: '#5DADE2',
  },
  // Sleep Container
  sleepContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  sleepButton: {
    flex: 1,
    backgroundColor: '#f8fafc',
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#e2e8f0',
  },
  sleepButtonSelected: {
    backgroundColor: '#e0f2fe',
    borderColor: '#5DADE2',
  },
  sleepLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#64748b',
    marginTop: 8,
  },
  // Session Cards
  sessionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8fafc',
    padding: 16,
    borderRadius: 12,
    marginBottom: 8,
  },
  sessionIcon: {
    marginRight: 12,
  },
  sessionInfo: {
    flex: 1,
  },
  sessionDate: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1e293b',
    marginBottom: 2,
  },
  sessionDetails: {
    fontSize: 13,
    color: '#64748b',
  },
  sessionMeta: {
    alignItems: 'flex-end',
  },
  sessionDuration: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1e293b',
    marginBottom: 2,
  },
  sessionStatus: {
    fontSize: 13,
    fontWeight: '600',
  },
});
