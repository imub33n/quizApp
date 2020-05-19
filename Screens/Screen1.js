import * as React from 'react';
import {Button, Text, View, StyleSheet } from 'react-native';

const Teams=({navigation})=>{
    return(
    <View style={styles.container}>
      <Text>Select Classroom</Text>
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
      justifyContent: 'center',
    },
  });

  export default Teams;