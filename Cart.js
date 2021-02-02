import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import BottomSheet from 'reanimated-bottom-sheet';
import { Image, Text, TextInput, View,StyleSheet} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import database from '@react-native-firebase/database';
import * as firebase from 'firebase';


//this will be the id of the signed in user
//id of user must be passed through to Checkout for a successful purchase
//also should be passed to history to retrieve history of logged in user


var id="Paballo";


const firebaseConfig = 
{
  apiKey: "AIzaSyCKXVr0t8NOEydeLV_-m48X-Y7V_jqeVwA",
  authDomain: "react-8f99f.firebaseapp.com",
  databaseURL: "https://react-8f99f.firebaseio.com",
  projectId: "react-8f99f",
  storageBucket: "react-8f99f.appspot.com",
  messagingSenderId: "1079327525193",
  appId: "1:1079327525193:web:0127bd6bd8cf9188a3f298",
  measurementId: "G-VST7ZRGF85"
};


const Cart =({navigation}) =>
{

 

  if(!firebase.apps.length)
  {
    firebase.initializeApp(firebaseConfig)
  }

  var [items,updateItems]=useState(0)
  const [me,updateMe]=useState([])
  var [total,updateTotal] =useState(0)
  


  function deleteFromDatabase(index)
  {
    firebase.database().ref("CartItems/"+id+"/"+index).remove();
  }
  function addToDatabase(data,index) 
  {
      
      

    firebase.database().ref("CartItems/"+id+"/"+index).set(
      {
      name:data.name,
      price: data.price,
      picture:data.picture,
      desc:data.desc,
      index:index
      
    })
      
  }

   function getFromDatabase()
  {
    firebase.database().ref("CartItems/"+id).on("value",(data)=>
    {
      var stuff=data.val();
      
      
      if(stuff!=null)
      {
        var keys=Object.keys(stuff);
        var us=[]
      var cost=0
        updateItems(keys.length)
        
      for(var i=0;i<keys.length;i++)
      {
        var k=keys[i]
        us.push({name:stuff[k].name,price:stuff[k].price,picture:stuff[k].picture,desc:stuff[k].desc,index:stuff[k].index})
        cost=cost+stuff[k].price
      }


      updateTotal(cost)
      updateMe(us)
      }
      else
      {
        updateTotal(0)
        updateMe([])
        updateItems(0)
      }

      
      
    }
      )
  }


var products = [
  {name:"Blood pressure meter",
   price: 260.00,
   picture:require('../icons/1.jpg'),
   desc:"This a very good tester,very affordable",
   id:1
  },
  {name:"Face mask",
  price: 160.00,
  desc:"Black and relaxed",
  picture:require('../icons/2.jpg'),
  id:2
 },
 {name:"Face mask",
 price: 30.00,
 desc:"Soft, affordable & stylish",
 picture:require('../icons/7.jpg'),
 id:3
},
{name:"Covid-19 test",
 price: 1330.00,
 desc:"Beat covid before it beats you",
 picture:require('../icons/5.jpg'),
 id:4
},
{name:"Something test",
 price: 330.00,
 desc:"a description goes here",
 picture:require('../icons/6.jpg'),
 id:5
}
]




var cartItems = me.map((data,index)=>
{
  
  return(
  <View key={index} style={styles.cart_item_holder}>
    <View style={styles.cart_mini_holder}>
    <Text style={styles.item_name}>{data.name}</Text>
    <View style={styles.cart_circle}/>
    <Text style={styles.cart_price}>R{data.price}</Text>
    </View>
    <Image source={data.picture} style={styles.cart_image}/>
  <Text style={styles.cart_desc}>{data.desc}</Text>
  
  <TouchableOpacity style={styles.remove}  onPress={e=>deleteFromDatabase(data.index)}>
    <Text style={styles.btn_text}>remove</Text>
  </TouchableOpacity> 
  
  </View>
  )
})

//function for removing items from cart



//funtion for stuff inside bottom sheet
const renderContent = () => (
  <View
    style={{
      backgroundColor: '#e0e0e0',
      padding: 16,
      height: 450,
    }}
  >
    <View style={{height:5,width:40,backgroundColor:"white",borderRadius:10,alignSelf:"center"}}/>
    <Text style={{fontWeight:"bold",alignSelf:"center",marginTop:15,marginBottom:5}}>All items</Text>

    <ScrollView  style={styles.parent2} showsVerticalScrollIndicator={false}> 
        {cartItems}
        <Text style={{fontSize:20,marginTop:150,display:items==0 ? "flex":"none"}}>No items in Cart</Text>
        
      </ScrollView>

    

  <Text style={{fontWeight:"bold"}}>Total: R{total}</Text>
    <TouchableOpacity style={styles.checkout} onPress={items===0 ? ()=>alert("No items in cart"):()=> navigation.navigate('CheckOut')}>
      <Text style={styles.btn_text}>Checkout</Text>
    </TouchableOpacity>
  </View>
);
    
    


  var list = products.map((data,index)=>
  {
    return(
    <View key={data.id} style={styles.item_holder}>
    <Text style={styles.item_name}>{data.name}</Text>
    {/* <View style={{height:1,backgroundColor:"grey",marginTop:5}}/> */}
    <Image source={data.picture} style={styles.item_image}/>
    <Text style={styles.item_desc}>{data.desc}</Text>
    <Text style={styles.item_price}>-R{data.price}</Text>
    <TouchableOpacity style={styles.item_btn} key={data.id} onPress={ e=>addToDatabase(data,index)}>
      <Text style={styles.btn_text}>Add</Text>
    </TouchableOpacity> 
    
    </View>
    )
  })

  {/*updateMe(me.concat({name:data.name,
      price: data.price,
      desc:data.desc,
      picture:data.picture,
      id:data.id+1*2}))+*/}
  



      // setTimeout(() => {
      //   getFromDatabase()
      // }, 1000);


  const sheetRef = React.useRef(null);

  return (
     
    <View style={styles.parent_view}>

      
      

      {/* #ff9101
      '#0097A7' */}
      <LinearGradient
      colors={['#0097A7','#ffffff','#ffffff']}
      style={styles.parent_view}>



      <StatusBar style="dark"/>
      <View style={styles.tool}>
        <TouchableOpacity onPress={() => sheetRef.current.snapTo(0)+getFromDatabase()} style={{width:90,alignSelf:"flex-end"}}>
        <Image source={require('../icons/shopping-cart.png')} style={styles.set_icon} />
    <Text style={{alignSelf:"flex-end",marginEnd:20,fontWeight:"300",color:"#ffffff"}}>{items} items</Text>
        </TouchableOpacity>
        
      </View>

      <Text style={styles.more_header}>Add to Cart</Text>
      
      <View style={styles.more_menu}>
        <Text style={styles.more_menu_item}>Search</Text>
        <TextInput style={styles.search}>
        </TextInput>
   
      </View>

      <View style={styles.holder}>
      <ScrollView  style={styles.parent2} showsVerticalScrollIndicator={false}> 
        {list}
      </ScrollView>

      </View>


      <BottomSheet
        ref={sheetRef}
        snapPoints={[450,60,0]}
        borderRadius={10}
        initialSnap={2}
        renderContent={renderContent}
      />
      
      
      
      </LinearGradient>
    
    </View>
  )
}

