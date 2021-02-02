import { registerRootComponent} from 'expo';
import { AppRegistry} from 'react-native';
import messaging from '@react-native-firebase/messaging';

import App from './App';
messaging().setBackgroundMessageHandler(async remoteMesssage=>{
    console.log("Message handled in background: ", remoteMesssage)
});
function HandlesCheck({isHeadless}){
    if(isHeadless){
        return null;
    }
    return <App/>;
}

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately

AppRegistry.registerHeadlessTask('RNFirebaseBackgroundMessage', ()=> firebaseBackgroundMessage());
registerRootComponent(App);
