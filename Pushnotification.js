import React, {useEffect} from 'react';
import {Alert} from 'react-native';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Button
  } from 'react-native';
import messaging from '@react-native-firebase/messaging';
// import PushNotification from 'react-native-push-notification';
import NotificationController from './NotificationController.android';

const PushNotification = () => {
    useEffect(() => {
        messaging().setBackgroundMessageHandler(async remoteMessage => {
            console.log("message handled in the background", remoteMessage)
        });
        const unsubscribe = messaging().onMessage(async remoteMessage => {
            Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
            console.log(remoteMessage)
        });
        return unsubscribe;
    },[])
 const checkToken = async() => {
    const fcmToken = await messaging().getToken();
    if(fcmToken){
        console.log(fcmToken);
        Alert.alert(fcmToken);
    }
 }
 return(
    <View style = {StyleSheet.container}>
        <NotificationController/>
        <Text style={{fontSize:16,fontWeight:'500'}}>Push notification with firebase</Text>
        <Button title= "Get FCM Token " onPress={()=> checkToken} />

    </View>
 )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',

    },
    title: {
        textAlign: 'center',
        marginVertical: 8,
        
      },
    
})
export default PushNotification;