export default Cart;

var styles= StyleSheet.create({


   //#0097A7

   //home page css
   parent_view:
   {
       flex:1,
       position:'absolute',
       top:0,
       bottom:0,
       left:0,
       right:0,
      
       
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
       },
       cart_item_holder:
       {
           width:310,
           marginTop:10,
           elevation:5,
           borderRadius:10,
           borderStyle:"solid",
           borderWidth:1,
           borderColor:"grey",
           backgroundColor:"#ffffff"
       }
       ,
       cart_image:
       {
           width:50,
           height:50,
           marginStart:10
       },
       cart_mini_holder:
       {
           flexDirection:"row"
       },
       cart_price:
       {
           fontSize:10,
           marginTop:8.5

       },
       cart_desc:
       {
           color:"grey",
           fontSize:12,
           marginStart:10,
           marginTop:5
       
       },
       cart_btn:
       {

       },
       cart_circle:
       {
           borderRadius:40,
           backgroundColor:"grey",
           width:3,
           height:3,
           marginTop:15,
           marginEnd:8,
           marginStart:8
       },
       checkout:
       {
           width:180,
           height:35,
           alignSelf:"center",
           backgroundColor:"#689F38",
           borderStyle:"solid",
           borderRadius:5,
           marginTop:5,
           marginBottom:10,
           display:"flex",
           alignItems:"center",
           justifyContent:"center"
       },
       remove:
       {
           width:180,
           height:35,
           alignSelf:"center",
           backgroundColor:"#689F38",
           borderStyle:"solid",
           borderRadius:5,
           marginTop:5,
           marginBottom:10,
           display:"flex",
           alignItems:"center",
           justifyContent:"center"
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
           
       },
       //checkout page css
   
       c_view:
       {
       flex:1,
       position:'absolute',
       left:0,
       right:0,
       top:0,
       bottom:0
       },
       check_holder:
       {
           marginStart:20
       },
       inputs:
       {
           width:260,
           height:35,
           borderRadius:5,
           borderColor:"grey",
           borderStyle:"solid",
           borderWidth:1,
           marginTop:10,
           backgroundColor:"white",
           marginBottom:10,
           paddingLeft:5
       },
       mini_inputs:
       {
           width:125,
           height:30,
          borderRadius:5,
           borderColor:"grey",
           borderStyle:"solid",
           borderWidth:1,
           marginTop:10,
           backgroundColor:"white",
           marginBottom:10,
           paddingLeft:5,
           marginEnd:10
       
       },
       inputs_text:
       {
           fontSize:12
       },
       picker:
       {
           borderRadius:5,
           width:260,
           height:30,
           marginTop:10,
           marginBottom:10,
           borderColor:"grey",
           borderStyle:"solid",
           borderWidth:1,
       }
       ,
       pay:
       {
           width:260,
           height:40,
           borderRadius:5,
           borderColor:"grey",
           borderStyle:"solid",
           borderWidth:1,
           marginTop:10,
           backgroundColor:"#eeeeee",
           marginBottom:10,
           paddingLeft:5,
           flexDirection:"row"
       },
       cvv:
       {
           width:77,
           height:30,
           borderRadius:5,
           borderColor:"grey",
           borderStyle:"solid",
           borderWidth:1,
           marginTop:10,
           backgroundColor:"white",
           marginBottom:10,
           paddingLeft:5,
           marginEnd:10,
          
       }
       ,
       card:
       {
           width:250,
           height:140,
           borderRadius:5,
           backgroundColor:"red",
           marginBottom:10
       }
       //history page
       ,
       h_view:
       {
           height:200,
           width:310,
           borderColor:"#e0e0e0",
           borderRadius:10,
           borderStyle:"solid",
           borderWidth:1,
           marginBottom:5,
           marginTop:1,
           padding:10
       },
       h_circle:
       {
           borderRadius:40,
           backgroundColor:"grey",
           width:3,
           height:3,
           marginTop:6,
           marginEnd:8,
           marginStart:8
       },
       heads:{
           fontWeight:"bold",
           color:"#ff9101"
       }
  });

export {styles}