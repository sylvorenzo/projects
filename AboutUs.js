import { Button, Image, Modal, SafeAreaView, Text, TextInput, ToastAndroid, View,ActivityIndicator,StyleSheet} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import React,{useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, State, TouchableOpacity } from 'react-native-gesture-handler';




export default function AboutUsScreen()
{
 return(
    <View style={styles.parent_view}>

      
      

    {/* #ff9101
    '#0097A7' */}
    <LinearGradient
    colors={['#0097A7','#ffffff','#ffffff']}
    style={styles.parent_view}>



    <StatusBar style="dark"/>
    <View style={styles.tool}>
    
    </View>

    <Text style={styles.more_header}>About Us</Text>
    
    
    <View style={styles.holder}>
    <ScrollView  style={styles.parent2} showsVerticalScrollIndicator={false}>

        <Image source={require('../icons/logo_2.png')} style={{width:300,height:100,alignSelf:"center",marginTop:10}}/>

      <Text style={{marginBottom:10,marginStart:10,color:"grey",fontSize:14,marginEnd:10}}><Text style={{fontWeight:"bold"}}>Med-Geo </Text>is a national health centre delivery company that delivers both medical treatment 
          and clinical services specifically to chronic-ill patients in the whole of south Africa.</Text>

    <Text style={{marginBottom:10,marginStart:10,color:"grey",fontSize:14,marginEnd:10}}>
        <Text style={{fontWeight:"bold"}}>Med-Geo </Text>was founded on 15th august 2020 by a group of developmental software students in the university of Johannesburg at APB campus, with the aim to save more than 100 000s of Lives from the Covid-19 pandemic. 
        The App Allows the patient to access their treatment at the desired location and render quality hospital services from well-known specialists.
    </Text>

    <Text style={{marginBottom:10,marginStart:10,color:"grey",fontSize:14,marginEnd:7}}>
    We also have various ways to keep up an unbreakable bond of communication with our patients from the moment we say Hello.
        In the future we wish to bring the health centre closer to our beloved patients, by making their medical record file to store on cloud. This is just a glimpse of our Journey in the healthcare industry.
    </Text>


    <Text style={{alignSelf:"center",marginTop:10,marginBottom:10,fontWeight:"bold"}}>Copyright (c) 2020 Med-Geo</Text>
    <View style={{marginTop:150}}/>
    </ScrollView>

    </View>


    
    </LinearGradient>
  
  </View>
 )
}

