import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import {BottomSheet} from 'react-native-btr';
import { Image, Text, View, StyleSheet, TouchableOpacity as Touch, Alert} from 'react-native';
import  LinearGradient  from 'react-native-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';


const MoreScreen =({navigation})=>
{
    
    return (
        <View style={styles.parent_view}>
      <LinearGradient
      colors={['#0097A7','#ffffff','#ffffff']}
      style={styles.parent_view}>


      <StatusBar style="dark"/>
      <View style={styles.tool}>
                <Touch onPress={()=>{Alert.alert('MED GEO','Do you want to sign out?',[{
                    text:'Cancel',
                    onPress:()=>{console.log('cancel pressed')},
                    style: 'cancel'
                },{
                    text:"OK",
                    onPress:()=>{auth()
                        .signOut()
                        .then(() => navigation.navigate('Login'))}
                }

                ], 
                {cancelable:false})}}>
                <Image source={require('../icons/set.png')} style={styles.set_icon}  />
                </Touch>
                
            </View>

      <Text style={styles.more_header}>More Options</Text>
      
      <View style={styles.more_menu}>
        <Text style={styles.more_menu_item} >Functionality at its best</Text>
      </View>

      <View style={styles.holder}>
      <View  style={styles.parent2}>
        
        <View style={styles.child}>
            <Touch onPress={()=>navigation.navigate('Videos')}>
                <Image source={require('../icons/video.png')} style={styles.child_icon}/>
                <Text style={styles.child_text}>Health Videos</Text>
            </Touch>
        </View>
        
        <View style={styles.child}>
            <Touch onPress={()=> navigation.navigate('Bookings')}>
            <Image source={require('../icons/home.png')} style={styles.child_icon}/>
          <Text style={styles.child_text}>Home Bookings</Text>
            </Touch>

        </View>

      </View>

      <View  style={styles.parent2}>
        
        <View style={styles.child}>
            <Touch>
            <Image source={require('../icons/dollar.png')} style={styles.child_icon}/>
          <Text style={styles.child_text}>Donations</Text>
            </Touch>
        
        </View>
        
        <View style={styles.child}>
            <Touch onPress={()=> navigation.navigate('About Us')}>
            <Image source={require('../icons/info.png')} style={styles.child_icon}/>
            <Text style={styles.child_text}>About us</Text>
            </Touch>
        
        </View>

      </View>

      </View>
      

      </LinearGradient>
    
    </View>
    )
}
export default MoreScreen;

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
      marginTop:10,
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
      marginTop:25
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
      marginTop:0,
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