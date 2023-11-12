import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './src/screens/LoginSignupScreen/WelcomeScreen';
import LoginScreen from './src/screens/LoginSignupScreen/LoginScreen';

import HomeScreen from './src/screens/HomeSreen';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignupScreen from './src/screens/LoginSignupScreen/SignupScreen';
import Userprofile from './src/screens/Userprofile';
import ProductPage from './src/screens/ProductPage';


const Stack = createNativeStackNavigator();
export default function App() {
  return (

    <NavigationContainer>

      <Stack.Navigator initialRouteName="welcomepage">
        <Stack.Screen name='welcomepage' component={WelcomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name='Signup' component={SignupScreen} options={{ headerShown: false }} />
        <Stack.Screen name='Login' component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name='Home' component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name='userprofile' component={Userprofile} options={{ headerShown: false }} />
        <Stack.Screen name='productpage' component={ProductPage} options={{ headerShown: false }} />
      </Stack.Navigator>

    </NavigationContainer>






    // < AuthNavigation />


    // < LoginScreen />
    // <RootNavigation />
    // <HomeScreen />





  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