const styles = StyleSheet.create({
    container:{
        
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,      
    },
    text:{
        fontSize: 20,
        
    },
    parent_view:
    {
        flex:1,
        position:'absolute',
        top:0,
        bottom:0,
        left:0,
        right:0,
        color: '#0097A7',
        backgroundColor: '#0097A7',
       
        
    },
    
    header: 
    {
        fontWeight:"bold",
        fontSize:20,
        alignSelf:"center",
        color:'#707070',
        marginTop:20,
        textShadowColor: '#B0BEC5',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10
        
    },
    status:
    {
        backgroundColor:'blue'
    },

    tool :{
        height:50
    },
    menu: {
        paddingTop:20,
        alignSelf:"center",
        flexDirection:"row",

        
    
    },
    menu_item:
    {
        paddingEnd:30,
        color:'#707070'
    }
    ,
    menu_item_bold:
    {
        paddingEnd:30,
        fontWeight:"bold",
        color:'#FF9101'
    },
    set_icon:
    {
        width:30,
        height:30,
        marginTop:35,
        alignSelf:"flex-end",
        marginEnd:20
    },
    parent:
    {    alignSelf:"center",
        flexDirection:'row',
        paddingTop:30
    },
    child_left:{
        width:100,
        height:100,
        borderRadius:60,
        backgroundColor:'#FFFFFF',
        alignItems:'center',
        elevation:5,


        
        
    },
    child_right:{
        width:100,
        height:100,
        borderRadius:60,
        backgroundColor:'#FFFFFF',
        alignItems:'center',
        elevation:5,
        marginStart:50
        
        
    },
    child_icon:
    {
        width:30,
        height:30,
        marginTop:25,
        color: "#fc9d03"
    },
    child_text:{
        marginTop:6,
        color:'#707070'
    
    },
    live_chat:
    {
        alignSelf:'flex-end',
        flexDirection:'row',
        marginTop:20
    },

    //more page css

    child:{
        width:300,
        height:100,
        borderRadius:10,
        marginTop:10,
        backgroundColor:'#FFFFFF',
        alignItems:'center',
        elevation:5,
        
    },
    parent2:{
        alignSelf:"center",
        
    },
    holder:
    {
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        backgroundColor:'#ffffff'
    },
    more_header:
    {
        fontWeight:"bold",
        fontSize:20,
        alignSelf:"center",
        color:'#ffffff',
        marginTop:20,
        textShadowColor: '#B0BEC5',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10
    },
    more_menu: {
        paddingTop:20,
        marginBottom:20,
        alignSelf:"center",
        flexDirection:"row",
    },
    more_menu_item:
    {
        paddingEnd:30,
        color:'#ffffff'
    }
    ,
    more_menu_item_bold:
    {
        paddingEnd:30,
        fontWeight:"bold",
        color:'#ffffff'
    },
    search:
    {
        backgroundColor: "#ffffff",
        width: 180,
        height: 25,
        borderColor: "grey",
        borderStyle: "solid",
        borderWidth: 1,
        borderRadius:5

    }
        //add to cart css
        ,
        item_holder:
        {   width:250,
            marginTop:10,
            elevation:5,
            borderRadius:10,
            borderStyle:"solid",
            borderWidth:1,
            borderColor:"grey",
            backgroundColor:"#ffffff"
            
        },
        item_name:
        {
                fontWeight:"bold",
                marginStart:10,
                marginTop:5,
                color:"#ff9101"
                
        },
        item_image:
        {
            width:190,
            height:180,
            marginTop:35,
            alignSelf:"center"
        },
        item_price:
        {
            marginStart:10,
            color:"grey",
            marginTop:5
        },
        item_desc:
        {
            marginStart:10,
            marginTop:20,
            color:"grey",
            fontSize:13
        },
        item_btn:
        {
            width:100,
            height:30,
            alignSelf:"center",
            backgroundColor:"#ff9101",
            borderStyle:"solid",
            borderRadius:5,
            marginTop:5,
            marginBottom:10,
            display:"flex",
            alignItems:"center",
            justifyContent:"center"
        },
        btn_text:
        {
            color:"#ffffff",
            fontSize:14
        }
        //delivery page css
        , dev_header:
        {
            fontWeight:"bold",
        fontSize:20,
        alignSelf:"center",
        color:'#ffffff',
        marginTop:20,
        marginBottom:20
        },
        dev_item_header:
        {
            fontWeight:"bold",
            marginBottom:10,
            marginTop:10,
            marginEnd:20,
            marginStart:10,
            color:"#ff9101"
        }
        ,
        dev_item_header_2:
        {
            fontWeight:"bold",
            marginBottom:10,
            marginTop:10,
            marginEnd:20,
            marginStart:10,
            color:"#707070"
        },
        circle:
        {
            backgroundColor:"#64dd17",
            height:15,
            width:15,
            borderColor:"black",
            borderRadius:20,
            borderStyle:"solid",
            
            
        },
        line:{
            height:53,
            width:3,
            backgroundColor:"#64dd17",
            marginStart:6,
            
        }
        ,
        top:
        {
            flexDirection:"row",
        },
        hold:
        {
            alignSelf:"center"
        },
        track_row:
        {
            flexDirection:"row",
            marginTop:-3
        },
        rate_btn:
        {
            alignSelf:"flex-end",
            fontWeight:"bold",
            fontSize:10,
            marginEnd:15,
            backgroundColor:"#e0e0e0",
            height:25,
            width:50,
            borderRadius:10
            
        },
        rate_text:
        {
            color:"grey",
            alignItems:"center",
            justifyContent:"center",
            alignSelf:"center",
            
        }

})