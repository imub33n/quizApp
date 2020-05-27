import React from 'react';
import {ImageBackground, StyleSheet, Text, View } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const image = require("C:/Users/mubee/quizApp/assets/bg.jpg");

export default function App(){
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <Text style={styles.text}>Suup</Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({container: {
    flex: 1,
    flexDirection: "column"},
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems:"center",
  },
  text: {
    fontSize: 30,
    fontWeight: "bold"
  }});
  

  <Drawer.Screen name="Homie" component={MyTabs} />
  
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
class Screen1 extends React.Component {
    state = {
      search: '',
    };
    updateSearch = search => {
      this.setState({ search });
    };
    render() {
      const { search } = this.state;
      return (
        <View style={{...styles.container,backgroundColor:"white"}}>
         <StatusBar barStyle="light-content"/>
          <View style={{width:320,margin:20}}>
            <SearchBar 
            // cancelIcon={false}
            platform="android"
            placeholder="Search Country Here"
            onChangeText={this.updateSearch}
            value={search}
            containerStyle={{
              borderBottomWidth:1,
              borderRadius:70,
              height:60
            }}/>
          </View>
          <Button title="Search" type="solid" buttonStyle={{backgroundColor:"black"}}
            onPress={()=>{navigation.navigate('Country Details'); console.log(search)}}>
         </Button>
        </View>
      );
    }
  }
  const Screen1=(props)=>{
    const navigation = useNavigation();
      return(
        <View style={{...styles.container,backgroundColor:"white"}}>
         <StatusBar barStyle="light-content"/>
         <App {...props} navigation={navigation}></App>
         <Button title="Search" type="solid" buttonStyle={{backgroundColor:"black"}}
            onPress={()=>{navigation.navigate('Country Details'); console.log(search)}}>
         </Button>
        </View>
      );
  }
  <View style={{color:"black"}}>
            {
              list.map((l, i) => (
                <ListItem
                  key={i}
                  title={l.name}
                  // bottomDivider
                />
              ))
            }
          </View>

  // getCountry = (limit=10,searc="")=>{
  //   console.log("inside getCountry");
  //   return new Promise((resolve,reject)=>{
  //     if(searc.length===0){
  //       resolve(_.take(user,limit));
  //     }else{
  //       const formatSearch=searc.toLowerCase();
  //       const results=_.filter(this.state.data,user=>{return contains(user,formatSearch)});
  //       resolve(_.take(results,limit));
  //     }
  //   });
  // }

  <Button title="Search" type="solid" buttonStyle={{backgroundColor:"black"}}
            onPress={()=>{goToScreen2}}>
            {/* onPress={()=>{navigation.navigate('Country Details');}}>//this.getAPIData() */}
          </Button>
///////////////////////////////////////////////////////////////////////////////////////////////////
import React, { useState } from 'react';
import {Image, Text, View, StatusBar, StyleSheet, ScrollView ,TouchableOpacity} from 'react-native';
import { SearchBar,Button,ListItem } from 'react-native-elements';
import { useNavigation, useRoute } from '@react-navigation/native';
import _ from "lodash";

class Scre1en extends React.Component {
  state = {
    search: '',
    data:[],
    fullData:[],
    cName:""
  };
  componentDidMount(){
    this.makeRemoteRequest();
  }
  makeRemoteRequest = ()=>{
    this.getAPIData();
    this.setState({
      data:this.state.data,
      fullData:this.state.data,
    })
  }
  getAPIData =  (  ) => {
    console.log("inside GetAPIData")
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
    return fetch('https://api.covid19api.com/countries', 
      requestOptions)
      .then(response => response.json())
      .then(responseJSON => {
        this.setState({
          data:responseJSON,
          fullData:responseJSON
        });
        
      });
  };
  updateSearch = search => {
    // this.getAPIData();
    //console.log("inside search",search);
    //console.log(this.state.data);
    //let data=this.state.data.filter(x=> x.Country.includes(search))
    const data=_.filter(this.state.fullData,user=>{
      return user.Country.includes(search)});
    this.setState({ search:search,data });
  };
  render() {
    const { search } = this.state;
    const { navigation } = this.props;
    return (
      <View style={{...styles.container,backgroundColor:"white"}}>
        <StatusBar barStyle="light-content"/>
        <View style={{flexDirection:"row",alignSelf:"center",alignItems:"center"}}>
          <View style={{width:320,height:60,margin:20}}>
            <SearchBar 
            // cancelIcon={false}
            platform="android"
            placeholder="Search Country Here"
            onChangeText={this.updateSearch}           //Search here this.updateSearch
            value={search}
            containerStyle={{
              borderBottomWidth:1,
              borderRadius:70,
              height:60
            }}/>
          </View>
          
        </View>
        <View style={{color:"black",width:350,height:400}}>
            <ScrollView style={{width:350,height:400}}>
                {
                  this.state.data.map((l, i) => (
                    <TouchableOpacity onPress={()=>{navigation.navigate('Country Details',l);}}>
                      <ListItem 
                        key={i}
                        title={l.Country}
                        bottomDivider
                      />
                    </TouchableOpacity>
                  ))
                }
              
            </ScrollView>
          </View>
    </View>
    );
  }
}

