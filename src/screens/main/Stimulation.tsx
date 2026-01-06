import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Switch } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

type StimulationType = 'Stress Relief' | 'Sleep Enhancement' | 'Focus Enhancement' | 'Adaptive';

export default function Stimulation() {
  const [stimulationEnabled, setStimulationEnabled] = useState(false);
  const [audioEnabled, setAudioEnabled] = useState(false);
  const [selectedStimulationType, setSelectedStimulationType] = useState<StimulationType>('Stress Relief');
  const [selectedSoundType, setSelectedSoundType] = useState<StimulationType>('Stress Relief');
  const [intensity, setIntensity] = useState(3);
  const [isPlaying, setIsPlaying] = useState(false);
  
  const dailyGoal = [7, 14, 21];
  const currentStreak = 7; // Mock data

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    console.log('Play/Pause audio');
  };

  const handleStop = () => {
    setIsPlaying(false);
    console.log('Stop audio');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerIcon}>
          <Ionicons name="ear" size={24} color="#5DADE2" />
        </View>
        <Text style={styles.headerTitle}>Menu - Stimulation</Text>
      </View>

      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* Daily Stimulation Goal */}
        <View style={styles.goalCard}>
          <Text style={styles.goalTitle}>Daily stimulation goal</Text>
          <View style={styles.goalCalendar}>
            {dailyGoal.map((days, index) => (
              <View key={index} style={styles.goalDay}>
                <Text style={styles.goalNumber}>{days}</Text>
                <Ionicons 
                  name={currentStreak >= days ? "gift" : "gift-outline"} 
                  size={24} 
                  color={currentStreak >= days ? "#5DADE2" : "#cbd5e1"} 
                />
              </View>
            ))}
          </View>
        </View>

        {/* Stimulation Type Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Stimulation type</Text>
            <Switch
              value={stimulationEnabled}
              onValueChange={setStimulationEnabled}
              trackColor={{ false: '#cbd5e1', true: '#5DADE2' }}
              thumbColor={stimulationEnabled ? '#ffffff' : '#f1f5f9'}
            />
          </View>
          <View style={styles.typeButtonsContainer}>
            {(['Stress Relief', 'Sleep Enhancement', 'Focus Enhancement', 'Adaptive'] as StimulationType[]).map((type) => (
              <TouchableOpacity
                key={type}
                style={[
                  styles.typeButton,
                  selectedStimulationType === type && styles.typeButtonActive,
                  !stimulationEnabled && styles.typeButtonDisabled
                ]}
                onPress={() => stimulationEnabled && setSelectedStimulationType(type)}
                disabled={!stimulationEnabled}>
                <Text style={[
                  styles.typeButtonText,
                  selectedStimulationType === type && styles.typeButtonTextActive
                ]}>
                  {type.split(' ')[0]}
                </Text>
                <Text style={[
                  styles.typeButtonSubtext,
                  selectedStimulationType === type && styles.typeButtonTextActive
                ]}>
                  {type.split(' ').slice(1).join(' ')}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          {selectedStimulationType === 'Adaptive' && stimulationEnabled && (
            <View style={styles.adaptiveNote}>
              <Ionicons name="information-circle" size={16} color="#5DADE2" />
              <Text style={styles.adaptiveNoteText}>
                Only in Adaptive mode user can change frequency or Stimulation type
              </Text>
            </View>
          )}
        </View>

        {/* Stimulation Settings */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Stimulation setting</Text>
          <View style={styles.settingsRow}>
            <TouchableOpacity style={styles.settingButton}>
              <Text style={styles.settingButtonText}>Intensity +/-</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.settingButton}>
              <Text style={styles.settingButtonText}>Device BLE</Text>
              <Text style={styles.settingButtonText}>Connection</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.settingButton}>
              <Text style={styles.settingButtonText}>Device</Text>
              <Text style={styles.settingButtonText}>Battery</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.settingButton}>
              <Text style={styles.settingButtonText}>Electrode</Text>
              <Text style={styles.settingButtonText}>Connection</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Sound Type Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Sound type</Text>
            <Switch
              value={audioEnabled}
              onValueChange={setAudioEnabled}
              trackColor={{ false: '#cbd5e1', true: '#5DADE2' }}
              thumbColor={audioEnabled ? '#ffffff' : '#f1f5f9'}
            />
          </View>
          <View style={styles.typeButtonsContainer}>
            {(['Stress Relief', 'Sleep Enhancement', 'Focus Enhancement', 'Adaptive'] as StimulationType[]).map((type) => (
              <TouchableOpacity
                key={type}
                style={[
                  styles.typeButton,
                  selectedSoundType === type && styles.typeButtonActive,
                  !audioEnabled && styles.typeButtonDisabled
                ]}
                onPress={() => audioEnabled && setSelectedSoundType(type)}
                disabled={!audioEnabled}>
                <Text style={[
                  styles.typeButtonText,
                  selectedSoundType === type && styles.typeButtonTextActive
                ]}>
                  {type.split(' ')[0]}
                </Text>
                <Text style={[
                  styles.typeButtonSubtext,
                  selectedSoundType === type && styles.typeButtonTextActive
                ]}>
                  {type.split(' ').slice(1).join(' ')}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          <View style={styles.noteContainer}>
            <Text style={styles.noteText}>
              For now these audios, we will Add later more
            </Text>
          </View>
        </View>

        {/* Audio Player Controls */}
        <View style={styles.playerContainer}>
          <View style={styles.playerControls}>
            <TouchableOpacity style={styles.playerButton} onPress={handleStop}>
              <View style={styles.stopButton} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.playerButtonMain} onPress={handlePlayPause}>
              <Ionicons 
                name={isPlaying ? "pause" : "play"} 
                size={32} 
                color="#ffffff" 
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.playerButton}>
              <Ionicons name="play-forward" size={24} color="#5DADE2" />
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
    backgroundColor: '#ffffff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#A3D9F0',
    padding: 16,
    gap: 12,
  },
  headerIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1e293b',
  },
  container: {
    flex: 1,
    backgroundColor: '#A3D9F0',
  },
  // Daily Goal Calendar
  goalCard: {
    backgroundColor: '#A3D9F0',
    padding: 16,
    paddingBottom: 8,
  },
  goalTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1e293b',
    marginBottom: 12,
  },
  goalCalendar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    gap: 16,
  },
  goalDay: {
    alignItems: 'center',
    gap: 4,
  },
  goalNumber: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1e293b',
  },
  // Sections
  section: {
    backgroundColor: '#ffffff',
    marginTop: 16,
    marginHorizontal: 16,
    padding: 16,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#5DADE2',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ef4444',
  },
  // Type Buttons
  typeButtonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  typeButton: {
    flex: 1,
    minWidth: '45%',
    backgroundColor: '#e0f2fe',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'transparent',
  },
  typeButtonActive: {
    backgroundColor: '#5DADE2',
    borderColor: '#5DADE2',
  },
  typeButtonDisabled: {
    opacity: 0.5,
  },
  typeButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1e293b',
  },
  typeButtonSubtext: {
    fontSize: 12,
    color: '#64748b',
    marginTop: 2,
  },
  typeButtonTextActive: {
    color: '#ffffff',
  },
  // Adaptive Note
  adaptiveNote: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 12,
    padding: 12,
    backgroundColor: '#e0f2fe',
    borderRadius: 8,
  },
  adaptiveNoteText: {
    flex: 1,
    fontSize: 12,
    color: '#1e293b',
    lineHeight: 18,
  },
  // Settings Row
  settingsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginTop: 12,
  },
  settingButton: {
    flex: 1,
    minWidth: '22%',
    backgroundColor: '#e0f2fe',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 60,
  },
  settingButtonText: {
    fontSize: 11,
    fontWeight: '600',
    color: '#1e293b',
    textAlign: 'center',
  },
  // Note Container
  noteContainer: {
    marginTop: 12,
    padding: 12,
    backgroundColor: '#f1f5f9',
    borderRadius: 8,
  },
  noteText: {
    fontSize: 12,
    color: '#64748b',
    textAlign: 'center',
  },
  // Audio Player
  playerContainer: {
    backgroundColor: '#ffffff',
    marginTop: 16,
    marginHorizontal: 16,
    marginBottom: 24,
    padding: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#5DADE2',
    alignItems: 'center',
  },
  playerControls: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 24,
  },
  playerButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#e0f2fe',
    justifyContent: 'center',
    alignItems: 'center',
  },
  stopButton: {
    width: 16,
    height: 16,
    backgroundColor: '#ef4444',
    borderRadius: 2,
  },
  playerButtonMain: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#5DADE2',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#5DADE2',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
});
