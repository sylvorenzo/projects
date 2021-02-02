import { StatusBar } from 'expo-status-bar';
import React,{useEffect}from 'react';
import { StyleSheet, Text, View, PermissionsAndroid, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Onboarding from 'react-native-onboarding-swiper';
import OnboardingScreen from './screens/OnboardingScreen';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';
import MoreScreen from './screens/More';
import CartScreen from './screens/Cart';
import History from './screens/History';
import DeliveryScreen from './screens/Delivery';
import Logo from './screens/Logo';
import PrescriptionScreen from './screens/Prescription';
import DetailViewScreen from './screens/DetailView';
import VideoScreen from './screens/Videos';
import LiveChatScreen from './screens/liveChat';
import ChatScreen from './screens/chat';
import SignupScreen from './screens/SignupScreen';
import AboutUsScreen from './screens/AboutUs';
import CheckOutScreen from './screens/Checkout';
import helpScreen from './screens/help';
import BookingScreen from './screens/Bookings';

import auth from '@react-native-firebase/auth';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import{fcmService} from './src/FCMService';
import {localNotification} from './src/LocalNotificationServices';


const AppStack = createStackNavigator();
const TabNavigator= createMaterialBottomTabNavigator();
/*

        
*/
PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA, {
  title: "Camera",
  message: "This app would like to use your Camera."
})

PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE, {
  title: "WRITE",
  message: "This app would like to write to an external storage."
})


const App = ()=> {
  useEffect(()=>{
    fcmService.registerAppWithFCM()
    fcmService.register(onRegister, onNotification,onOpenNotification)
    localNotification.configure(onOpenNotification)
    
    function onRegister(Token){
      console.log("[App] onRegister: ", token)
    }
    function onNotification(notify){
      console.log("[App] onNotify: ", notify);
      const options = {
        soundName: "default",
        playSound: true,
      }
      localNotification.showNotification(
        0,
        notify.title,
        notify.body,
        notify,
        options,
      )
    }
    function onOpenNotification(notify){
      console.log("[App] onOpenNotification: ", notify);
      alert("Open Notification: ",notify.body)
    }
    return ()=>{
      console.log('[App] unRegister')
      fcmService.unRegister();
      localNotification.unregister()
    }
  }, [])
  return (
   <NavigationContainer>

      <AppStack.Navigator headerMode={"none"}>
      
      <AppStack.Screen name="Logo"                      component={Logo}/>
      <AppStack.Screen name="Home"                      component={HomeScreen}/>
      <AppStack.Screen name="History"                     component={History}/>
        <AppStack.Screen name="Login"                   component={LoginScreen} />
        <AppStack.Screen name="More"                    component={MoreScreen} />
        <AppStack.Screen name="Cart"                    component={CartScreen} />
        <AppStack.Screen name="Delivery"                component={DeliveryScreen} />
        <AppStack.Screen name="Videos"                  component={VideoScreen} />
        <AppStack.Screen name="Details"                 component={DetailScreen} />
        <AppStack.Screen name="View Your Details"       component={DetailViewScreen} />
        <AppStack.Screen name="Prescription Upload"     component={PrescriptionScreen} />
        <AppStack.Screen name="Chat"                    component={LiveChatScreen} />
        <AppStack.Screen name="Chats"                   component={ChatScreen} />
        <AppStack.Screen name="Signup"                   component={SignupScreen} />
        <AppStack.Screen name="About Us"                   component={AboutUsScreen} />
        <AppStack.Screen name="CheckOut"                   component={CheckOutScreen} />
        <AppStack.Screen name="Help"                   component={helpScreen} />
        <AppStack.Screen name="Bookings"                   component={BookingScreen} />
      </AppStack.Navigator>
   </NavigationContainer>
  );
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
