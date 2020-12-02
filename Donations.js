/*import React from 'react';
import './App.css';
import {StyleSheet,Button, View, TextInput} from 'react-native';




 export default function DonationsScreen() {





  const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems:'Center',
        justifyContent:'center'
    },
input:{
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width:200,

}
});
        
  return (
    <div className="App">
      <header className="App-header">
        <p><h1>DONATIONS</h1></p>
        
        <p>Change lives today by making a Donation</p>

        <label for="foundations">Choose a Foundation:</label>

<select name="foundations" id="foundations">
  <option value="Motsepe">Motsepe</option>
  <option value="Robinhood">Robinhood</option>
  <option value="Ramaphosa">Ramaphosa</option>
  <option value="Africa">Africa</option>
</select>
 <p>Founder Name:</p>

<View style={styles.container}>
<TextInput
keyboardType='default'
  style={styles.input}
  placeholder='e.g. John Gates '
  onChangeText={(val)=> (val)}/>

<text>Contacts: </text>
<TextInput
keyboardType='phone-pad'
  style={styles.input}
  placeholder='e.g. 0712345678'
  onChangeText={(val)=> (val)}/>



  

</View>


 <p>Comments</p>
 <TextInput
 multiline
 keyboardType='default'
  style={styles.input}
  placeholder='e.g. I think the donations will help'
  onChangeText={(val)=> (val)}/>





 <label for="amounts">Choose an Amount:</label>

<select name="amounts" id="amounts">
  <option value="R5">R5</option>
  <option value="R25">R25</option>
  <option value="R50">R50</option>
  <option value="R100">R100</option>
</select>
 <p>Enter amount:R</p>
<TextInput
keyboardType='numeric'
  style={styles.input}
  placeholder='e.g. 50'
  onChangeText={(val)=> (val)}/>

<label for="duratiom">Duration:</label>

<select name="duration" id="duratio">
  <option value="Once-Off">Once-Off</option>
  <option value="Monthly">Monthly</option>
</select>

<br></br>
<Button
  title="Donate"
/>

      </header>
    </div>


   
  );
  
  };

*/