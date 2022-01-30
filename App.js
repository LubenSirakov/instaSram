import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import WelcomeScreen from './app/screens/WelcomeScreen';
import LoginScreen from './app/screens/LoginScreen';

export default function App() {
  return (
    <>
      <LoginScreen></LoginScreen>
      {/* <WelcomeScreen /> */}
    </>
  );
}
