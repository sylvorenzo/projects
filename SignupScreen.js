import React, {useState,useEffect} from 'react';
import {View,Text,StyleSheet,TouchableOpacity as Touch} from 'react-native';
import FormButton from '../components/FormButton';
import auth from '@react-native-firebase/auth';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

const SignupScreen = ({navigation})=>{
   
    const [confirmPassword, setConfirmPassword] = useState();
    const [user,setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
   
    const [initializing, setInitializing]= useState();

    const HandleLogin = (user) => {
        setUser(user);
        if (initializing) setInitializing(false);
    }
    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(HandleLogin);
        return subscriber; // unsubscribe on unmount
      }, []);
    const PasswordHandler = (confirm)=>{
        if(password == confirm){
            return true;
        }
        else{
            return <Text style={{color:"red",fontSize:12}}>Passwords don't  match </Text>
        }
    }
      
    return(
        <View style={styles.Container}>
           
           <View/>
            <Text style={styles.text}>Create an Account</Text>
            
            <TextInput
                
                placeholder="Email "
                iconType="user"
                keyboardType = "email-address"
                autoCapitalize = "none"
                onChangeText ={(userEmail)=> setEmail(userEmail)}
                style={styles.forminput}

            />
            <TextInput
                labelvalue={password}
                placeholder="Password "
                style={styles.forminput}
                secureTextEntry={true}
                onChangeText={(userPassword)=> setPassword(userPassword)}
               

            />
            <TextInput
                
                placeholder="Confirm Password"
                iconType="lock"
                style={styles.forminput}
                secureTextEntry={true}
                onChangeText={(userConfirmPassword)=> setConfirmPassword(userConfirmPassword)
                    
                
                }
               

            />
            <Text>{PasswordHandler(confirmPassword)}</Text>
            
            <TouchableOpacity style={styles.signIn}
             onPress={()=>
                auth()
                    .createUserWithEmailAndPassword(email, password)
                    .then(() => {
                        navigation.navigate('Home')
                    })
                    .catch(error => {
                        if (error.code === 'auth/email-already-in-use') {
                        alert(error.code);
                        }

                        if (error.code === 'auth/invalid-email') {
                        alert(error.code);
                        }

                        console.error(error);
                    })
            
            }
            >
                <Text style={{fontSize:15,color:"white",fontWeight:"bold"}}>Sign In</Text>

            </TouchableOpacity>

           
                <Text style={styles.color_textPrivate}> By registering, you confirm that you accept our terms of service and privacy policy</Text>
            
            

            <Touch style={styles.forgotButton} onPress={()=> navigation.navigate('Login') }>
                <Text style={styles.navButtonText}> Have an account? Login.</Text>
            </Touch>
        </View>
    );
}
export default SignupScreen;

const styles = StyleSheet.create({
    Container:{
    
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    text: {
        fontSize: 22,
        marginBottom: 10,
        color: "#ff9101",
        fontWeight:"bold"

    },
    signIn:
    {
        backgroundColor:"#ff9101",
        width:190,
        height:50,
        borderRadius:5,
        justifyContent:"center",
        alignItems:"center",
        marginTop:10

    },
    navButton:{
        marginTop: 15,
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
        marginBottom: 11,
        padding:20,
        width:300,
    },
    color_textPrivate:{
        fontSize: 10,
        paddingTop:20,
        paddingBottom:20,
        color: '#051d5f',
        alignSelf:"center",
        justifyContent:"center"
    },
    
})