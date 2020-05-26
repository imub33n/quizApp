import React, { useState } from 'react';
import {Image, Text, View, StatusBar, StyleSheet, ScrollView } from 'react-native';
import { SearchBar,Button,ListItem } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import _ from "lodash";

// const contains=({Country},searcah)=>{
//     if(Country.includes(searcah)){
//       return true;
//     }
//     return false;
// }
// const getCountry = (limit=10,searc="")=>{
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
class Scre1en extends React.Component {
  state = {
    search: '',
    list:[{name: 'Amy Farhan'},{name: 'Chris Jacksin'}],
    data:[],
    fullData:[] 
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
    console.log("inside search",search);
    console.log(this.state.data);
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
          <Button title="Search" type="solid" buttonStyle={{backgroundColor:"black"}}
            onPress={()=>{goToScreen2}}>
            {/* onPress={()=>{navigation.navigate('Country Details');}}>//this.getAPIData() */}
          </Button>
        </View>
        <View style={{color:"black",width:350,height:400}}>
            <ScrollView style={{width:350,height:400}}>
              {
                this.state.data.map((l, i) => (
                  <ListItem
                    key={i}
                    title={l.Country}
                    bottomDivider
                  />
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






const Screen2=({navigation})=>{
  return(
    <View style={{...styles.container,backgroundColor:"white"}}>
    <Text>Screen2</Text>
    <Button title="Back"
    onPress={()=>navigation.goBack()}>
    </Button>
  </View>
);
}
const Screen3=({navigation})=>{
  return(
    <View style={{...styles.container,backgroundColor:"#691f1d"}}>
     <Text>Screen3</Text>
     {/* <Button title="Feed"
     onPress={()=>navigation.goBack()}>
     </Button> */}
    </View>
  );
}
const Screen4=({navigation})=>{
  return(
    <View style={{...styles.container,backgroundColor:"#194fad"}}>
    <Text>Screen4</Text>
    {/* <Button title="Back"
    onPress={()=>navigation.goBack()}>
    </Button> */}
  </View>
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
  Screen3: Screen3,
  Screen4: Screen4,
  HeadD: HeadD,
  
  
}