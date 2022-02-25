import React,{Component} from "react";
import{
    View,
    Text,
    StyleSheet,
} from 'react-native'

export default class Status extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.StatusText}>Status Here</Text>

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
    StatusText:{
        fontSize:24,
        fontWeight:"bold",
        color:'black',
    }
})