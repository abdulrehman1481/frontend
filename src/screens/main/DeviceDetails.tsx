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

type Props = NativeStackScreenProps<RootStackParamList, 'DeviceDetails'>;

export default function DeviceDetails({ navigation, route }: Props) {
  const { deviceId } = route.params;
  const [isConnecting, setIsConnecting] = useState(false);

  // Mock device data - in real app, fetch based on deviceId
  const device = {
    id: deviceId,
    name: 'Stimulator-A1',
    type: 'Audio Stimulator',
    firmware: 'v2.1.4',
    battery: 85,
    status: 'Available',
    lastConnected: '2 hours ago',
    features: ['Audio Stimulation', 'Neuro Feedback', 'Real-time Monitoring'],
  };

  const handleConnect = () => {
    setIsConnecting(true);
    // Simulate connection
    setTimeout(() => {
      setIsConnecting(false);
      navigation.navigate('DeviceConnected', { deviceId });
    }, 2000);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color="#0f172a" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Device Details</Text>
          <View style={{ width: 24 }} />
        </View>

        {/* Content */}
        <View style={styles.content}>
          {/* Device Overview */}
          <View style={styles.section}>
            <View style={styles.deviceOverview}>
              <View style={styles.deviceIcon}>
                <Ionicons name="bluetooth" size={32} color="#3b82f6" />
              </View>
              <View style={styles.deviceBasic}>
                <Text style={styles.deviceName}>{device.name}</Text>
                <Text style={styles.deviceType}>{device.type}</Text>
                <View style={styles.statusBadge}>
                  <View style={[styles.statusDot, { backgroundColor: '#10b981' }]} />
                  <Text style={styles.statusText}>{device.status}</Text>
                </View>
              </View>
            </View>
          </View>

          {/* Device Specs */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Device Information</Text>
            <View style={styles.specsContainer}>
              <View style={styles.specRow}>
                <Text style={styles.specLabel}>Firmware Version</Text>
                <Text style={styles.specValue}>{device.firmware}</Text>
              </View>
              <View style={styles.specRow}>
                <Text style={styles.specLabel}>Battery Level</Text>
                <View style={styles.batteryContainer}>
                  <View style={styles.batteryBar}>
                    <View style={[styles.batteryFill, { width: `${device.battery}%` }]} />
                  </View>
                  <Text style={styles.batteryText}>{device.battery}%</Text>
                </View>
              </View>
              <View style={styles.specRow}>
                <Text style={styles.specLabel}>Last Connected</Text>
                <Text style={styles.specValue}>{device.lastConnected}</Text>
              </View>
            </View>
          </View>

          {/* Features */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Features</Text>
            <View style={styles.featuresContainer}>
              {device.features.map((feature, index) => (
                <View key={index} style={styles.featureItem}>
                  <Ionicons name="checkmark-circle" size={20} color="#10b981" />
                  <Text style={styles.featureText}>{feature}</Text>
                </View>
              ))}
            </View>
          </View>

          {/* Connect Button */}
          <View style={styles.section}>
            <TouchableOpacity
              style={[styles.connectButton, isConnecting && styles.connectButtonConnecting]}
              onPress={handleConnect}
              disabled={isConnecting}
              activeOpacity={0.8}>
              <LinearGradient
                colors={isConnecting ? ['#64748b', '#475569'] : ['#10b981', '#059669']}
                style={styles.connectGradient}>
                <Ionicons
                  name={isConnecting ? 'radio' : 'bluetooth'}
                  size={24}
                  color="white"
                />
                <Text style={styles.connectButtonText}>
                  {isConnecting ? 'Connecting...' : 'Connect Device'}
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>

          {/* Connection Tips */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Connection Tips</Text>
            <View style={styles.tipsContainer}>
              <View style={styles.tipItem}>
                <Ionicons name="wifi" size={20} color="#3b82f6" />
                <Text style={styles.tipText}>Ensure stable Bluetooth connection</Text>
              </View>
              <View style={styles.tipItem}>
                <Ionicons name="battery-charging" size={20} color="#3b82f6" />
                <Text style={styles.tipText}>Charge device before long sessions</Text>
              </View>
              <View style={styles.tipItem}>
                <Ionicons name="shield-checkmark" size={20} color="#3b82f6" />
                <Text style={styles.tipText}>Keep firmware updated for best performance</Text>
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
  deviceOverview: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  deviceIcon: {
    marginRight: 16,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#eff6ff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  deviceBasic: {
    flex: 1,
    gap: 4,
  },
  deviceName: {
    fontSize: 24,
    fontWeight: '700',
    color: '#0f172a',
  },
  deviceType: {
    fontSize: 16,
    color: '#64748b',
  },
  statusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: 4,
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  statusText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#10b981',
  },
  specsContainer: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    gap: 16,
  },
  specRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  specLabel: {
    fontSize: 16,
    color: '#64748b',
  },
  specValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#0f172a',
  },
  batteryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  batteryBar: {
    flex: 1,
    height: 8,
    backgroundColor: '#e2e8f0',
    borderRadius: 4,
    overflow: 'hidden',
  },
  batteryFill: {
    height: '100%',
    backgroundColor: '#10b981',
    borderRadius: 4,
  },
  batteryText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#0f172a',
    minWidth: 35,
  },
  featuresContainer: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    gap: 12,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  featureText: {
    fontSize: 16,
    color: '#0f172a',
  },
  connectButton: {
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  connectButtonConnecting: {
    opacity: 0.7,
  },
  connectGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    gap: 12,
  },
  connectButtonText: {
    fontSize: 18,
    fontWeight: '700',
    color: 'white',
  },
  tipsContainer: {
    gap: 12,
  },
  tipItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  tipText: {
    fontSize: 14,
    color: '#475569',
    flex: 1,
  },
});