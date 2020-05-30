import React from 'react';
import { Text , View, StyleSheet, ScrollView } from 'react-native';
import { ListItem } from 'react-native-elements';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import _ from "lodash";

const Tab = createMaterialBottomTabNavigator();
// const content =()=> console.log("asia")
const content=()=><Scre4en continent="asia"/>
const content1=()=><Scre4en continent="africa"/>
const content2=()=><Scre4en continent="australia"/>
const content3=()=><Scre4en continent="europe"/>
const content4=()=><Scre4en continent="north america"/>
const content5=()=><Scre4en continent="south america"/>

class Scre4en extends React.Component {
  state = {
    data:[],
    continent:"asia"
  };
  componentDidMount(){
    this.getAPIData();
  }
  getAPIData = (props) => {
    //this.setState({continent:this.props.continent})

    var requestOptions = {
      method: 'GET',
      redirect: 'follow', 
    };
    return fetch('https://covid19-update-api.herokuapp.com/api/v1/world/continent/'+this.props.continent, requestOptions)
      .then(response => response.json())
      .then(responseJSON => {
        this.setState({
          data:responseJSON.countries
        });
        // console.log(this.state.continent) 
        // console.log("work",this.props.continent)
      });
  }; 
  render(){
    return(
      <View style={{  backgroundColor:"white"}}>
        <ScrollView style={{marginTop:0,marginBottom:0}} >
            {
              this.state.data.map((l) => (
                  <ListItem
                    title={l.name}
                    subtitle={"Cases: "+l.cases+" | Deaths: "+l.deaths}
                    bottomDivider
                  />
              ))
            }
        </ScrollView>
      </View>
    );
  }
}

function MyTabs() {
  return (
    <Tab.Navigator activeColor="black" inactiveColor="#999" barStyle={{ backgroundColor: '#f7f7f7' }} shifting={false}>
      <Tab.Screen name="Asia" component={content}  />
      <Tab.Screen name="Africa" component={content1} />
      <Tab.Screen name="Australia" component={content2}  />
      <Tab.Screen name="Europe" component={content3}  />
      <Tab.Screen name="North America" component={content4} />
      <Tab.Screen name="South America" component={content5} options={{ tabBarLabel: 'South America'}} />
    </Tab.Navigator>
  ); 
} 

const Screen4=({navigation})=>{
    return(
      <Scre4en></Scre4en>
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

export default MyTabs;