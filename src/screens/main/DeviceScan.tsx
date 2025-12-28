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

type Props = NativeStackScreenProps<RootStackParamList, 'DeviceScan'>;

export default function DeviceScan({ navigation }: Props) {
  const [isScanning, setIsScanning] = useState(false);
  const [devices, setDevices] = useState([
    { id: '1', name: 'Stimulator-A1', rssi: -45, type: 'Audio Stimulator' },
    { id: '2', name: 'Stimulator-B2', rssi: -52, type: 'Neuro Stimulator' },
    { id: '3', name: 'Stimulator-C3', rssi: -38, type: 'Audio Stimulator' },
  ]);

  const handleScan = () => {
    setIsScanning(true);
    // Simulate scanning
    setTimeout(() => {
      setIsScanning(false);
    }, 2000);
  };

  const handleDevicePress = (deviceId: string) => {
    navigation.navigate('DeviceDetails', { deviceId });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color="#0f172a" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Device Scan</Text>
          <View style={{ width: 24 }} />
        </View>

        {/* Content */}
        <View style={styles.content}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Find Nearby Devices</Text>
            <Text style={styles.sectionSubtitle}>
              Scan for available audio stimulation devices in your area
            </Text>

            <TouchableOpacity
              style={[styles.scanButton, isScanning && styles.scanButtonScanning]}
              onPress={handleScan}
              disabled={isScanning}
              activeOpacity={0.8}>
              <LinearGradient
                colors={isScanning ? ['#64748b', '#475569'] : ['#3b82f6', '#2563eb']}
                style={styles.scanGradient}>
                <Ionicons
                  name={isScanning ? 'radio' : 'bluetooth'}
                  size={24}
                  color="white"
                />
                <Text style={styles.scanButtonText}>
                  {isScanning ? 'Scanning...' : 'Start Scan'}
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>

          {devices.length > 0 && (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Found Devices</Text>
              <View style={styles.devicesContainer}>
                {devices.map((device) => (
                  <TouchableOpacity
                    key={device.id}
                    style={styles.deviceCard}
                    onPress={() => handleDevicePress(device.id)}
                    activeOpacity={0.7}>
                    <View style={styles.deviceLeft}>
                      <View style={styles.deviceIcon}>
                        <Ionicons name="bluetooth" size={20} color="#3b82f6" />
                      </View>
                      <View style={styles.deviceInfo}>
                        <Text style={styles.deviceName}>{device.name}</Text>
                        <Text style={styles.deviceType}>{device.type}</Text>
                      </View>
                    </View>
                    <View style={styles.deviceRight}>
                      <Text style={styles.deviceRssi}>{device.rssi} dBm</Text>
                      <Ionicons name="chevron-forward" size={20} color="#64748b" />
                    </View>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          )}

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Connection Tips</Text>
            <View style={styles.tipsContainer}>
              <View style={styles.tipItem}>
                <Ionicons name="information-circle" size={20} color="#3b82f6" />
                <Text style={styles.tipText}>Ensure Bluetooth is enabled on your device</Text>
              </View>
              <View style={styles.tipItem}>
                <Ionicons name="location" size={20} color="#3b82f6" />
                <Text style={styles.tipText}>Location services help find nearby devices</Text>
              </View>
              <View style={styles.tipItem}>
                <Ionicons name="battery-full" size={20} color="#3b82f6" />
                <Text style={styles.tipText}>Keep devices charged for best performance</Text>
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
  sectionSubtitle: {
    fontSize: 15,
    color: '#64748b',
    lineHeight: 22,
  },
  scanButton: {
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  scanButtonScanning: {
    opacity: 0.7,
  },
  scanGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    gap: 12,
  },
  scanButtonText: {
    fontSize: 18,
    fontWeight: '700',
    color: 'white',
  },
  devicesContainer: {
    gap: 8,
  },
  deviceCard: {
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
  deviceLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  deviceIcon: {
    marginRight: 12,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#eff6ff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  deviceInfo: {
    gap: 2,
  },
  deviceName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#0f172a',
  },
  deviceType: {
    fontSize: 13,
    color: '#64748b',
  },
  deviceRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  deviceRssi: {
    fontSize: 12,
    color: '#64748b',
    fontWeight: '500',
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