import React, { Component, useState } from 'react';
import { View, Text, Container, ListItem, FlatList, Content, StyleSheet, TouchableWithoutFeedback as Touch} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Video from 'react-native-video';

const VideoScreen = () =>{
    
    const [filterType, setFilterType] = useState();
 
    return(
        
        <View style={styles.container}>

            <View style={{height:40}}/>

            <ScrollView>

            
            <View style={styles.container}>
                <Video source={ require('../videos/assignment1.mp4')}   // Can be a URL or a local file.      
                    style={styles.video} 
                    paused={true}
                    controls
                    filterEnabled={true}
                    filter={filterType}

                    
                />
                <View>
                    <Text style={styles.text}> CANCER</Text>
                </View>
                
            </View>
            <View style={styles.container}>
                <Video source={ require('../videos/facemask.mp4')}   // Can be a URL or a local file.      
                    style={styles.video} 
                    paused={true}
                    controls
                    
                />
                <View>
                    <Text style={styles.text}> PANDEMIC SAFETY TIPS </Text>
                </View>
            </View>
            <View style={styles.container}>
                <Video source={ require('../videos/hypertension.mp4')}   // Can be a URL or a local file.      
                    style={styles.video} 
                    paused={true}
                    controls
                
                />
                <View>
                    <Text style={styles.text}> HYPERTENSION </Text>
                </View>
                
            </View>
            </ScrollView>
        </View>
    );   
}
export default VideoScreen;

const styles = StyleSheet.create({
    container:{
       
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
       
    },
    video:{
        flex: 1,
        height: 200,
        width: 300,
        position: "absolute",
        justifyContent: 'center',


    },
    text:{
        paddingTop: 220,
        fontSize: 20,

    }
})
