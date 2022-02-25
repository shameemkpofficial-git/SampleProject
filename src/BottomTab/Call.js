import React,{Component} from "react";
import{
    View,
    Text,
    StyleSheet,
} from 'react-native'

export default class Call extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.CallText}>Call Me</Text>

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
        backgroundColor:'cyan'
    },
    CallText:{
        fontSize:24,
        fontWeight:"bold",
        color:'black',
    }
})