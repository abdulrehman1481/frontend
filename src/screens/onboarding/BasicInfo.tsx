import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Picker } from '@react-native-picker/picker';

type RootStackParamList = {
  Login: undefined;
  BasicInfo: undefined;
  Questionnaire: undefined;
  MainTabs: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'BasicInfo'>;

export default function BasicInfo({ navigation }: Props) {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [sex, setSex] = useState('Male');
  const [age, setAge] = useState('');

  const handleContinue = () => {
    // Navigate to Questionnaire form
    navigation.navigate('Questionnaire');
  };

  const handleClose = () => {
    // Go back to login
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.title}>Basic Info</Text>
            <TouchableOpacity style={styles.closeButton} onPress={handleClose}>
              <Ionicons name="close" size={28} color="#dc2626" />
            </TouchableOpacity>
          </View>

          {/* Form Container */}
          <View style={styles.formContainer}>
            {/* Height and Weight Row */}
            <View style={styles.row}>
              <View style={styles.halfInput}>
                <Text style={styles.label}>Height</Text>
                <View style={styles.inputWrapper}>
                  <TextInput
                    style={styles.input}
                    placeholder="178"
                    value={height}
                    onChangeText={setHeight}
                    keyboardType="numeric"
                  />
                  <Text style={styles.unit}>cm</Text>
                </View>
              </View>

              <View style={styles.halfInput}>
                <Text style={styles.label}>Weight</Text>
                <View style={styles.inputWrapper}>
                  <TextInput
                    style={styles.input}
                    placeholder="80"
                    value={weight}
                    onChangeText={setWeight}
                    keyboardType="numeric"
                  />
                  <Text style={styles.unit}>kg</Text>
                </View>
              </View>
            </View>

            {/* Sex Selector */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Sex</Text>
              <View style={styles.pickerWrapper}>
                <Picker
                  selectedValue={sex}
                  onValueChange={(itemValue) => setSex(itemValue)}
                  style={styles.picker}>
                  <Picker.Item label="Male" value="Male" />
                  <Picker.Item label="Female" value="Female" />
                  <Picker.Item label="Other" value="Other" />
                </Picker>
              </View>
            </View>

            {/* Age Input */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Age</Text>
              <View style={styles.ageInputWrapper}>
                <TextInput
                  style={styles.ageInput}
                  placeholder="Enter your age"
                  value={age}
                  onChangeText={setAge}
                  keyboardType="numeric"
                />
              </View>
            </View>
          </View>

          {/* Baseline Psycho Section */}
          <View style={styles.psychoSection}>
            <Text style={styles.psychoTitle}>Baseline Psycho</Text>
            <View style={styles.privacyCard}>
              <View style={styles.privacyIcon}>
                <Ionicons name="shield-checkmark" size={20} color="#5DADE2" />
              </View>
              <Text style={styles.privacyText}>
                <Text style={styles.privacyBold}>We</Text> uses this information to calculate some
                metrics like stride length and{' '}
                <Text style={styles.privacyUnderline}>speed</Text>. To choose who sees this, go to{' '}
                <Text style={styles.privacyBold}>⚙️ settings &gt; Social & Sharing &gt; Privacy</Text>.
                Information in your profile is private by default.
              </Text>
            </View>
          </View>

          {/* Continue Button */}
          <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
            <Text style={styles.continueButtonText}>Continue to Questionnaire</Text>
            <Ionicons name="arrow-forward" size={20} color="white" />
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#A3D9F0',
  },
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1e293b',
  },
  closeButton: {
    padding: 4,
  },
  formContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 16,
    padding: 20,
    borderWidth: 3,
    borderColor: '#64748b',
    borderStyle: 'dashed',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 20,
  },
  halfInput: {
    flex: 1,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1e293b',
    marginBottom: 8,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1e293b',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  input: {
    flex: 1,
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  unit: {
    color: '#94a3b8',
    fontSize: 14,
    marginLeft: 8,
  },
  inputGroup: {
    marginBottom: 20,
  },
  pickerWrapper: {
    backgroundColor: '#1e293b',
    borderRadius: 8,
    overflow: 'hidden',
  },
  picker: {
    color: 'white',
    height: 50,
  },
  ageInputWrapper: {
    backgroundColor: '#1e293b',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  ageInput: {
    color: 'white',
    fontSize: 16,
  },
  psychoSection: {
    marginBottom: 24,
  },
  psychoTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 12,
  },
  privacyCard: {
    backgroundColor: '#1e293b',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    gap: 12,
  },
  privacyIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(93, 173, 226, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  privacyText: {
    flex: 1,
    color: '#cbd5e1',
    fontSize: 13,
    lineHeight: 20,
  },
  privacyBold: {
    fontWeight: '700',
    color: 'white',
  },
  privacyUnderline: {
    textDecorationLine: 'underline',
    color: 'white',
  },
  continueButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: '#5DADE2',
    paddingVertical: 16,
    borderRadius: 12,
    marginBottom: 24,
  },
  continueButtonText: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
  },
});
