import PushNotification from "react-native-push-notification";


PushNotification.configure({
    onNotification: function(notification) {
        console.log('Local Notification', notification);

    },
    popInitialNotification: true,
    requestPermissions: true,
});
PushNotification.createChannel({
    channelId: 'channel-id',
    channelName: 'My channel',
    channelDescription: 'A channel for Blogging Notification',
    playSound: true,
    soundName: 'default',
    importance: 10,
    vibrate: true,
    vibration: 1000,
},
(created)=>console.log(`channel created ${created}`),

);
export const LocalNotification = ()=>{
    PushNotification.localNotification({
        channelId: 'channel-id',
        channelName: 'My channel',
        autoCancel:true,
        bigText:"AnishaMishra New Blog is out ,Its about Karnataka Trip-Click here to see the Blogs",
        subText:'Karnataka Trip Blog is out',
        title: 'AnishaMishra South Blog',
        message: 'Hey, Click for more',
        channelDescription: 'A channel for Blogging Notification',
        playSound: true,
        soundName: 'default',
        importance: 10,
        vibrate: true,
        vibration: 1000,
    });
};