import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import {Text, TextInput, View,Picker,Image,Linking, StyleSheet} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { RadioButton } from 'react-native-paper';
import * as firebase from 'firebase';



//id of currently logged in user
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

const provinces=[
  { name:"Choose",
    id:0
    },
  
    { name:"North West",
    id:1
    },{ name:"Gauteng",
    id:2
    },{ name:"Mpumalanga",
    id:3
    },{ name:"Free State",
    id:4
    },{ name:"Northen Cape",
    id:5
    },{ name:"Western Cape",
    id:6
    },{ name:"Easten Cape",
    id:7
    },{ name:"KwaZulu Natal",
    id:8
    },{ name:"Limpopo",
    id:9
    },
]

const years=["Year","2021","2022","2023","2024","2025","2026","2027"]
const months=["Month","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]

//mapping provinces

var provinceList=provinces.map(p=>
    {
        return (
            <Picker.Item label={p.name} value={p.name} key={p.id}/>
        )
    })


  //mapping years
  var yearList=years.map(y=>
    {
        return (
            <Picker.Item label={y} value={y} key={y}/>
        )
    })

    //mapping months

    var monthList=months.map(m=>
      {
          return (
              <Picker.Item label={m} value={m} key={m}/>
          )
      })

export default function CheckoutScreen()
{


    if(!firebase.apps.length)
  {
    firebase.initializeApp(firebaseConfig)
  }



    const [checked, setChecked] = React.useState('first');
    var [prov,updateProv]=useState("Choose")
    var [year,updateYear]=useState("Year")
    var [month,updateMonth]=useState("Month")
    var [pname,updateName]=useState("")
    var [email,updateEmail]=useState("")
    var [city,updateCity]=useState("")
    var [cardN,updateCardN]=useState("")
    var [postal,updatePostal]=useState("")
    var [cvv,updateCvv]=useState("")
    var [total,updateTotal] =useState(0)
    var [currentItems,updateCurrentItems] =useState("")



    //we must get the total cost from the database for the currently logged in user. this is where we do it
    function getFromDatabase()
  {
    firebase.database().ref("CartItems/"+id).on("value",(data)=>
    {
      var stuff=data.val();
      
      
      if(stuff!=null)
      {
        var keys=Object.keys(stuff);
        var us=""
        var cost=0
        
      for(var i=0;i<keys.length;i++)
      {
        var k=keys[i]
        us=us+stuff[k].name+" | "
        cost=cost+stuff[k].price
      }
      us=us.slice(0,us.length-3)
      updateCurrentItems(us)
      updateTotal(cost)//udating the total cost
      
      }
    
    }
      )
  }


  //add to history table on clicking the pay buttton

  function addToDatabase()
  {
    firebase.database().ref("History/"+id).push(
      {
        items:currentItems,
        price:total,
        orderId:Math.floor((Math.random()*1000000)+1), //generate random order id for all prodcuts orderd
        time:new Date().getHours()+":"+new Date().getMinutes(),
        date:new Date().getFullYear()+"/"+(new Date().getMonth()+1)+"/"+new Date().getDate(),
        province:prov,
        city:city,
        pcode:postal


      }
    ).then(()=>alert("Payment successful"),()=>alert("Payment unsuccessful"))
  }


    function payment()
    {
        if(checked==='first') //paying with card
        {
            if(pname.length===0)
            {
              alert("Please enter your full name")
            }
            else if(email.length===0)
            {
              alert("Please enter your email")
            }
            else if(prov==="Choose")
            {
                alert("Please select your province")
            }
            else if(city.length===0)
            {
              alert("Please enter your city")
            }
            else if(postal.length===0)
            {
              alert("Please enter your postal code")
            }
            else if(cardN.length===0)
            {
              alert("Please enter your card number")
            }
            else if(cardN.length< 16)
            {
              alert("Card number must be 16 digits")
            }
            else if(year==="Year")
            {
              alert("Select expiry year")
            }
            else if(month==="Month")
            {
              alert("Select expiry month")
            }
            else if(cvv.length===0)
            {
              alert("Enter cvv")
            }
            else if(isNaN(cvv))
            {
              alert("cvv must be digits")
            }
            else
            {
              addToDatabase() 
            }
        }
        else //paying with paypal, simply open link to paypal
        {
           Linking.openURL("https://www.paypal.com")
        }
    }

    

    
  return (
     
    <View style={styles.c_view}>

      
    
      {/* #ff9101
      '#0097A7' */}
      <LinearGradient
      colors={['#0097A7','#ffffff','#ffffff']}
      style={styles.c_view}
      >



      <StatusBar style="dark"/>

      <View style={styles.tool}>
        {/* tool bar to add space,dont remove!!! */}
      </View>

      <Text style={styles.more_header}>Checkout</Text>
      

      <View style={styles.holder}>


      <ScrollView contentContainerStyle={styles.check_holder} onScroll={()=>getFromDatabase()}> 

        <Text style={{fontWeight:"bold",fontSize:20,marginTop:10,marginBottom:10,color:"#ff9101"}}>Billing Details</Text>
       
        <Text>First and Last name</Text>
        <TextInput style={styles.inputs}  onChangeText={(val)=>updateName(val)} textContentType="name" placeholder="John Doe"/>

        <Text>Email address</Text>
        <TextInput style={styles.inputs}  onChangeText={(val1)=>updateEmail(val1)} textContentType="emailAddress" placeholder="john.doe@gmail.com"/>

        <Text>Province</Text>
        <Picker style={styles.picker}  selectedValue={prov} onValueChange={(val2)=>updateProv(val2)}>
            {provinceList}
        </Picker>
        

        <View style={{flexDirection:"row"}}>
            <View>
            <Text>City/Town</Text>
            <TextInput style={styles.mini_inputs}  onChangeText={(val)=>updateCity(val)} textContentType="addressCity" placeholder="Cape Town"/>
            </View>

            <View>
            <Text>Postal code</Text>
            <TextInput style={styles.mini_inputs} onChangeText={(val)=>updatePostal(val)} textContentType="postalCode" placeholder="0314"/>
            </View>
        </View>

        <Text style={{fontWeight:"bold",fontSize:20,marginTop:10,marginBottom:10,color:"#ff9101"}}>Payment Method</Text>
        
        {/*credit card payment method*/}
        <View style={styles.pay}>
        <RadioButton
        value="first"
        status={ checked === 'first' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('first')}
      />
        <Text style={{marginTop:8.5,marginEnd:5}}>Credit card</Text>
        <Image source={require('../icons/vm.png')} style={{width:100,height:30,marginTop:5,marginStart:35,borderRadius:5}}/>
      
          </View>


        <View style={{display:checked==='first' ? "flex" :"none"}}>
          <Image source={require('../icons/cool_card.png')} style={{width:250,height:150,marginBottom:20}}/>
        </View>

          <Text>Card number</Text>
        <TextInput style={styles.inputs}  onChangeText={(val)=>updateCardN(val)} maxLength={16} textContentType="creditCardNumber" placeholder="4567 7632 5678 1235"/>
        <View style={{flexDirection:"row"}}>
            <View>
            <Text>Expiration date</Text>
            <Picker style={styles.cvv} selectedValue={year} onValueChange={(val)=>updateYear(val)}>
            {yearList}
        </Picker>
            </View>


            <View>
            <Text> </Text>
            <Picker style={styles.cvv} selectedValue={month} onValueChange={(val)=>updateMonth(val)}>
            {monthList}
        </Picker>
            </View>

            <View>
            <Text>CVV</Text>
            <TextInput style={styles.cvv} onChangeText={(val)=>updateCvv(val)} maxLength={3} keyboardType="number-pad" placeholder="123"/>
            </View>

        </View>
        

        {/* paypal */}

        {/* just for space */}
        
        <View style={{marginBottom:20}}/>
        
        <View style={styles.pay}>
        <RadioButton
        value="second"
        status={ checked === 'second' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('second')}
      />
        <Text style={{marginTop:8.5,marginEnd:5}}>PayPal</Text>
        <Image source={require('../icons/Paypal.jpg')} style={{marginTop:2,width:100,height:33,marginStart:65,borderRadius:5}}/>
      
          </View>

    <Text style={{marginTop:15,fontSize:15,fontWeight:"bold",marginBottom:10}}>Total is:{total}</Text>
          <TouchableOpacity style={styles.checkout} onPress={e=>payment()}>
          <Text style={styles.btn_text}>Pay</Text>
        </TouchableOpacity>

        <View style={{height:100}}/>
      

        

      
      </ScrollView>

      </View>


    
      
      </LinearGradient>
    
    </View>
  )
}
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
            height:35,
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
            height:35,
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