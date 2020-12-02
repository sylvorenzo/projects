import React from 'react';

import {StyleSheet,Button, View, Text} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';




 export default function helpScreen() {


  
  return (
    <View >
      
      <ScrollView>
        
      <Text style={{fontSize:16,color:"#ff9101",fontWeight:"bold",alignSelf:"center",marginTop:10,marginBottom:5}}>How can we help you?</Text>

       
<Text style={styles.questions}>Can I book my own preferred doctor?</Text>
<Text style={styles.answers}>- Yes you can under the Home Checkup page</Text>

<Text style={styles.questions}>Can I get a home checkup?</Text>
<Text style={styles.answers}>-Yes you can book one</Text>

<Text style={styles.questions}>How do I view items on the cart?</Text>
<Text style={styles.answers}>-You can view items under All items</Text>

<Text style={styles.questions}>Can I remove Items added on the cart?</Text>
<Text style={styles.answers}>-Yes by viewing them on the cart and the pressing remove</Text>

<Text style={styles.questions}>Can I pay using PayPal?</Text>
<Text style={styles.answers}>-Yes,when you checkout</Text>

<Text style={styles.questions}> What is the maximum number of items I can add on the cart? </Text>
<Text style={styles.answers}>-As many as you need</Text>





<Text style={{marginTop:10,fontSize:16,color:"#ff9101",fontWeight:"bold", alignSelf:"center"}}>Contacts</Text>
<Text style={styles.name}>NAME: Janice Nsuzu</Text>
<Text style={styles.email}>E-MAIL: janicen@uj.ac.za</Text>
<Text style={styles.tel}>TELEPHONE: 060 370 5570</Text>

<Text style={styles.name}>NAME: Paballo Mabusela</Text>
<Text style={styles.email}>E-MAIL: paballomabusele@uj.ac.za</Text>
<Text style={styles.tel}>TELEPHONE: 072 334 2298</Text>

<Text style={styles.name}>NAME: TK </Text>
<Text style={styles.email}>E-MAIL: TK16@gmail.com</Text>
<Text style={styles.tel}>TELEPHONE: 072 894 0759</Text>

<Text style={styles.name}>NAME: Sylvorenzo </Text>
<Text style={styles.email}>E-MAIL: Renz0@gmailcom</Text>
<Text style={styles.tel}>TELEPHONE: 067 257 8830</Text>

<Text style={styles.name}>NAME: MK </Text>
<Text style={styles.email}>E-MAIL: MK47@gmail.com</Text>
<Text style={styles.tel}>TELEPHONE: 063 063 8481 </Text>

<Text style={styles.name}>NAME: Bongani Nkambule</Text>
<Text style={styles.email}>E-MAIL: bonganiagent007@gmail.com</Text>
<Text style={styles.tel}>TELEPHONE: 063 112 1483</Text>


</ScrollView>
      
    
        

</View>



   
  );
  
  };


  const styles = StyleSheet.create({
    questions:
    {
       fontWeight:"bold",
       color:"black",
       fontSize:15,
       marginBottom:5,
       marginStart:5
    },
    answers:
    {
      marginStart:8,
      color:"grey",
    },
    name:
    {
        marginStart:8
    },
    email:
    {
      marginStart:8
    },
    tel:
    {
        marginBottom:10,
        marginStart:8
    }
  })



