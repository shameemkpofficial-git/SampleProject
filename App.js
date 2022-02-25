import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import Icon from "react-native-vector-icons/MaterialIcons"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"


import Login from "./Login"
import flexBox from "./src/flexBox"
import Home from "./src/Drawer/Home"
import Profile from "./src/Drawer/Profile"
import DrawerContent from "./src/Drawer/DrawerContent"
import Settings from "./src/Drawer/Settings"
import AboutUs from "./src/Drawer/AboutUs"
import Cart from "./src/Tab/Cart"
import Category from "./src/Tab/Category"
import Order from "./src/Tab/Order"
import Search from "./src/Tab/Search"
import Call from "./src/BottomTab/Call"
import Chat from "./src/BottomTab/Chat"
import Status from "./src/BottomTab/Status"


const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()
const Tab = createMaterialTopTabNavigator()
const BottomTab = createBottomTabNavigator()


function MyStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen
            name='LOGIN'
            component={Login}
            options={{headerShown:false}} >

            </Stack.Screen>
            <Stack.Screen
            name='FlexBox'
            component={flexBox}>

            </Stack.Screen>
            <Stack.Screen
            name='Drawer'
            component={MyDrawer}>

            </Stack.Screen>
            <Stack.Screen
            name='Tab'
            component={MyTab}>

            </Stack.Screen>
            <Stack.Screen
            name='MyBottomTab'
            component={MyBottomTab}
            options={{headerShown:false}}></Stack.Screen>
            
        </Stack.Navigator>
    )
}

function MyDrawer(){
    return(
        <Drawer.Navigator
        drawerContent= {(props)=> <DrawerContent {...props}></DrawerContent>}>
            <Drawer.Screen
            name='Home'
            component={Home}>

            </Drawer.Screen>
            <Drawer.Screen
            name="Profile"
            component={Profile}>

            </Drawer.Screen>
            <Drawer.Screen
            name='AboutUs'
            component={AboutUs}>

            </Drawer.Screen>
            <Drawer.Screen
            name='Settings'
            component={Settings}>

            </Drawer.Screen>
            
        </Drawer.Navigator>
    )
}

function MyTab(){
    return(
        <Tab.Navigator
        screenOptions= {{
            tabBarLabelStyle:{
                fontSize:12},
                tabBarItemStyle:{width:100},
                tabBarStyle:{backgroundColor:'#c92eb7'}
            
        }}>
            <Tab.Screen
            name='Cart'
            component={Cart}
            options={{
                tabBarActiveTintColor:'black',
                tabBarInactiveTintColor:'white',
                tabBarIcon:({focused})=> 
                focused ? <Icon name= 'shopping-cart' size={24} color='black'></Icon> : <Icon name= 'shopping-cart' size={24} color='white'></Icon>
            }}></Tab.Screen>

            <Tab.Screen
            name='Category'
            component={Category}
            options={{
                tabBarActiveTintColor:'black',
                tabBarInactiveTintColor:'white',
                tabBarIcon:({focused})=> 
                focused ? <Icon name= 'category' size={24} color='black'></Icon> :<Icon name= 'category' size={24} color='white'></Icon>
            }}></Tab.Screen>

            <Tab.Screen name='Order'
            component={Order}
            options={{
                tabBarActiveTintColor:'black',
                tabBarInactiveTintColor:'#fff',
                tabBarIcon:({focused})=> 
                focused ? <Icon name = 'shopping-bag' size = {24} color='black'></Icon> : <Icon name = 'shopping-bag' size = {24} color='white'></Icon>
            }}></Tab.Screen>

            <Tab.Screen
            name='Search'
            component={Search}
            options={{
                tabBarActiveTintColor:'black',
                tabBarInactiveTintColor:'#fff',
                tabBarIcon:({focused})=> 
                focused ? <Icon name = 'find-in-page' size ={24} color='black'></Icon> : <Icon name = 'find-in-page' size ={24} color='white'></Icon>
            }}></Tab.Screen>
           
        </Tab.Navigator>

    )
}



function MyBottomTab(){
    return(
        <BottomTab.Navigator
        screenOptions={{
            tabBarLabelStyle: {fontSize: 12},
            tabBarItemStyle: {width:100},
            tabBarStyle: {backgroundColor:"#2e53c9"},
        }}>
            <BottomTab.Screen
            name="Call"
            component={Call}
            options={{
                tabBarActiveTintColor:'white',
                tabBarInactiveTintColor:'black',
                tabBarIcon:({focused})=>
                focused ? <Icon name='call' size={24} color='white'></Icon> : <Icon name='call' size={24} color='black'></Icon>
            }}></BottomTab.Screen>

            <BottomTab.Screen
            name='Chat'
            component={Chat}
            options={{
                tabBarActiveTintColor:'#fff',
                tabBarInactiveTintColor:'black',
                tabBarIcon:({focused})=>
                focused ? <Icon name='chat' size={24} color='white'></Icon> : <Icon name="chat" size={24} color='black'></Icon>
            }}></BottomTab.Screen>

            <BottomTab.Screen
            name='Status'
            component={Status}
            options={{
                tabBarActiveTintColor:'#fff',
                tabBarInactiveTintColor:'black',
                tabBarIcon:({focused})=>
                focused ? <Icon name='fiber-smart-record' size={24} color='white'></Icon> : <Icon name='fiber-smart-record' size={24} color='black'></Icon>
            }}>

            </BottomTab.Screen>
        </BottomTab.Navigator>
    )
}


export default function App(){
    return(
        <NavigationContainer>
            <MyStack>

            </MyStack>
        </NavigationContainer>
    )
}