import React from 'react';
import {Button,Image, Text, View, StyleSheet } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from "@react-navigation/stack"
import {createDrawerNavigator,DrawerItem,DrawerContentScrollView,DrawerItemList} from '@react-navigation/drawer'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {Home,Teams,Chat,HeadD,Sett,Assign,Calendar,More} from "./Screens/ScreensAndOther"

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
      }}
      >
      <Drawer.Screen name="Homie" component={MyTabs} />
      <Drawer.Screen name="Teams" component={Teams} />
      <Drawer.Screen name="Chat" component={Chat} />
      <Drawer.Screen name="Settings" component={Sett} />
    </Drawer.Navigator>
  );
}
function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <HeadD></HeadD>
      <DrawerItemList {...props} />
      <DrawerItem label="Help" onPress={() => alert("Alert!!! This alert won't HELP you,its a HELPless HELP alert!")} />
    </DrawerContentScrollView>
  );
}

const Tab = createMaterialBottomTabNavigator();
function MyTabs() {
  return (
    <Tab.Navigator activeColor="#694fad" inactiveColor="#999" barStyle={{ backgroundColor: '#f7f7f7' }} shifting={false}>
      <Tab.Screen name="Activity" component={StackHome} 
        options={{tabBarIcon:()=><FontAwesome name="bell-o" size={24} color="gray"/>}} 
        />
      <Tab.Screen name="Chat" component={StackChat} options={{tabBarIcon:()=><MaterialIcons name="chat" size={24} color="gray" />}}/>
      <Tab.Screen name="Teams" component={StackTeams} options={{tabBarIcon:()=><MaterialCommunityIcons name="account-group" size={24} color="gray" />}}/> 
      <Tab.Screen name="Assignments" component={StackAssignments} options={{tabBarIcon:()=><MaterialCommunityIcons name="bag-personal-outline" size={24} color="gray" />}}/>
      <Tab.Screen name="Calender" component={StackCalender} options={{tabBarIcon:()=><MaterialCommunityIcons name="calendar-multiselect" size={24} color="gray" />}}/>
      <Tab.Screen name="More" component={StackMore} options={{tabBarIcon:()=><Ionicons name="ios-more" size={24} color="gray" />}}/>
    </Tab.Navigator>
  );
}

const Stack= createStackNavigator();
const StackHome=()=>{
  return(
    <Stack.Navigator screenOptions={({navigation})=>({
      headerRight:()=><View style={{paddingHorizontal:10}}><MaterialIcons name="search" size={32} color="black" /></View>,
      headerLeft:()=><View style={{paddingHorizontal:10}}><Ionicons name="ios-menu" size={32} color="black" onPress={()=>navigation.toggleDrawer()}/></View>})}>
      <Stack.Screen name="Home" component ={Home} 
      options={{
        headerTitleAlign:"center" ,
        }}/>
    </Stack.Navigator>
 );
}
const StackChat=()=>{
  return(
    <Stack.Navigator>
      <Stack.Screen name="Chat" component ={Chat} 
      options={({navigation})=>({
        headerTitleAlign:"center" ,
        headerRight:()=><View style={{paddingHorizontal:10}}><MaterialIcons name="search" size={32} color="black" /></View>,
        headerLeft:()=><View style={{paddingHorizontal:10}}><Ionicons name="ios-menu" size={32} color="black" onPress={()=>navigation.toggleDrawer()}/></View>})}/>
    </Stack.Navigator>
 );
}
const StackTeams=()=>{
  return(
    <Stack.Navigator >
      <Stack.Screen name="Teams" component ={Teams} 
      options={({navigation})=>({
        headerTitleAlign:"center" ,
        headerRight:()=><View style={{paddingHorizontal:10}}><MaterialIcons name="search" size={32} color="black" /></View>,
        headerLeft:()=><View style={{paddingHorizontal:10}}><Ionicons name="ios-menu" size={32} color="black" onPress={()=>navigation.toggleDrawer()}/></View>})}/>
    </Stack.Navigator>
 );
}
const StackAssignments=()=>{
  return(
    <Stack.Navigator >
      <Stack.Screen name="Assignments" component ={Assign} 
      options={({navigation})=>({
        headerTitleAlign:"center" ,
        headerRight:()=><View style={{paddingHorizontal:10}}><MaterialIcons name="search" size={32} color="black" /></View>,
        headerLeft:()=><View style={{paddingHorizontal:10}}><Ionicons name="ios-menu" size={32} color="black" onPress={()=>navigation.toggleDrawer()}/></View>})}/>
    </Stack.Navigator>
 );
}
const StackCalender=()=>{
  return(
    <Stack.Navigator>
      <Stack.Screen name="Calender" component ={Calendar} 
      options={({navigation})=>({
        headerTitleAlign:"center" ,
        headerRight:()=><View style={{paddingHorizontal:10}}><MaterialIcons name="search" size={32} color="black" /></View>,
        headerLeft:()=><View style={{paddingHorizontal:10}}><Ionicons name="ios-menu" size={32} color="black" onPress={()=>navigation.toggleDrawer()}/></View>})}/>
    </Stack.Navigator>
 );
}
const StackMore=()=>{
  return(
    <Stack.Navigator >
      <Stack.Screen name="Options" component ={More} options={{ headerTitleAlign:"center" }} />
    </Stack.Navigator>
 );
}


function App() {
  return (
    <NavigationContainer>
      <MeDrawer/>
    </NavigationContainer>
  );
};

export default App;