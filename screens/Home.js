import React, { Component } from 'react';
import {
          View,
          Text,
          SafeAreaView, 
          TouchableOpacity,
          Platform,
          StatusBar,
          StyleSheet,
} from "react-native";

export default class HomeScreen extends Component {
    render() {
        return(
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea}/>
                    <View style={styles.titleBar}>
                        <Text style={styles.titleText}>Spiderman</Text>
                        <Text style={styles.titleText}>2099</Text>
                    </View>
                    <TouchableOpacity onPress={()=>{
                    this.props.navigation.navigate("ColorCode");
                    }} style={styles.routeCard}>
                        <Text style={styles.routeText}> Suit Color Codes </Text> 
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{
                        this.props.navigation.navigate("Theme");
                    }} style={styles.routeCard}>
                        <Text style={styles.routeText}> Theme </Text> 
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{
                        this.props.navigation.navigate("Story");
                    }}  style={styles.routeCard}>
                        <Text style={styles.routeText}> Back-Story </Text> 
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{
                        this.props.navigation.navigate("OtherVariants");
                    }}  style={styles.routeCard}>
                        <Text style={styles.routeText}> Other Variants </Text> 
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{
                        this.props.navigation.navigate("Credits");
                    }}  style={styles.routeCard}>
                        <Text style={styles.routeText}> Credits </Text> 
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
    }
})