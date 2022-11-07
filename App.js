

import React, {useState,useEffect} from 'react';
//  import { StatusBar } from 'react-native';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
 
  Text,
  useColorScheme,
  View,
  Button
} from 'react-native';

// import {requestUserPermission,NotificationListner} from "./utils/Pushnotificationhelper";
import auth from '@react-native-firebase/auth';
import Homestack from './HomeStack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import NotificationController from './NotificationController.android';
import PushNotification from './Pushnotification';
import { LocalNotification } from './src/services/LocalPushController';
import RemotePushController from './src/services/RemotePushController';
import Register1 from './screens/auth/Register';
import Login from './screens/auth/Login';






const App = () => {
const handleButtonPress = () => {
  LocalNotification();
}

  return (
    <SafeAreaView style={{flex:1}}>

    <View style={{flex:1,justifyContent:'center',marginTop:2,alignContent:'center'}}>
      <View  style={{marginTop:10,backgroundColor:'purple'}}>
      {/* <Ionicons
              name='notifications'
              size={54}
              color='black'
              onPress={handleButtonPress}
              style={{marginLeft:290}}
           /> */}
    {/* <Button title= {'Local Push Notification'} onPress={handleButtonPress} /> */}
    </View>
    {/* <RemotePushController/> */}
      {/* <PushNotification/> */}
       {/* <Text style={{fontSize:16,fontWeight:'500'}}>Push notification with firebase</Text> */}
       {/* <StatusBar translucent backgroundColor="transparent"/> */}
      
     {/* <Login/> */}
      <Homestack/>
     
    </View>
    </SafeAreaView>
   
  );
};

export default App;




















