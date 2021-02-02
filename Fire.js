import React, { Component, useDebugValue } from 'react';
import { View, Text } from 'react-native';
import firebase from 'react-native-firebase';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import { get } from 'react-native/Libraries/Utilities/PixelRatio';

class Fire{
  constructor(){
      this.checkAuth()
    }
    
    checkAuth =()=>{
        auth().onAuthStateChanged(user=>{
            if(!user){
                auth().signInAnonymously();

            }
        })
    }
    send = messages=>{
        messages.forEach(element => {
            const message={
                text: element.text,
                timestamp: firebase.database.ServerValue.TIMESTAMP,
                user:element.user,
            }
            this.db.push(message);
        });
    }

    parse=message=>{
        const {user,text,timestamp}= message.val()
        const {key:_id}=message
        const createdAt = new Date()

        return{
            _id,
            createdAt,
            text,
            user,
        }
    }
    on = callback=>{
        this.db.limitToLast(20).on('child_added',snapshot=>callback(this.parse(snapshot)))
    };
    off(){
        this.db.off();
    }

    get db(){
        return database().ref("messages");
    }

    get uid(){
        return(auth().currentUser|| {}).uid
    }

}

export default Fire = new Fire();

