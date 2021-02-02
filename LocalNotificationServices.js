import { Platform } from 'react-native';
import { notifications } from 'react-native-firebase';
import PushNotification from 'react-native-push-notification';

class LocalNotificationService{

    configure=(onOpenNotification)=>{
        PushNotification.configure({
            onRegister:function(token){
                console.log("[LocalNotificatioService] onRegister:",token);
            },
            onNotification:function(notification){
                console.log("[LocalNotificatioService] onNotification:",notification);
                if(!notification?.data){
                    return
                }
                notification.userInteraction=true;
                onOpenNotification(Platform.OS === 'ios'? notification.data.item: notification.data);

            },
            popInitialNotification: true,
            requestPermissions:true,

        })
    }
    unregister=()=>{
        PushNotification.unregister();
    }

    showNotification = (id,title,message,data={},options={})=>{
        PushNotification.localNotification({
            ...this.buildAndroidNotification(id, title,message,data, options),
            title:title || '',
            message:message || "",
            playSound:options.playSound|| false,
            soundName: options.soundName || 'default',
            userInteraction: false,

        })
    }
    
    buildAndroidNotification =(id,title,data,message)=>{
        return{
            id:id,
            autoCancel: true,
            bigText: message || '',
            subText: title || "",
            vibrate: true,
            vibration:  300,
            priority:  "high",
            importance:  "high",
            data:data,

        }
    }
    cancelAllNotifications =()=>{
        PushNotification.cancelAllLocalNotifications();
    }
    removeDeliveredNotificationByID =(notificationId)=>{
        console.log("[LocalNotificationService] removeDeliveredNotificationByID: ",notificationId);
        PushNotification.cancelLocalNotifications({id: $notificationId})
    }
}
export const localNotification = new LocalNotificationService()