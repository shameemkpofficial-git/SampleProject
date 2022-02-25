import React,{Component} from "react";
import{
    View,
    Text,
    StyleSheet,
} from 'react-native'

export default class Profile extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.profileText}>hi this is profile page</Text>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        height:'100%',
        width:'100%',
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'green'
    },
    profileText:{
        fontSize:24,
        fontWeight:"bold",
        color:'#fff',
    }
})