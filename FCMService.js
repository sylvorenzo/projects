import messaging from '@react-native-firebase/messaging';
import Platform from 'react-native';
import { notifications } from 'react-native-firebase';

class FCMService{
    register = (onRegister,onNotification, onOpenNotification)=>{
        this.checkPermission(onRegister)
        this.createNotificationListeners(onRegister,onNotification,onOpenNotification)
    }
    registerAppWithFCM = async()=>{
        await messaging().registerDeviceForRemoteMessages();
        await messaging().setAutoInitEnabled(true);
    }
    checkPermission  = (onRegister)=>{
        messaging().hasPermission().then(enabled =>{
            if(enabled){
                this.getToken(onRegister)
            }
            else{
                this.requestPermission(onRegister)
            }
        }).catch(error =>{
            console.log("[FCMService] Permission rejected", error)
        })
    }
    getToken = (onRegister)=>{
        messaging().getToken().then(fcmToken=>{
            if(fcmToken){
                onRegister(fcmToken)
            }
            else{
                console.log("[FCMService] User does not have a device token")
            }
            

        }).catch(error=>{
            console.log("[FCMService] Permission rejected", error)
        })
    }
    requestPermission =(onRegister)=>{
        messaging().requestPermission().then(()=>{
            this.getToken(onRegister)
        }).catch(error=>{
            console.log("[FCMService] Permission rejected", error)
        })
    }

    deleteToken =()=>{
        console.log("[FCMService] deleteToken");
        messaging().deleteToken().catch(error=>{
            console.log("[FCMService] Permission rejected", error)
        })
    }

    createNotificationListeners = (onRegister,onNotification,onOpenNotification)=>{

        messaging()
        .onNotificationOpenedApp(remoteMessage=>{
            console.log("[FCMService] onNotificationOpenedApp Notification caused app to open")
            if(remoteMessage){
                const notification = remoteMessage.notification
                onOpenNotification(notification)
            }
        });

        messaging().getInitialNotification().then(remoteMessage=>{
            console.log("[FCMService] getInitialnotification Notification caused app to open")
        });
        this.messageListener = messaging().onMessage(async remoteMessage=>{
            console.log("[FCMService] A new FCM message arrived!",remoteMessage)
            onNotification(notification)
        });
        messaging().onTokenRefresh(fcmToken=>{
            console.log("[FCMService] New token Refresh: ",fcmToken)
            onRegister(fcmToken)
        })
    }
    unRegister =()=>{
        this.messageListener()
    }
}
export const fcmService = new FCMService()