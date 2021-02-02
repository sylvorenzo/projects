import React from 'react'
import {View,TouchableOpacity as Touch, TextInput,StyleSheet, Text} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {windowHeight, windowWidth} from '../utils/Dimensions';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const SocialButton = ({buttonTitle,btnType, color,backgroundColor, ...rest})=>{
    let bgColor = backgroundColor;
    return(
    
        <Touch style={[styles.buttonContainer, {backgroundColor}]}>
            <View>
                <FontAwesome name={btnType} size={22} style={styles.icon} color={color} />
            </View>
            <View style={styles.btnTxtWrapper}>
                <Text style={styles.buttonText, {color:color}}>{buttonTitle}</Text>
            </View>
            
        </Touch>
        
    );
}
export default SocialButton;
const styles = StyleSheet.create({
    buttonContainer:{
        marginTop: 10,
        width: '100%',
        height: windowHeight / 15,
        backgroundColor: '#2e64e5',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,

    },
    iconWrapper:{
        width: 30,
        justifyContent: 'center',
        alignItems: 'center',

    },
    icon: {
        fontWeight: 'bold',

    },
    btnTxtWrapper:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText:{
        fontSize: 18,
        fontWeight:'bold',
        fontFamily: 'san-seriff',
    }

})