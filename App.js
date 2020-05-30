import React from 'react';
import {Button,Image, Text, View, StyleSheet } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from "@react-navigation/stack"
import {createDrawerNavigator,DrawerItem,DrawerContentScrollView,DrawerItemList} from '@react-navigation/drawer'
import { Ionicons } from '@expo/vector-icons';

import {Screen1,Screen2,HeadD} from "./Screens/ScreensAndOther";
import Screen3 from "./Screens/Screen3"
import MyTabs from "./Screens/Screen4"
function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <HeadD></HeadD>
      <DrawerItemList {...props} />
      <DrawerItem label="Help" onPress={() => alert("Alert!!! This alert won't HELP you,its a HELPless HELP alert!")} />
    </DrawerContentScrollView>
  );}
const Stack= createStackNavigator();
const StackStart=()=>{
  return(
    <Stack.Navigator screenOptions={({navigation})=>({
      headerLeft:()=><View style={{paddingHorizontal:10}}><Ionicons name="md-menu" size={32} color="white" onPress={()=>navigation.toggleDrawer()}/></View>})}>
      <Stack.Screen name="Start" component ={Screen1} 
      options={{
        headerStyle: {
          backgroundColor: 'black',
        },
        headerTintColor: '#fff',
        headerTitleAlign:"center" ,
        }}/>
      <Stack.Screen name="Country Details" component ={Screen2} 
      options={{
        headerStyle: {
          backgroundColor: 'black',
        },
        headerTintColor: '#fff',
        headerTitleAlign:"center" ,
        }}/>
    </Stack.Navigator>
  );}
const StackGlobal=()=>{
  return(
    <Stack.Navigator screenOptions={({navigation})=>({
      headerLeft:()=><View style={{paddingHorizontal:10}}><Ionicons name="md-menu" size={32} color="white" onPress={()=>navigation.toggleDrawer()}/></View>})}>
      <Stack.Screen name="Global Summary" component ={Screen3} 
      options={{
        headerStyle: {
          backgroundColor: 'black', 
        },
        headerTintColor: '#fff',
        headerTitleAlign:"center" ,
        }}/>
    </Stack.Navigator>
  );}
const StackContinental=()=>{
  return(
    <Stack.Navigator screenOptions={({navigation})=>({
      headerLeft:()=><View style={{paddingHorizontal:10}}><Ionicons name="md-menu" size={32} color="white" onPress={()=>navigation.toggleDrawer()}/></View>})}>
      <Stack.Screen name="All Country Stats" component ={MyTabs} 
      options={{
        headerStyle: {
          backgroundColor: 'black',
        },
        headerTintColor: '#fff',
        headerTitleAlign:"center" ,
        }}/>
    </Stack.Navigator>
  );}
const Drawer= createDrawerNavigator();
function MeDrawer() {
  return (
    <Drawer.Navigator backBehavior="history" drawerType="back" overlayColor="gray"  
      drawerStyle={{backgroundColor: 'white',width: 300,}}
      drawerContent={props => <CustomDrawerContent {...props} />}
      drawerContentOptions={{
        activeTintColor: 'white',
        activeBackgroundColor:"black",
        itemStyle: {},
      }}>
      <Drawer.Screen name="Start" component={StackStart} />
      <Drawer.Screen name="Global Summary" component={StackGlobal} />
      <Drawer.Screen name="All Country Stats" component={StackContinental} />
    </Drawer.Navigator>
  );}
function App() {
  return (
    <NavigationContainer>
      <MeDrawer/>
    </NavigationContainer>
  );
};

export default App;