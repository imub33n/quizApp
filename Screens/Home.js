import * as React from 'react';
import {Button, Text, View, StyleSheet } from 'react-native';


const Home=({navigation})=>{
    return(
      <View style={styles.container}>
       <Text>Activity</Text>
       {/* <Button title="start"
       onPress={()=>navigation.navigate('Screen1')}>
       </Button> */}
      </View>
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      },
    });
export default Home;