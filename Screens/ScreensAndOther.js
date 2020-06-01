import React, { useState } from 'react';
import {Image, Text, View, StatusBar, StyleSheet, ScrollView ,TouchableOpacity} from 'react-native';
import { SearchBar,Button,ListItem } from 'react-native-elements';
import { useNavigation, useRoute } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons'; 
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
        <Text style={styles.textX}>COVID-19 Tracker</Text>
        <View style={{flexDirection:"row",alignSelf:"center",alignItems:"center"}}>
          <View style={{width:320,height:60,margin:20}}>
            <SearchBar 
            // cancelIcon={false}
            platform="android"
            placeholder="Search Any Country Here"
            onChangeText={this.updateSearch}           //Search here this.updateSearch
            value={search}
            containerStyle={{
              borderBottomWidth:1,
              borderRadius:70,
              height:60
            }}/>
          </View>
          
        </View>
        {this.state.search.length>0 ?  <View style={{color:"black",width:350,height:400}}>
            <ScrollView style={{width:350,height:400}}>
                {
                  this.state.data.map((l, i) => (
                    <TouchableOpacity onPress={()=>{navigation.navigate('Country Details',l);}}>
                      <ListItem 
                        key={l.ISO2}
                        title={l.Country}
                        bottomDivider
                      />
                    </TouchableOpacity>
                  ))
                }
              
            </ScrollView>
          </View> : null}
        
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
    // data:[],
    // fullData:[],
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
          firstCaseDate:responseJSON[0].Date.substring(0, 10),
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
      <View style={{...styles.container,backgroundColor:"white",paddingTop:"40%"}} >
        <Text style={styles.textS}>COVID19 cases in '{route.params.Country}'</Text>
        <Text style={{...styles.textX,paddingTop:"10%"}}>Date when first case(s) were reported</Text>
        <Text style={{fontSize:16}}>{this.state.firstCaseDate}</Text>
        <Text style={styles.textX}>Number of cases reported first day</Text>
        <Text style={{fontSize:16}}>{this.state.noOfCasesDayOne}</Text>
        <Text style={styles.textX}>Total Confirmed Cases</Text>
        <Text style={{fontSize:16,color:"#296D98"}}>{this.state.totalConfirm}</Text>
        <Text style={styles.textX}>Deaths</Text>
        <Text style={{color:"red",fontSize:16}}>{this.state.deaths}</Text>
        <Text style={styles.textX}>Recovered</Text>
        <Text style={{color:"green",fontSize:16}}>{this.state.recover}</Text>
        <Text style={styles.textX}>Active Cases</Text>
        <Text style={{color:"darkblue",fontSize:16}}>{this.state.activeCases}</Text>
        <MaterialIcons style={{marginTop:100}} name="arrow-back" size={38} color="black" onPress={()=>navigation.goBack()}/>
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
    <View style={{...styles.container,paddingTop:20}}>
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
    },
    textX:{
      fontSize:18,
      fontWeight:"bold"
    }
    });

module.exports = {
  Screen1: Screen1,
  Screen2: Screen2,
  HeadD: HeadD,
}