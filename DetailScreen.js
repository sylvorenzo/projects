import React, {useContext, useEffect, useState} from 'react';
import {View, Text, StyleSheet, StatusBar, Image, TouchableOpacity as Touch,TextInput} from 'react-native';
import FormInput from '../components/FormInput';
import database from '@react-native-firebase/database';
import { ScrollView } from 'react-native-gesture-handler';


const DetailScreen = ({navigation}) =>{
    const [name, setName] = useState();
    const [surname, setSurname]= useState();
    const [ username, setUsername]= useState();
    const [email, setEmail] = useState();
    const [idNumber, setIdNumber]= useState('');    
    const reference = database().ref(`/users/${idNumber}`);
    const[image, setImage]= useState();
    

    const UploadBtn = ()=>{
        reference.set({
            name: name,
            surname: surname,
            username: username,
            email:email,
            idNumber: idNumber,
            image: image,
        }).then(()=>{
            alert("Details Successfully uploaded!")
        }).catch((error)=>{
            alert(error);
        })
    }
    const ViewBtn =()=>{
        
    }
    const updateBtn = ()=>{
        reference.update({
            name: name,
            surname: surname,
            username: username,
            email:email,
        }).then(()=>{
            alert("Details Successfully Updated!")
        }).catch((error)=>{
            alert(error);
        })
    }
    
    const idHandler =(idNumber)=>{
        let idNumberLength = idNumber.length;
        if(idNumberLength==13){
            return true;
        }else if(idNumberLength < 13){
            return <Text>ID Number is too short</Text>
        }else{
            return <Text> ID Number Too Long </Text>
        }

    }
    const dataDelete = ()=>{
        reference.remove();
        alert("Successfully Deleted");
    }
    return(
        <View style={styles.container}>
            <View style={styles.circle}/>
            <ScrollView>
            
            <Text style={styles.text}>Upload Your Details</Text>
            <TextInput 
                placeholder="Name"
                onChangeText ={(username)=> setName(username)}
                style={styles.forminput}
            />

            <TextInput 
                placeholder="Surname"
                onChangeText ={(userSurname)=> setSurname(userSurname)}
                style={styles.forminput}
            />  

            <TextInput 
                placeholder="User Name "
                onChangeText ={(displayName)=>setUsername(displayName)}
                style={styles.forminput}
            />  

            <TextInput 
                placeholder="Email"
                onChangeText ={(userEmail)=>setEmail(userEmail)}
                style={styles.forminput}
            />  

            <TextInput 
                placeholder="ID Number"
                onChangeText ={(userID)=> setIdNumber(userID)}
                style={styles.forminput}
            />
            <Text style={styles.idhandler}>{idHandler(idNumber)}</Text>
            <View>
                <Touch onPress={()=> UploadBtn()} style={styles.formButton}>
                    <Text style={{color:"white"}}> Upload Details</Text>
                </Touch>   
            </View>
            
            <View>
                <Touch onPress={()=> navigation.navigate('View Your Details')} style={styles.formButton}>
                    <Text style={{color:"white"}}> View Your Details</Text>
                </Touch>
            </View>
            <View>
                <Touch onPress={()=> dataDelete()} style={styles.formButton}>
                    <Text style={{color:"white"}}> Delete Details</Text>
                </Touch>

            </View>
            <View>
                <Touch onPress={()=> updateBtn()} style={styles.formButton}>
                    <Text style={{color:"white"}}>Update Details</Text>
                </Touch>
            </View>
            </ScrollView>
            


        </View>
    );
}
export default DetailScreen;

const styles = StyleSheet.create({
    container:{
        
        flex: 1,
        padding: 20,
        width:"100%",
    },
    scrollview:{
        backgroundColor: "#91b0cf",
        
    },
    text:{
        fontSize: 20,
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        color:"#ff9101"
        
        
    },
    forminput:{
        alignItems: 'stretch',
        borderColor: '#000000',
        marginTop: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#000",
        borderRadius: 5,
        width:'100%',

       
    },
    idhandler:{
        marginTop: 15,
        fontSize:10,
        marginBottom: 15,
        justifyContent: 'center',

    },
    circle:{
       
      }, 
      formButton:{
          marginBottom:20,
          justifyContent:'center',
          alignItems:'center',
          backgroundColor:'#ff9101',
          height: 50,
          borderRadius:25,
          width:"100%",
      }
})