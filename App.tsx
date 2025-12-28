import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import LandingPage from './src/screens/welcome/landing';
import Welcome from './src/screens/welcome/welcome';
import Login from './src/screens/auth/login';
import Signup from './src/screens/auth/signup';
import Dashboard from './src/screens/dashboard/dashboard';
import DeviceScan from './src/screens/main/DeviceScan';
import DeviceDetails from './src/screens/main/DeviceDetails';
import DeviceConnected from './src/screens/main/DeviceConnected';
import SessionList from './src/screens/main/SessionList';
import CreateSession from './src/screens/main/CreateSession';
import SessionRunning from './src/screens/main/SessionRunning';
import LiveTelemetry from './src/screens/main/LiveTelemetry';
import History from './src/screens/main/History';
import HistoryDetail from './src/screens/main/HistoryDetail';
import Settings from './src/screens/main/Settings';

import './global.css';

export type RootStackParamList = {
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

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Landing" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Landing" component={LandingPage} />
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="DeviceScan" component={DeviceScan} />
          <Stack.Screen name="DeviceDetails" component={DeviceDetails} />
          <Stack.Screen name="DeviceConnected" component={DeviceConnected} />
          <Stack.Screen name="SessionList" component={SessionList} />
          <Stack.Screen name="CreateSession" component={CreateSession} />
          <Stack.Screen name="SessionRunning" component={SessionRunning} />
          <Stack.Screen name="LiveTelemetry" component={LiveTelemetry} />
          <Stack.Screen name="History" component={History} />
          <Stack.Screen name="HistoryDetail" component={HistoryDetail} />
          <Stack.Screen name="Settings" component={Settings} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}
