import React, {useState, useEffect} from 'react';
import {View,Text,StyleSheet,TouchableOpacity as Touch, Image} from 'react-native';
import FormButton from '../components/FormButton';
import {GoogleSignin, statusCodes} from '@react-native-community/google-signin';
import auth from '@react-native-firebase/auth';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {windowHeight} from '../utils/Dimensions';
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';


const LoginScreen = ({navigation})=>{

    GoogleSignin.configure({
        webClientId: '78920702685-a1tjp1ocq38af62i9cd0s9jfr46agcv6.apps.googleusercontent.com"',
      });

    const [user,setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [initializing, setInitializing]= useState();
    const [Error, setError]= useState();


    const HandleLogin = (user) => {
        setUser(user);
        if (initializing) setInitializing(false);
    }
    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(HandleLogin);
        return subscriber; // unsubscribe on unmount
      }, []);
      if (initializing) return null;

      async function onGoogleButtonPress(){
          
        
        try{
            // Create a Google credential with the token
            const { idToken } = await GoogleSignin.signIn();
            const googleCredential = auth.GoogleAuthProvider.credential(idToken);
            setInitializing(false);
            
        }catch(error){
            if(error.code === statusCodes.SIGN_IN_CANCELLED)
            {
                alert('Cancelled');
            }else if(error.code=== statusCodes.SIGN_IN_REQUIRED){
                alert('Sign in required');
            }else{
             navigation.navigate('Home')
            }
        }
        // Create a Google credential with the token
        
      

      
      }
       
       

    return(
        <ScrollView>
            <View style={styles.Container}>
            
            <View style={styles.circle}/>
            <View>
                <Image source={require('../icons/logo_2.png')} style={{width:300,height:100,alignSelf:"center"}}/>

            </View>
            
            
            <TextInput
                
                placeholder="Email"
                keyboardType = "email-address"
                autoCapitalize = "none"
                onChangeText ={(userEmail)=> setEmail(userEmail)}
                style={styles.forminput}

            />
            <TextInput
                
                placeholder="Password "
                
                style={styles.forminput}
                secureTextEntry={true}
                onChangeText={(userPassword)=> setPassword(userPassword)}
               

            />
            <TouchableOpacity
            style={styles.signIn}
             onPress={()=>
                auth()
                .signInWithEmailAndPassword(email, password)
                .then(() => {
                  navigation.navigate('Home')
                })
                .catch(error => {
                  if (error.code === 'auth/email-already-in-use') {
                    alert(setError('That email address is already in use!')) ;
                  }
              
                  if (error.code === 'auth/invalid-email') {
                    alert(setError('That email address is invalid!'));
                  }
              
                  console.error(error);
                })
            
            
            }
            >
                <Text style={{fontSize:15,color:"white",fontWeight:"bold"}}>Sign In</Text>
            </TouchableOpacity>

            <Text style={{fontWeight:"bold",color:"grey",marginTop:10}}>OR</Text>

            <Touch style={[styles.buttonContainer]}>
            <View>
                {/* <FontAwesome name='google' size={22} style={styles.icon} color='red' /> */}
            </View>
            <View style={styles.btnTxtWrapper}>
                <Text style={styles.buttonText, {color:'grey'}}
                onPress={()=> onGoogleButtonPress()}
                >Sign In With Google</Text>
            </View>
            
        </Touch>
            
            <Text>{Error} </Text>


            <View style={{flexDirection:"row"}}>
            <Touch style={styles.forgotButton} onPress={()=>{} }>
                <Text style={styles.navButtonText}> Forgot Password <Text style={{color:"grey"}}>|</Text></Text>
            </Touch>
            <Touch style={styles.forgotButton} onPress={()=> navigation.navigate('Signup') }>
                <Text style={styles.navButtonText}> Register account</Text>
            </Touch>
            </View>

            
        </View>
        </ScrollView>
        
    );
}
export default LoginScreen;

const styles = StyleSheet.create({
    Container:{
        
        
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    logo: {
        height: 150,
        width: 150,
        resizeMode: 'cover',
    },
    text: {
        fontSize: 28,
        marginBottom: 10,
        color: "#051d5f",

    },
    navButton:{
        marginTop: 15,
    },
    forgotButton:{
        marginVertical: 12,

    }, 
    navButtonText:{
        fontSize: 14,
        fontWeight: '500',
        color: '#ff9101'
    },
    forminput:{
        color: '#a6a6a6',
        borderColor:'#a6a6a6',
        borderBottomWidth: 1,
        marginBottom: 20,
        padding:20,
        width:300
    },
    signIn:
    {
        backgroundColor:"#ff9101",
        width:190,
        height:50,
        borderRadius:5,
        justifyContent:"center",
        alignItems:"center"

    },
    buttonContainer:{
        marginTop: 10,
        width: 190,
        height: windowHeight / 11,
        backgroundColor: '#e0e0e0',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,

    },
    iconWrapper:{
        width: 30,
        justifyContent: 'center',
        alignItems: 'center',

    },
    icon: {
        fontWeight: 'bold',

    },
    btnTxtWrapper:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText:{
        fontSize: 18,
        fontWeight:'bold',
        fontFamily: 'san-seriff',
    },
    circle:{
        
    }, 
})