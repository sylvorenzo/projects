import { Button, Image, Modal, SafeAreaView, Text, TextInput, ToastAndroid, View,ActivityIndicator} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import React,{useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, State, TouchableOpacity } from 'react-native-gesture-handler';





const Logo=({navigation})=>
{
    setTimeout(() => {
        navigation.navigate('Login')
    }, 4000);

    return(
        <View>
            <Image source={require('../icons/logo_2.png')} style={{width:300,height:100,alignSelf:"center",marginTop:250}}/>
            <Text style={{color:"grey",fontWeight:"bold",alignSelf:"center",marginTop:190}}>Copyright (c) 2020</Text>
        </View>
    )
}

export default Logo;