import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import _ from "lodash";

class Scre3en extends React.Component {
  state = {
    nCases:"",
    tCases:"",
    nDeaths:"",
    tDeaths:"",
    nRecovered:"",
    tRecovered:"",
  };
  componentDidMount(){
    this.makeRemoteRequest();
  }
  makeRemoteRequest = ()=>{
    this.getAPIData();
  }
  
  getAPIData = () => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    return fetch('https://api.covid19api.com/summary', requestOptions)
      .then(response => response.json())
      .then(responseJSON => {
        this.setState({
          nCases:responseJSON.Global.NewConfirmed,
          tCases:responseJSON.Global.TotalConfirmed,
          nDeaths:responseJSON.Global.NewDeaths,
          tDeaths:responseJSON.Global.TotalDeaths,
          nRecovered:responseJSON.Global.NewRecovered,
          tRecovered:responseJSON.Global.TotalRecovered,
        });
        //console.log(responseJSON.Global.NewConfirmed)
      });
  };
  render(){
    return(
      <View style={{...styles.container,backgroundColor:"white"}}>
       <Text style={styles.textS}>Global Cases</Text>
       <Text>New Confirmed:{this.state.nCases} </Text>
       <Text>Total Confirmed:{this.state.tCases} </Text>
       <Text>New Deaths:{this.state.nDeaths} </Text>
       <Text>Total Deaths:{this.state.tDeaths} </Text>
       <Text>New Recovered:{this.state.nRecovered} </Text>
       <Text>Total Recovered:{this.state.tRecovered} </Text>
      </View>
    );
  }
}

const Screen3=()=>{
    return(
      <Scre3en></Scre3en>
    )
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

export default Screen3;