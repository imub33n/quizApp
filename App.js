import React from 'react';
import {Image, Text, View, StyleSheet } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from "@react-navigation/stack"
import {createDrawerNavigator,DrawerItem,DrawerContentScrollView,DrawerItemList} from '@react-navigation/drawer'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Home from "./Screens/Home"
import Teams from "./Screens/Screen1"
import Chat from "./Screens/Chat"
import HeadD from "./Screens/HeadD"
import Sett from "./Screens/Settings"

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
function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={require('./assets/icon.png')}
    />
  );
}
const Tab = createMaterialBottomTabNavigator();
function MyTabs() {
  return (
    <Tab.Navigator activeColor="#694fad" inactiveColor="#999" barStyle={{ backgroundColor: '#f7f7f7' }} shifting={false}>
      <Tab.Screen name="Activity" component={Home} 
        options={{tabBarIcon:()=><FontAwesome name="bell-o" size={24} color="#694fad"/>, headerTitle: props => <LogoTitle {...props} /> }} 
        />
      <Tab.Screen name="Chat" component={Chat} options={{tabBarIcon:()=><MaterialIcons name="chat" size={24} color="#694fad" />}}/>
      <Tab.Screen name="Teams" component={Teams} options={{tabBarIcon:()=><MaterialCommunityIcons name="account-group" size={24} color="#694fad" />}}/> 
      <Tab.Screen name="Assignments" component={Teams} options={{tabBarIcon:()=><MaterialCommunityIcons name="bag-personal-outline" size={24} color="#694fad" />}}/>
      <Tab.Screen name="Calender" component={Chat} options={{tabBarIcon:()=><MaterialCommunityIcons name="calendar-multiselect" size={24} color="#694fad" />}}/>
      <Tab.Screen name="More" component={Chat} options={{tabBarIcon:()=><Ionicons name="ios-more" size={24} color="#694fad" />}}/>


    </Tab.Navigator>
  );
}

const Stack= createStackNavigator();
const StackNavigators=()=>{
  return(
    <Stack.Navigator initialRouteName={"Home"}>
      <Stack.Screen name="Home" component ={Home} options={{ title: 'Activity' }}/>
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