import React from 'react'
import {TouchableOpacity as Touch, Text, Button,StyleSheet} from 'react-native';
import { windowHeight } from '../utils/Dimensions';

const FormButton = ({buttonTitle, ...rest})=>{
    return(
        
        <Touch {...rest} style={styles.btnColor}>
            <Text>{buttonTitle}</Text>
        </Touch>
        
    );
}
export default FormButton;
const styles = StyleSheet.create({
    buttonContainer:{
        marginTop: 10,
        width: '100%',
        backgroundColor: '#2e64e5',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
        

    },
    btnColor:{
        color: '#03c6fc',
        backgroundColor: '#03c6fc',
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 120,
        paddingRight: 120,
    }
})