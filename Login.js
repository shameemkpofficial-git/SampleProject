import React,{Component} from "react"
import{
    View,
    StyleSheet,
    ImageBackground,
    Image,
    Text,
    TextInput,
    TouchableHighlight,

}from 'react-native'

import flexBox from "./src/flexBox";

export default class Login extends Component{
    constructor(){
        super();
            this.state= {
                name: null
            }
        }
    updateValue(username){
        console.log(username)
        this.setState({name:username})
    }
    render(){

        const navigation = this.props.navigation;
        return(
            <View style= {styles.container}>
                <ImageBackground source={require('./Assets/bg.jpeg')}
                    style={styles.backgroundImage}>
                    <Image source= {require('./Assets/React.png')}
                        style={styles.logo}>
                    </Image>
                    <Text style={styles.text}>welcome to react native journey</Text>
                    <TextInput style={styles.inputView} 
                    placeholder='Username'
                    placeholderTextColor='black'
                    maxLength={12}
                    onChangeText={(username)=> this.updateValue(username)}>

                    </TextInput>

                    <TextInput style={styles.inputView}
                    placeholder='Password'
                    placeholderTextColor='black'
                    secureTextEntry={true}>

                    </TextInput>
                    <TouchableHighlight style={styles.button}
                    underlayColor='transparent'
                    onPress={()=> this.props.navigation.navigate('register')}>Chapter
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableHighlight>

                </ImageBackground>

            </View>
        )
    }
}
const styles= StyleSheet.create({
    container:{
        height:'100%',
        width:'100%'  ,
        backgroundColor:'white'    
    },
    backgroundImage:{
        height:'100%',
        width:'100%',
        alignItems:"center",
        justifyContent:"center"
    },
    logo:{
        height:100,
        width:100,
        marginBottom:10,
    },
    text:{
        fontSize:20,
        color:'#151B54',
        fontWeight:'bold',
        marginTop:20,
        
        
    },
    inputView:{
        width:"80%",
        height:55,
        backgroundColor:'#BCC6CC',
        borderWidth:1,
        borderColor:'#6D7B8D',
        marginTop:50,
        paddingLeft:120


    },
    button:{
        width:'30%',
        height:35,
        backgroundColor:'#3090C7',
        borderWidth:1,
        marginTop:20,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:15,
    },
    buttonText:{
        fontSize:22,
        fontWeight:'bold',
        color:'#fff'
    }
})
