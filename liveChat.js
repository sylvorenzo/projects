import React, { Component,useState } from 'react';
import { TextInput, View, Text,StyleSheet, Image,TouchableOpacity as Touch } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import database from '@react-native-firebase/database';




const liveChatScreen = ({navigation})=>{

    const [username, setUsername] = useState();
    const [chats, setChats] = useState();
    const reference = database().ref(`/chats/${username}`);

    const next = ()=>{
        reference.set({
            name: username,
            chats: chats,

        }).then(()=>{
            alert("Successfully entered the chat")
        }).catch((error)=>{
            alert(error);
        })
        navigation.navigate('Chats');
        
    }
    checkAuth=()=>{
        
    }
    return (
      <View style={styles.container}>
        <View   style={styles.circle}/>
        <View style={{marginTop:64}}>
          
        </View>
        <View style={{marginHorizontal:32}}>
            <Text style={styles.header}>Username</Text>
            <TextInput style={styles.input}
                    placeholder={"Insert a username"}
                    onChangeText={(name)=> setUsername(name)}
                    value={username}
            />
            <View style={{alignItems:'flex-end', marginTop:64}}>
                <Touch  style= {styles.continue} onPress={()=> next()}>
                    <Text style={{color:"white"}}>Next</Text>
                </Touch>
            </View>
        </View>
        
      </View>
    );
}
export default liveChatScreen;
const styles = StyleSheet.create({
    container:{
        
    },
    circle:{
        
    }, 
    header:{
        
        fontSize: 30,
        color: "#ff9101",
        marginTop: 32,
    },
    continue:{
        width:70,
        height: 70,
        borderRadius: 70,
        backgroundColor: "#ff9101",
        alignItems: 'center',
        color:"white",
        justifyContent: 'center',

    },
    input:{
        marginTop:32,
        height: 50,
        borderBottomWidth: 1,
        borderColor:"#bab7c3",
        borderRadius: 5,
        borderStyle: 'solid',
    }
})


