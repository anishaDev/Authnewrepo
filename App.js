

import React, {useState,useEffect} from 'react';
//  import { StatusBar } from 'react-native';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {requestUserPermission,NotificationListner} from "./utils/Pushnotificationhelper";
import auth from '@react-native-firebase/auth';
import Homestack from './HomeStack';






const App = () => {


  return (

    <View style={{flex:1}}>
       <View style={{ backgroundColor:'#58b847'}}> 
      <StatusBar translucent backgroundColor="transparent"/>
      </View> 
      <Text>Hello anisha welcome to newsblogg</Text>
      <Homestack/>
     
    </View>
   
  );
};

export default App;




















