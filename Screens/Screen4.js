import React, { useState } from 'react';
import {Image, Text, View, StyleSheet, ScrollView ,TouchableOpacity} from 'react-native';
import { Button,ListItem } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import _ from "lodash";

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

export default Screen4;