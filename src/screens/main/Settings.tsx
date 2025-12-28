import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Switch, Alert } from 'react-native';
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

type Props = NativeStackScreenProps<RootStackParamList, 'Settings'>;

export default function Settings({ navigation }: Props) {
  const [notifications, setNotifications] = useState(true);
  const [autoConnect, setAutoConnect] = useState(false);
  const [dataSync, setDataSync] = useState(true);
  const [soundEnabled, setSoundEnabled] = useState(true);

  const handleLogout = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Logout', style: 'destructive', onPress: () => navigation.navigate('Welcome') },
      ]
    );
  };

  const handleResetData = () => {
    Alert.alert(
      'Reset Data',
      'This will delete all your session data. This action cannot be undone.',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Reset', style: 'destructive', onPress: () => {/* Handle reset */} },
      ]
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
          <Text style={styles.headerTitle}>Settings</Text>
          <View style={{ width: 24 }} />
        </View>

        {/* Content */}
        <View style={styles.content}>
          {/* Profile Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Profile</Text>
            <View style={styles.profileCard}>
              <View style={styles.profileAvatar}>
                <Ionicons name="person" size={32} color="#3b82f6" />
              </View>
              <View style={styles.profileInfo}>
                <Text style={styles.profileName}>John Doe</Text>
                <Text style={styles.profileEmail}>john.doe@example.com</Text>
              </View>
              <TouchableOpacity style={styles.editButton}>
                <Ionicons name="pencil" size={20} color="#64748b" />
              </TouchableOpacity>
            </View>
          </View>

          {/* Device Settings */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Device Settings</Text>
            <View style={styles.settingsContainer}>
              <View style={styles.settingItem}>
                <View style={styles.settingLeft}>
                  <Ionicons name="bluetooth" size={24} color="#3b82f6" />
                  <View style={styles.settingText}>
                    <Text style={styles.settingTitle}>Auto-connect</Text>
                    <Text style={styles.settingSubtitle}>Automatically connect to last device</Text>
                  </View>
                </View>
                <Switch
                  value={autoConnect}
                  onValueChange={setAutoConnect}
                  trackColor={{ false: '#e2e8f0', true: '#3b82f6' }}
                  thumbColor={autoConnect ? '#ffffff' : '#f4f4f4'}
                />
              </View>

              <View style={styles.settingItem}>
                <View style={styles.settingLeft}>
                  <Ionicons name="volume-high" size={24} color="#10b981" />
                  <View style={styles.settingText}>
                    <Text style={styles.settingTitle}>Sound Effects</Text>
                    <Text style={styles.settingSubtitle}>Play sounds during sessions</Text>
                  </View>
                </View>
                <Switch
                  value={soundEnabled}
                  onValueChange={setSoundEnabled}
                  trackColor={{ false: '#e2e8f0', true: '#10b981' }}
                  thumbColor={soundEnabled ? '#ffffff' : '#f4f4f4'}
                />
              </View>
            </View>
          </View>

          {/* App Settings */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>App Settings</Text>
            <View style={styles.settingsContainer}>
              <View style={styles.settingItem}>
                <View style={styles.settingLeft}>
                  <Ionicons name="notifications" size={24} color="#f59e0b" />
                  <View style={styles.settingText}>
                    <Text style={styles.settingTitle}>Notifications</Text>
                    <Text style={styles.settingSubtitle}>Session reminders and updates</Text>
                  </View>
                </View>
                <Switch
                  value={notifications}
                  onValueChange={setNotifications}
                  trackColor={{ false: '#e2e8f0', true: '#f59e0b' }}
                  thumbColor={notifications ? '#ffffff' : '#f4f4f4'}
                />
              </View>

              <View style={styles.settingItem}>
                <View style={styles.settingLeft}>
                  <Ionicons name="cloud" size={24} color="#8b5cf6" />
                  <View style={styles.settingText}>
                    <Text style={styles.settingTitle}>Data Sync</Text>
                    <Text style={styles.settingSubtitle}>Sync data across devices</Text>
                  </View>
                </View>
                <Switch
                  value={dataSync}
                  onValueChange={setDataSync}
                  trackColor={{ false: '#e2e8f0', true: '#8b5cf6' }}
                  thumbColor={dataSync ? '#ffffff' : '#f4f4f4'}
                />
              </View>
            </View>
          </View>

          {/* Data Management */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Data Management</Text>
            <View style={styles.dataContainer}>
              <TouchableOpacity
                style={styles.dataButton}
                onPress={() => {/* Handle export */}}
                activeOpacity={0.8}>
                <Ionicons name="download" size={20} color="#3b82f6" />
                <Text style={styles.dataButtonText}>Export All Data</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.dataButton}
                onPress={() => {/* Handle backup */}}
                activeOpacity={0.8}>
                <Ionicons name="cloud-upload" size={20} color="#10b981" />
                <Text style={styles.dataButtonText}>Backup to Cloud</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.dataButton, styles.dangerButton]}
                onPress={handleResetData}
                activeOpacity={0.8}>
                <Ionicons name="trash" size={20} color="#dc2626" />
                <Text style={styles.dangerButtonText}>Reset All Data</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* App Info */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>About</Text>
            <View style={styles.infoContainer}>
              <View style={styles.infoItem}>
                <Text style={styles.infoLabel}>Version</Text>
                <Text style={styles.infoValue}>1.0.0</Text>
              </View>
              <View style={styles.infoItem}>
                <Text style={styles.infoLabel}>Build</Text>
                <Text style={styles.infoValue}>2024.01.15</Text>
              </View>
              <TouchableOpacity
                style={styles.infoButton}
                onPress={() => {/* Handle privacy */}}
                activeOpacity={0.8}>
                <Text style={styles.infoButtonText}>Privacy Policy</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.infoButton}
                onPress={() => {/* Handle terms */}}
                activeOpacity={0.8}>
                <Text style={styles.infoButtonText}>Terms of Service</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Logout */}
          <View style={styles.section}>
            <TouchableOpacity
              style={styles.logoutButton}
              onPress={handleLogout}
              activeOpacity={0.8}>
              <Ionicons name="log-out" size={20} color="#dc2626" />
              <Text style={styles.logoutButtonText}>Logout</Text>
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
  profileCard: {
    flexDirection: 'row',
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
  profileAvatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#eff6ff',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#0f172a',
  },
  profileEmail: {
    fontSize: 14,
    color: '#64748b',
  },
  editButton: {
    padding: 8,
  },
  settingsContainer: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    gap: 16,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  settingLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  settingText: {
    marginLeft: 12,
    flex: 1,
  },
  settingTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#0f172a',
  },
  settingSubtitle: {
    fontSize: 14,
    color: '#64748b',
  },
  dataContainer: {
    gap: 8,
  },
  dataButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  dataButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#0f172a',
  },
  dangerButton: {
    borderColor: '#fecaca',
  },
  dangerButtonText: {
    color: '#dc2626',
  },
  infoContainer: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    gap: 12,
  },
  infoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  infoLabel: {
    fontSize: 16,
    color: '#64748b',
  },
  infoValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#0f172a',
  },
  infoButton: {
    paddingVertical: 8,
  },
  infoButtonText: {
    fontSize: 16,
    color: '#3b82f6',
    fontWeight: '500',
  },
  logoutButton: {
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
  logoutButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#dc2626',
  },
});