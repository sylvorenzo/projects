import React from 'react';
import {View, Text, Button, StyleSheet,TouchableOpacity, Image} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

const OnboardingScreen = ({navigation})=>{

    return(
        <Onboarding 
        onSkip={()=>navigation.replace("Login")}
        onDone={()=>navigation.navigate("Login")}
        pages={[
        {
            backgroundColor: '#ccffcc',
            image: <Image source={require('../assets/boarding5.jpg')} /> ,
            title: 'Welcome ',
            subtitle: 'Innovation at its Finest',
        },
        {
            backgroundColor: '#05e6d7',
            image: <Image source={require('../assets/boarding6.jpg')} /> ,
            title: 'MED GEO',
            subtitle: 'We Are here to serve you',
        },
        {
            backgroundColor: '#ccffcc',
            image: <Image source={require('../assets/boarding8.jpg')} /> ,
            title: 'Create and Inspire',
            subtitle: 'Never give up on your dream',
        }
    ]}
    />
    );
}
export default OnboardingScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})