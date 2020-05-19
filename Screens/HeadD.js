import * as React from 'react';
import {Image, Text, View, StyleSheet } from 'react-native';


const HeadD=({navigation})=>{
    return(
      <View style={styles.container}>
        <Image  
            style={{width:200,height:60,marginVertical:60}}
            source={require("C:/Users/mubee/quizApp/assets/teams.png")}
        />
      </View>
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      flexDirection:"row",
      justifyContent: "center",
      },
    });
export default HeadD;