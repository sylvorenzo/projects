import React, { Component, useState} from 'react';
import { View, Text, StyleSheet,ScrollView,TextInput } from 'react-native';
import database from'@react-native-firebase/database';
import FormButton  from '../components/FormButton';
import FormInput  from '../components/FormInput';

const DetailViewScreen =()=>{
    const [name, setName] = useState();
    const [surname, setSurname]= useState();
    const [ username, setUsername]= useState();
    const [email, setEmail] = useState();
    const [idNumber, setIdNumber]= useState('');
    const reference = database().ref(`/users/${idNumber}`);
 

    const ViewBtn = ()=>{
        reference.on('value',function(snapshot){
            for(var i = 0; i<5; i++){
                
                setName(JSON.stringify((snapshot.val().name)))
                setUsername(JSON.stringify((snapshot.val().surname)))
                setSurname(JSON.stringify((snapshot.val().username)))
                setEmail(JSON.stringify((snapshot.val().email)))

            }
           

        })
      
    }

        
    const idHandler =()=>{
        let idNumberLength = idNumber.length;
        if(idNumberLength==13){
            return true;
        }else if(idNumberLength < 13){
            return <Text>id Number is too short</Text>
        }else{
            return <Text> id Number Too Long </Text>
        }

    }
    return (
      <View style={styles.container}>
          <View style={styles.circle}/>
            <View>
            <TextInput 
                placeholder="Enter Your ID number"
                onChangeText ={(userID)=> setIdNumber(userID)}
                style={styles.forminput}
            />
            </View>

            <View>
        </View>
            
        <View>
        <Text style={{marginLeft:20}}>{idHandler()}</Text>
            <Text style={styles.details}>NAME</Text>
            <Text style={styles.view}>{name}</Text>
            <Text style={styles.details}>USERNAME</Text>
            <Text style={styles.view}>{surname}</Text>
            <Text style={styles.details}>SURNAME</Text>
            <Text style={styles.view}>{username}</Text>
            <Text style={styles.details}>EMAIL</Text>
            <Text style={styles.view}>{email}</Text>
            <Text>{ViewBtn()}</Text>
        </View>

      </View>
    );
}
export default DetailViewScreen;

const styles = StyleSheet.create({
    container:{
       
        flex: 1,
        width: '100%',
    },
    circle:{
       }, 
    details:{
        alignItems:'center',
        justifyContent:'center',
        fontSize:20,
        marginLeft:20,
        color:"#ff9101"
        
    },
    forminput:{
        borderColor: '#000000',
        marginTop: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#000",
        width:'75%',
        marginLeft:20,
    },
    view:{
        marginTop:20,
        borderBottomWidth:2,
        borderColor: '#bcc4d1',
        height:30,
        marginBottom:10,
        alignItems:'center',
        justifyContent:'center',
        marginLeft:20,
        marginRight:20,
        
    }
})
