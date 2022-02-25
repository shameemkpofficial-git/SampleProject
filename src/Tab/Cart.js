import React,{Component} from "react";
import{
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableHighlight,
} from 'react-native'
import { color } from "react-native-reanimated";

import Icon from "react-native-vector-icons/MaterialIcons"

export default class Cart extends Component{
    constructor(){
        console.log("constructor called")
        super();
        this.state= {
            headerText: null
        }
    }

    static getDerivedStateFromProps(){
        console.log("Getderivedstatefromprops Called")
        return null
    }

    updateState(){
        this.setState({headerText: 'Component Updated'})
    }

    componentDidMount(){
        console.log("Component did Called")
    }

    // shouldComponentUpdate(){
    //     console.log("Should Component Update Called")
    //     return null
        
    // }

    componentDidUpdate(){
        console.log("component Did Update Called")
    }

    componentWillUnmount(){
        console.log("Component will Unmount is Called")
    }

    
    render(){
        console.log("Render Called")
        return(
            <View style={styles.container}>
                <ScrollView style={styles.ScrollContainer}>
                    <View style={styles.scrollChildView}>
                       <View style={styles.headerCard}>
                       {/* <Text style={{fontWeight:'bold', fontSize:16, marginBottom:90}}>{this.state.headerText}</Text> */}
                       </View>
                        
                      <View style={styles.baseLineCard}>
                          

                        <View style={styles.textHolder}>
                            <Icon name='edit' color='white' size={16}></Icon>
                            <Text style={{fontSize:16, marginLeft:10, fontStyle:'italic'}}>Mounting</Text>
                        </View>

                        <View style={styles.textHolder}>
                            <Icon name='edit' color='white' size={16}></Icon>
                            <Text style={{fontSize:16, marginLeft:10, fontStyle:'italic'}}>Updating</Text>
                        </View>
                        
                        <View style={styles.textHolder}>
                            <Icon name='edit' color='white' size={16}></Icon>
                            <Text style={{fontSize:16, marginLeft:10, fontStyle:'italic'}}>Un Mounting</Text>
                        </View>
                        <TouchableHighlight style={{ width:'80%', height:55, backgroundColor:'#fff', alignItems:'center', justifyContent:'center', marginTop:30}}
                        onPress={()=>this.updateState() }>
                            <Text style={{ color:'black', fontWeight:'bold', fontSize:20 }}>UPDATING</Text>
                        </TouchableHighlight>
                      </View>
                    </View>

                </ScrollView>


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
        backgroundColor:'black'
    },
    CartText:{
        fontSize:24,
        fontWeight:"bold",
        color:'#fff',
    },
    ScrollContainer:{
        width:'100%',
        height:'100%',
    },
    scrollChildView: {
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
    },
    headerCard:{
        width:'95%',
        height:200,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'red',
        marginTop:10,
        elevation:4

    },
    baseLineCard:{
        width:'95%',
        padding:15,
        alignItems:'center',
        backgroundColor:'green',
        marginTop:30,
        elevation:4,
        
    },
    textHolder:{
        flexDirection:'row',
        marginTop:10,

    },
})