const Screen1=(props)=>{
  const navigation = useNavigation();
    return(
       <Scre1en {...props} navigation={navigation}></Scre1en>
    );
}
//////////////////////////////////////////////////  Screen 2 /////////////

class Scre2en extends React.Component {
  state = {
    cName:"",
    firstCaseDate:"",
    noOfCasesDayOne:"",
    totalConfirm:"",
    deaths:"",
    recover:"",
    activeCases:"",
    data:[],
    fullData:[],
  };
  
  componentDidMount(){
    this.makeRemoteRequest();
  }
  makeRemoteRequest = ()=>{
    this.getAPIData();
    this.getAPIData2();
  }
  getAPIData2 =  (  ) => {
    const { route } = this.props;
    console.log("inside GetAPIData2 Screen2")
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
    return fetch('https://api.covid19api.com/dayone/country/'+route.params.Slug+'/status/confirmed', 
      requestOptions)
      .then(response => response.json())
      .then(responseJSON => {
        this.setState({
          firstCaseDate:responseJSON[0].Date,
          noOfCasesDayOne:responseJSON[0].Cases,
          totalConfirm:responseJSON[responseJSON.length-1].Cases,
        });
      });
  };
  getAPIData =  (  ) => {
    const { route } = this.props;
    console.log("inside GetAPIData Screen2")
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
    return fetch('https://api.covid19api.com/live/country/'+route.params.Slug+'/status/confirmed', 
      requestOptions)
      .then(response => response.json())
      .then(responseJSON => {
        this.setState({
          deaths:responseJSON[responseJSON.length-1].Deaths,
          recover:responseJSON[responseJSON.length-1].Recovered,
          activeCases:responseJSON[responseJSON.length-1].Active,
        });
      });
  };
  render() {
    const { route } = this.props;
    const { navigation } = this.props;
    return (
      <View style={{...styles.container,backgroundColor:"white"}} >
        <Text style={styles.textS}>{route.params.Country}</Text>
        <Text>Date when first case(s) were reported:{this.state.firstCaseDate}</Text>
        <Text>Number of cases reported first day: {this.state.noOfCasesDayOne}</Text>
        <Text>Total Confirmed Cases:{this.state.totalConfirm}</Text>
        <Text>Deaths:{this.state.deaths}</Text>
        <Text>Recovered:{this.state.recover}</Text>
        <Text>Active Cases:{this.state.activeCases}</Text>
        <Text></Text>
        <Button title="Back"
        onPress={()=>navigation.goBack()}>
        </Button>
      </View>
      )
    }
}

const Screen2=(props)=>{
  const navigation = useNavigation();
  const route = useRoute();
  return(
    <Scre2en {...props} navigation={route,navigation}></Scre2en>
      
  );
}


const HeadD=({navigation})=>{
  return(
    <View style={styles.container}>
      <Image  
          style={{width:200,height:85,marginVertical:60}}
          source={require("C:/Users/mubee/quizApp/assets/Covid.jpg")}
      />
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      paddingTop:220
      },
    textS:{
      fontSize:32
    }
    });

module.exports = {
  Screen1: Screen1,
  Screen2: Screen2,
  HeadD: HeadD,
}
//////////////////////////////
import React from 'react';
import {Button,Image, Text, View, StyleSheet } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from "@react-navigation/stack"
import {createDrawerNavigator,DrawerItem,DrawerContentScrollView,DrawerItemList} from '@react-navigation/drawer'
import { Ionicons } from '@expo/vector-icons';

import {Screen1,Screen2,HeadD} from "./Screens/ScreensAndOther";
import Screen3 from "./Screens/Screen3"
import Screen4 from "./Screens/Screen4"
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
      <Stack.Screen name="All Country Stats" component ={Screen4} 
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