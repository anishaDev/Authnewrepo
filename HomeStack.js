import * as React from 'react';
import {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {ActivityIndicator} from 'react-native';
import auth from '@react-native-firebase/auth';
import {requestUserPermission,NotificationListner} from "./utils/Pushnotificationhelper";
import Homemain from './main/Home';
import CreateBlogg from './main/CreateBlog';
import Blogg from './main/Blog';
import Login from './screens/auth/Login';
import Register1 from './screens/auth/Register';

const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();

const Homestack = () => {
  // useEffect(() => {
  //   requestUserPermission();
  //   NotificationListner();
  
   
  // }, [])

  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  async function onAuthStateChanged(user){
    if(user){
      setLoggedIn(true)
    }
else{
  setLoggedIn(false)
}
if(loading) setLoading(false)
  }
useEffect(() =>{
  const subscribe = auth().onAuthStateChanged(onAuthStateChanged)
  return subscribe

}, [])



  if (loading) {
    return (
    <ActivityIndicator size={32} color="red"
     />
    )
  }
  
  if (!loggedIn) {
    return (
      <NavigationContainer>
        <Tab.Navigator initialRouteName="Login">
          <Tab.Screen name="Login" component={Login} />
          <Tab.Screen name="Register" component={Register1} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"
      screenOptions={{headerShown: false}}
      >
        <Stack.Screen name="Home" component={Homemain} />
        <Stack.Screen name="CreateBlog" component={CreateBlogg} />
        <Stack.Screen name="Blog" component={Blogg} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Homestack;
