import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Login from './src/screens/auth/login';
import Signup from './src/screens/auth/signup';
import BasicInfo from './src/screens/onboarding/BasicInfo';
import Questionnaire from './src/screens/onboarding/Questionnaire';
import MainTabs from './src/navigation/MainTabs';
import BAIQuestionnaire from './src/screens/questionnaires/BAIQuestionnaire';
import BDIQuestionnaire from './src/screens/questionnaires/BDIQuestionnaire';

import './global.css';

export type RootStackParamList = {
  Login: undefined;
  Signup: undefined;
  BasicInfo: undefined;
  Questionnaire: undefined;
  MainTabs: undefined;
  BAIQuestionnaire: undefined;
  BDIQuestionnaire: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="BasicInfo" component={BasicInfo} />
          <Stack.Screen name="Questionnaire" component={Questionnaire} />
          <Stack.Screen name="MainTabs" component={MainTabs} />
          <Stack.Screen name="BAIQuestionnaire" component={BAIQuestionnaire} />
          <Stack.Screen name="BDIQuestionnaire" component={BDIQuestionnaire} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}
