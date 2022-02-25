import React,{Component} from "react";
import{
    View,
    Text,
    StyleSheet,
} from 'react-native'

export default class Settings extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.SettingsText}>hi this is Settings page</Text>

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
    SettingsText:{
        fontSize:24,
        fontWeight:"bold",
        color:'black',
    }
})