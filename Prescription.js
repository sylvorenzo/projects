import React, { Component, useState } from 'react';
import { View, Text, TouchableOpacity as Touch,Image } from 'react-native';
import database from '@react-native-firebase/database';



const  PrescriptionScreen =()=> {

  const [avatar,setAvatar] = useState();
  const [idNumber, setIdNumber]= useState('');
  const reference = database().ref(`/users/${idNumber}`);


  const ChooseImage = () =>{
   
        

  }
  
  
    return (
      <View>
        <Image source={avatar} 
        />
        <Text> Prescription </Text>
        <Touch onPress={()=>{ChooseImage()}}>
          <Text>Upload Your Prescription</Text>
        </Touch>
      </View>
    );

}
export default PrescriptionScreen;
