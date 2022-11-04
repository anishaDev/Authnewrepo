import React, {useEffect} from 'react';
import PushNotification from 'react-native-push-notification';

const RemotePushController = () => {
    useEffect(() => {
        PushNotification.configure({
            onRegister: function (token) {
                console.log('Token', token);
            },
            onNotification:function(notification){
                console.log('Remote Controller => ',notification)
            },
            senderID: '213006656717',
            popInitialNotification: true,
            requestPermissions: true,
        });
    },[]);
    return null;
};
export default RemotePushController;