/**
 * @format
 */

 import {AppRegistry} from 'react-native';
 import App from './App';
 
 import webView from './src/webView';
 import flexBox from './src/flexBox';
 
 import Home from './src/Drawer/Home';
 import {name as appName} from './app.json';
 import Login from './Login';
 import Settings from './src/Drawer/Settings';
 import AboutUs from './src/Drawer/AboutUs';
 
 import Cart from '../SampleProject/src/Tab/Cart';
 import Category from './src/Tab/Category';
 import Order from './src/Tab/Order';
 import Search from './src/Tab/Search';
 
 
 
 
 AppRegistry.registerComponent(appName, () => Cart);
 