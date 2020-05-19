import React from 'react';
import {Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from "@react-navigation/stack"
import {createDrawerNavigator,DrawerItem,DrawerContentScrollView,DrawerItemList, Icon} from '@react-navigation/drawer'
import Home from "./Screens/Home"
import Teams from "./Screens/Screen1"
import Chat from "./Screens/Chat"
import HeadD from "./Screens/HeadD"

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
      <Drawer.Screen name="Homie" component={Home} />
      <Drawer.Screen name="Teams" component={Teams} />
      <Drawer.Screen name="Chat" component={Chat} />
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
const Stack= createStackNavigator();
const StackNavigators=()=>{
  return(
    <Stack.Navigator //initialRouteName={"home"}
    >
      <Stack.Screen name="MeDrawer" component={MeDrawer}/>
      <Stack.Screen name="Home" component ={Home} options={{ title: 'Activity' }}/>
      <Stack.Screen name="Teams" component ={Teams} options={{ title: 'Teams' }}/>
      <Stack.Screen name="Chat" component ={Chat} options={{ title: 'Chats' }}/>
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