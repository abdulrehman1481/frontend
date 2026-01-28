import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PsychologicalInsight from '../screens/main/PsychologicalInsight';
import BAIQuestionnaire from '../screens/questionnaires/BAIQuestionnaire';
import BDIQuestionnaire from '../screens/questionnaires/BDIQuestionnaire';
import CFQQuestionnaire from '../screens/questionnaires/CFQQuestionnaire';
import GAD7Questionnaire from '../screens/questionnaires/GAD7Questionnaire';
import PCL5Questionnaire from '../screens/questionnaires/PCL5Questionnaire';
import PHQ9Questionnaire from '../screens/questionnaires/PHQ9Questionnaire';
import PSQIQuestionnaire from '../screens/questionnaires/PSQIQuestionnaire';

export type PsychologicalStackParamList = {
  PsychologicalHome: undefined;
  BAIQuestionnaire: undefined;
  BDIQuestionnaire: undefined;
  CFQQuestionnaire: undefined;
  GAD7Questionnaire: undefined;
  PCL5Questionnaire: undefined;
  PHQ9Questionnaire: undefined;
  PSQIQuestionnaire: undefined;
};

const Stack = createNativeStackNavigator<PsychologicalStackParamList>();

export default function PsychologicalStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="PsychologicalHome" component={PsychologicalInsight} />
      <Stack.Screen name="BAIQuestionnaire" component={BAIQuestionnaire} />
      <Stack.Screen name="BDIQuestionnaire" component={BDIQuestionnaire} />
      <Stack.Screen name="CFQQuestionnaire" component={CFQQuestionnaire} />
      <Stack.Screen name="GAD7Questionnaire" component={GAD7Questionnaire} />
      <Stack.Screen name="PCL5Questionnaire" component={PCL5Questionnaire} />
      <Stack.Screen name="PHQ9Questionnaire" component={PHQ9Questionnaire} />
      <Stack.Screen name="PSQIQuestionnaire" component={PSQIQuestionnaire} />
    </Stack.Navigator>
  );
}
