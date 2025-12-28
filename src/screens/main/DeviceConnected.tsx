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

type Props = NativeStackScreenProps<RootStackParamList, 'DeviceConnected'>;

export default function DeviceConnected({ navigation, route }: Props) {
  const { deviceId } = route.params;

  const handleStartSession = () => {
    navigation.navigate('SessionList');
  };

  const handleDisconnect = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color="#0f172a" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Device Connected</Text>
          <View style={{ width: 24 }} />
        </View>

        {/* Content */}
        <View style={styles.content}>
          {/* Connection Status */}
          <View style={styles.section}>
            <View style={styles.connectionCard}>
              <View style={styles.connectionIcon}>
                <Ionicons name="bluetooth" size={48} color="#10b981" />
              </View>
              <Text style={styles.connectionTitle}>Successfully Connected</Text>
              <Text style={styles.connectionSubtitle}>
                Your audio stimulator is ready for use
              </Text>
              <View style={styles.deviceInfo}>
                <Text style={styles.deviceId}>Device ID: {deviceId}</Text>
                <Text style={styles.connectionTime}>Connected just now</Text>
              </View>
            </View>
          </View>

          {/* Device Status */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Device Status</Text>
            <View style={styles.statusContainer}>
              <View style={styles.statusItem}>
                <Ionicons name="battery-full" size={24} color="#10b981" />
                <View style={styles.statusText}>
                  <Text style={styles.statusLabel}>Battery</Text>
                  <Text style={styles.statusValue}>85%</Text>
                </View>
              </View>
              <View style={styles.statusItem}>
                <Ionicons name="radio" size={24} color="#10b981" />
                <View style={styles.statusText}>
                  <Text style={styles.statusLabel}>Signal</Text>
                  <Text style={styles.statusValue}>Strong</Text>
                </View>
              </View>
              <View style={styles.statusItem}>
                <Ionicons name="thermometer" size={24} color="#10b981" />
                <View style={styles.statusText}>
                  <Text style={styles.statusLabel}>Temperature</Text>
                  <Text style={styles.statusValue}>Normal</Text>
                </View>
              </View>
            </View>
          </View>

          {/* Quick Actions */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Quick Actions</Text>
            <TouchableOpacity
              style={styles.startButton}
              onPress={handleStartSession}
              activeOpacity={0.8}>
              <LinearGradient
                colors={['#3b82f6', '#2563eb']}
                style={styles.startGradient}>
                <Ionicons name="play-circle" size={24} color="white" />
                <Text style={styles.startButtonText}>Start New Session</Text>
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.secondaryButton}
              onPress={() => navigation.navigate('SessionList')}
              activeOpacity={0.8}>
              <Ionicons name="list" size={20} color="#3b82f6" />
              <Text style={styles.secondaryButtonText}>View Saved Sessions</Text>
            </TouchableOpacity>
          </View>

          {/* Connection Info */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Connection Information</Text>
            <View style={styles.infoContainer}>
              <View style={styles.infoItem}>
                <Ionicons name="bluetooth" size={20} color="#64748b" />
                <Text style={styles.infoText}>Bluetooth Low Energy (BLE)</Text>
              </View>
              <View style={styles.infoItem}>
                <Ionicons name="time" size={20} color="#64748b" />
                <Text style={styles.infoText}>Real-time data streaming</Text>
              </View>
              <View style={styles.infoItem}>
                <Ionicons name="shield-checkmark" size={20} color="#64748b" />
                <Text style={styles.infoText}>Secure encrypted connection</Text>
              </View>
            </View>
          </View>

          {/* Disconnect */}
          <View style={styles.section}>
            <TouchableOpacity
              style={styles.disconnectButton}
              onPress={handleDisconnect}
              activeOpacity={0.8}>
              <Ionicons name="bluetooth-outline" size={20} color="#dc2626" />
              <Text style={styles.disconnectButtonText}>Disconnect Device</Text>
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
  connectionCard: {
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
  connectionIcon: {
    marginBottom: 16,
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#dcfce7',
    justifyContent: 'center',
    alignItems: 'center',
  },
  connectionTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#0f172a',
    marginBottom: 8,
  },
  connectionSubtitle: {
    fontSize: 16,
    color: '#64748b',
    textAlign: 'center',
    marginBottom: 16,
  },
  deviceInfo: {
    alignItems: 'center',
    gap: 4,
  },
  deviceId: {
    fontSize: 14,
    color: '#64748b',
    fontWeight: '500',
  },
  connectionTime: {
    fontSize: 12,
    color: '#94a3b8',
  },
  statusContainer: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    gap: 16,
  },
  statusItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  statusText: {
    flex: 1,
  },
  statusLabel: {
    fontSize: 14,
    color: '#64748b',
  },
  statusValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#0f172a',
  },
  startButton: {
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  startGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    gap: 12,
  },
  startButtonText: {
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
    marginTop: 12,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  secondaryButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#3b82f6',
  },
  infoContainer: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    gap: 12,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  infoText: {
    fontSize: 14,
    color: '#475569',
    flex: 1,
  },
  disconnectButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#fecaca',
  },
  disconnectButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#dc2626',
  },
});