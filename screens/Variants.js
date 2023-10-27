import React, { Component } from 'react';
import {
          View,
          Text, 
          TouchableOpacity,
          Platform,
          StatusBar,
          StyleSheet
} from "react-native";

export default class Others extends Component {
    render(){
        return(
            <View style={styles.container} >
                <Text style = {styles.titleText}> Spiderman </Text>
                <Text style = {styles.titleText}> 2099 </Text>
                <View style= {styles.storyContainer}>
                    <Text style={styles.storyText}>https://marvel.fandom.com/wiki/Spider-Man%27s_2099_Suit#Alternate_Reality_Versions</Text>
                </View>
                <TouchableOpacity style={{
                    flex:'0.25',
                    borderWidth:2,
                    borderRadius: 15,
                    width: 155,
                    maxHeight: 23,
                    marginTop: 20,
                    alignItems: 'center',
                    borderColor:'orange'
                }} onPress={()=>{
                  this.props.navigation.navigate("Home");
                }}>
                    <Text style={{color:'orange'}}>Click on me to go back</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#2B3784'
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0 
    },
    routeCard: {
        flex: 0.12,
        justifyContent: "center", 
        alignItems: "center",
        margin: 10,
        marginLeft: 30,
        marginRight: 30,
        borderRadius: 100,
        backgroundColor: "#447BBE"
    },
    titleBar: {
        flex: 0.5,
        justifyContent: "center",
        alignItems: "center"
    },
    titleText: {
        fontSize: 40,
        fontWeight: "bold",
        color: "#B11313"
    },
    routeText: {
        fontSize: 25,
        fontWeight: "bold",
        color: '#DF1F2D',
        justifyContent: "center", 
        alignItems: "center"
    },
    storyText: {
        color: '#DF1F2D',
        justifyContent: "center", 
        alignItems: "center",
        padding: 5,
    },
    storyContainer: {
        borderWidth: 2,
        borderRadius: 15,
        flex: 0.05,
        width:555,
        marginTop: 10,
        borderColor: '#f60100'
    }
})