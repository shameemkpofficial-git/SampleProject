import React,{Component} from "react";
import{
    View,
    StyleSheet,
    Text,
    TouchableHighlight,
    

}from 'react-native'

class FlexContent extends Component{
    render(){
        return(
            <View>
                <Text style={styles.contentStyle}>Hoi My Name is {this.props.name}</Text>
            </View>
        )
    }
}

export default class flexBox extends Component{
    constructor(){
        super();
        this.state={
            main_text: 'Hi',
            sub_text:'Native'
        }
    }

    updateText(){
        this.setState({
            main_text: 'Hi (Hello Updated)',
            sub_text:'Framework (native updated)'
        })
    }
    componentDidMount(){
        console.log("the username : ",this.props.route.params.username)
    }

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.text}>{this.state.main_text}</Text>
                <Text style={styles.text}> React </Text>
                <Text style={styles.text}>{this.state.sub_text} </Text>
                <TouchableHighlight style={styles.button}
                    onPress={() => this.updateText()}
                    underlayColor='#42c8f5'>
                    <Text style={styles.button_text}>
                        START
                    </Text>
                </TouchableHighlight>

                <TouchableHighlight style={styles.button}
                underlayColor="#fff"
                onPress={() => this.props.navigation.navigate('Drawer')}>
                    <Text style={styles.button_text}>Click Here</Text>

                </TouchableHighlight> 


                 <FlexContent name= {this.props.route.params.username}>

                </FlexContent>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:2,
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'center',
       // flexDirection:'row',

    },
    text:{
        fontSize:24,
        color:'black',
        fontWeight:'bold',
    },
    button:{
        width:200,
        height:55,
        backgroundColor:'blue',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:6,
        marginTop:29,
    },
    button_text:{
        fontSize:18,
        color:'#fff',
        fontWeight:'bold',

    },
    contentStyle:{
        fontSize:24,
        fontWeight:'bold',
        color:'#151a2e',
        marginTop:20,
    }
})