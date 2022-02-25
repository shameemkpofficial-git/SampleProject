import React,{Component} from "react";
import{
    View,
    Text,
    StyleSheet,
} from 'react-native'

export default class Search extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.searchText}>hi this is search page</Text>

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
        backgroundColor:'violet'
    },
    searchText:{
        fontSize:24,
        fontWeight:"bold",
        color:'#fff',
    }
})