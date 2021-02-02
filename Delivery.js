import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import {BottomSheet} from 'react-native-btr';
import {  Text,StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
//import { Rating, AirbnbRating } from 'react-native-ratings';
import { ScrollView, State, TouchableOpacity } from 'react-native-gesture-handler';
import { Alert } from 'react-native';









function rate()
{
    Alert.alert(
        'Rate',
        'Please rate your experience',
        [
          {
            text: 'Ask me later',
            onPress: () => console.log('Ask me later pressed')
          },
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel'
          },
          { text: 'OK', onPress: () => console.log('OK Pressed') }
        ],
        { cancelable: false }
      );
}


const  DeliveryScreen = ({navigation}) =>
{
    
    var products = [
      {
        name:"Asthma Pump",
        price: "R 260.00",
        date:"12 Sep 2020",
        location1:"Warehouse",
        loc1_date:"12 Sep,13:20",
        location2:"En-route to customer",
        loc2_date:"15 Sep,10:00",
        location3:"Delivered",
        loc3_date:"16 Sep,08:00",
        ETA:"5 min",
        id:145234
      },
      {
        name:"Asthma Pump",
        price: "R 260.00",
        date:"12 Sep 2020",
        location1:"Warehouse",
        loc1_date:"22 Sep,13:20",
        location2:"En-route to customer",
        loc2_date:"25 Sep,10:00",
        location3:"Delivered",
        loc3_date:"26 Sep,14:00",
        ETA:"30 min",
        id:240495
      }
    ]
    
  
    var list = products.map((data)=>
    {
      return(
          /* use item id from database*/

      <View key={data.id}>
          <View style={styles.top}>
          <Text style={styles.dev_item_header_2}>{data.date}</Text>
          <Text style={styles.dev_item_header}>Order ID: {data.id}</Text> 
        <Text style={styles.dev_item_header_2}>ETA: {data.ETA}</Text> 
          </View>
    
    <View style={styles.hold}>

    <View style={{flexDirection:"row"}}>
                <View style={styles.circle}/>

                <View style={styles.track_row}>
                <Text style={{marginStart:10}}>{data.location1}</Text>
                <Text style={{color:"red",fontWeight:"bold",fontSize:10,marginTop:3}}> -{data.loc1_date}</Text>
                </View>
      
            </View>
            <View style={styles.line}/>
            <View style={{flexDirection:"row"}}>
                <View style={styles.circle}/>

                <View style={styles.track_row}>
                <Text style={{marginStart:10}}>{data.location2}</Text>
                <Text style={{color:"red",fontWeight:"bold",fontSize:10,marginTop:3}}> -{data.loc2_date}</Text>
                </View>
      
            </View>
            <View style={styles.line}/>
            <View style={{flexDirection:"row"}}>
                <View style={styles.circle}/>

                <View style={styles.track_row}>
                <Text style={{marginStart:10}}>{data.location3}</Text>
                <Text style={{color:"red",fontWeight:"bold",fontSize:10,marginTop:3}}> -{data.loc3_date}</Text>
                </View>
      
            </View>
    </View>

    <TouchableOpacity style={styles.rate_btn}>
        <Text style={styles.rate_text} onPress={e=>rate()}>Rate</Text>
    </TouchableOpacity>
            
    <View style={{height:1,backgroundColor:"#e0e0e0",marginTop:20,marginBottom:20}}/>
      </View>
      )
    })
    return (
       
      <View style={styles.parent_view}>
  
        
        
  
        {/* #ff9101
        '#0097A7' */}
        <LinearGradient
        colors={['#0097A7','#ffffff','#ffffff']}
        style={styles.parent_view}>
  
  
        <StatusBar style="dark"/>
        <View style={styles.tool}>
        </View>
  
        <View>
            <Text style={styles.dev_header}>Track your delivery</Text>
        </View>
        
    
        <View style={styles.holder}>
        <ScrollView  style={styles.parent2} showsVerticalScrollIndicator={false}> 
          {list}
        </ScrollView>
  
        </View>
        
        
        </LinearGradient>

        
 

        {/* <AirbnbRating/> */}

 
 


      
      </View>
    )
}
export default DeliveryScreen;

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