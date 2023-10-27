import React, { Component } from 'react';
import {
          View,
          Text,
          TouchableOpacity,
          Platform,
          StatusBar,
          StyleSheet
} from "react-native";

export default class BackStory extends Component {
    render(){
        return(
            <View style={styles.container} >
                <Text style = {styles.titleText}> Spiderman </Text>
                <Text style = {styles.titleText}> 2099 </Text>
                <View style= {styles.storyContainer}>
                    <Text style={styles.storyText}>Miguel eventually becomes head of the genetics program of Alchemax, intended to create new controlled super-powered soldiers called "corporate raiders." Miguel is specifically inspired by surviving records concerning Spider-Man and hopes to one day create a similarly powered person. But after a human test subject dies during an early experiment, Miguel tells Tyler Stone he wishes to resign from Alchemax and discontinue his genetics research. Rather than let Miguel leave, Tyler Stone tricks him into taking Rapture, an addictive drug that genetically bonds to the user. Tyler reminds Miguel that only Alchemax is allowed to legally distribute this drug, so if O'Hara does not remain with the corporation then Tyler must assume he is getting the drug from the black market and will be forced to tell the police. Not wishing to be a blackmailed addict, Miguel recalls that he entered his own genetic code into his machine's databanks during initial experiments, using it as a human DNA test sample. Intending to use this older template of his pure genetic code to write over his current biology and free himself from the Rapture, Miguel sneaks into Alchemax and uses the gene alteration machines on himself. After Miguel turns on the machine to rewrite his DNA, his jealous subordinate Aaron Delgado sabotages the machines, causing them to alter Miguel's genetic code to be "50% spider DNA." Miguel survives the process, but realizes he now has spider-abilities. Realizing that there is now a person with abilities similar to Spider-Man, Tyler Stone sends agents to hunt this person. To conceal his identity while he fights his pursuers, Miguel dons a bodysuit with a mask that he once wore for the Mexican Day of the Dead festival. Miguel chooses this costume in particular because it is the only clothing he has that is made from "UMF" (Unstable Molecule Fabric), meaning it is the only clothing he owns that will not be torn or shred by the spider-talons that now occupy his hands and feet. After seeing him operate in public, a group of Thorites (worshippers of the Marvel hero Thor) come to believe that Miguel is the legendary Spider-Man back from the dead, and that he is the harbinger of Thor's eventual return.</Text>
                    <Text style={styles.storyText}> Origin --> https://en.wikipedia.org/wiki/Spider-Man_2099 </Text>
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
        flex: 0.33,
        marginTop: 10,
        borderColor: '#f60100'
    }
})