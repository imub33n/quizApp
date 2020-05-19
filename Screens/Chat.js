import * as React from 'react';
import {Button, Text, View, StyleSheet } from 'react-native';


const Chat=({navigation})=>{
    return(
      <View style={styles.container}>
       <Text>Chat</Text>
       {/* <Button title="start"
       onPress={()=>navigation.navigate('Chat')}>
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
export default Chat;