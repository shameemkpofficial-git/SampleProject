import React,{Component} from "react";
import{
    View,
    Text,
    StyleSheet,
    Image,
}from 'react-native'

export default class DrawerContent extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.ProfileContainer}>
                    <View style={styles.profileIcon}>
                        <Image source={require('../../Assets/React.png')}
                        style={styles.profileImage}></Image>
                    </View>
                    <View style={styles.infoView}>
                        <Text style={styles.nameText}>Melinda Sordino</Text>
                        <Text style={styles.emailText}>melinda@gmail.com</Text>
                        <Text style={styles.emailText}>+91-7845230934</Text>
                    </View>

                </View>
                <Text style={styles.menu}
                onPress={()=>this.props.navigation.navigate('Home')}>Home</Text>
                <Text style={styles.menu}
                onPress={()=>this.props.navigation.navigate('Profile')}>Profile</Text>
                <Text style={styles.menu}
                onPress={()=>this.props.navigation.navigate('AboutUs')}>About Us</Text>
                <Text style={styles.menu}
                onPress={()=>this.props.navigation.navigate('Settings')}>Settings</Text>
                

            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',

    },
    menu:{
        fontSize:18,
        marginTop:10,
        marginLeft:10,
        color:'blue',
        fontWeight:'bold',

    },
    ProfileContainer:{
        height:'20%',
        width:'100%',
        flexDirection:'row',
        alignItems:'center'
    },
    profileIcon:{
        height:100,
        width:100,
        backgroundColor:"#bbbbbb",
        borderRadius:50,
        marginTop:10,
        marginLeft:10,
    },
    infoView:{
        marginLeft:10,
    },
    profileImage:{
        height:'100%',
        width:'100%'
    },
    nameText:{
        color:'#360',
        fontWeight:'bold',
        marginBottom:5,

    },
    emailText:{
        fontWeight:'bold'
    }
})