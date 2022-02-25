import React,{Component} from "react";
import{
    View,

}from 'react-native'
import { WebView } from 'react-native-webview';

export default class webView extends Component{
    render(){
        return <WebView source={{ uri: 'https://www.apple.com/in/' }} />;
        
    }
}