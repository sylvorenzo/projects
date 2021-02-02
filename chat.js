import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform, KeyboardAvoidingView } from 'react-native';
import {GiftedChat} from 'react-native-gifted-chat';
import Fire from '../src/Fire';


export default class chatScreen extends Component {
  
  state={
    messages:[]
  }
   

  get user(){
    return {
      _id:Fire.uid,
    
    }
  }

  
  
  render() {
    const chat=<GiftedChat style={styles.input} messages={this.state.messages}  onSend={Fire.send} user={this.user}/>

 
    return (
      <View style={styles.container}>
        
        <View style={styles.circle}/>
        {chat}
      </View>
    );
  }
  componentDidMount(){
    Fire.on((message)=> this.setState(previous=>({
      messages: GiftedChat.append(previous.message, message)
    })))
  }

  componentWillUnmount(){
    Fire.off();
    
  }
}



const styles= StyleSheet.create({
  container:{
    flex:1,
    

  },
  circle:{
    
  }, 
  input:{
   
    backgroundColor: 'red',
  }
})
