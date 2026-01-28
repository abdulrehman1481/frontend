import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Home from '../screens/main/Home';
import PhysiologicalInsight from '../screens/main/PhysiologicalInsight';
import Stimulation from '../screens/main/Stimulation';
import PsychologicalStack from './PsychologicalStack';
import Settings from '../screens/main/Settings';

const Tab = createBottomTabNavigator();

export default function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'PhysiologicalInsight') {
            iconName = focused ? 'stats-chart' : 'stats-chart-outline';
          } else if (route.name === 'Stimulation') {
            iconName = focused ? 'ear' : 'ear-outline';
          } else if (route.name === 'PsychologicalInsight') {
            iconName = focused ? 'happy' : 'happy-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline';
          } else {
            iconName = 'help-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#5DADE2',
        tabBarInactiveTintColor: '#94a3b8',
        tabBarStyle: {
          backgroundColor: '#ffffff',
          borderTopWidth: 1,
          borderTopColor: '#e2e8f0',
          height: 60,
          paddingBottom: 8,
          paddingTop: 8,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
        },
      })}>
      <Tab.Screen 
        name="Home" 
        component={Home} 
        options={{ tabBarLabel: 'Home' }}
      />
      <Tab.Screen 
        name="PhysiologicalInsight" 
        component={PhysiologicalInsight} 
        options={{ tabBarLabel: 'Physiological' }}
      />
      <Tab.Screen 
        name="Stimulation" 
        component={Stimulation} 
        options={{ tabBarLabel: 'Stimulation' }}
      />
      <Tab.Screen 
        name="PsychologicalInsight" 
        component={PsychologicalStack} 
        options={{ tabBarLabel: 'Psychological' }}
      />
      <Tab.Screen 
        name="Settings" 
        component={Settings} 
        options={{ tabBarLabel: 'Settings' }}
      />
    </Tab.Navigator>
  );
}
