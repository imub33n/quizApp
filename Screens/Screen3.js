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
      })
      .catch(function(error) {
        console.log('There has been a problem with your fetch operation: ' + error.message);
        });
  };
  render(){
    return(
      <View style={{...styles.container,backgroundColor:"white",paddingTop:"35%",borderWidth:1}}>
       
        <Text style={{...styles.textS,marginBottom:"15%"}}>CASES WORLDWIDE</Text>
        <View style={{borderWidth:2,width:420,flexDirection:"row",paddingTop:20,borderBottomWidth:0}}>
          <Text style={styles.textZ}>Cases</Text><Text style={styles.textZ}>Confirmed</Text><Text style={styles.textZ}>Deaths</Text><Text style={styles.textZ}>Recovered</Text>
        </View>
        <View style={{borderLeftWidth:2,borderRightWidth:2,width:420,flexDirection:"row",paddingTop:20}}>
          <Text style={styles.textZ}>New</Text><Text style={styles.textX}>{this.state.nCases} </Text><Text style={styles.textX}>{this.state.nDeaths} </Text><Text style={styles.textX}>{this.state.nRecovered} </Text>
        </View>
        <View style={{borderWidth:2,width:420,flexDirection:"row",paddingTop:20,borderTopWidth:0}}>
          <Text style={styles.textZ}>Total</Text><Text style={styles.textX}>{this.state.tCases} </Text><Text style={styles.textX}>{this.state.tDeaths} </Text><Text style={styles.textX}>{this.state.tRecovered} </Text>
        </View>
      
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
    },
    textX:{
      color:"#296D98",
      fontSize:16,
      width:100,
      height:60,
      textAlign:"center"
    },
    textZ:{
      fontWeight:"bold",
      fontSize:18,
      width:100,
      height:60,
      textAlign:"center"
    }
});

export default Screen3;