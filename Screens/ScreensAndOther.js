import * as React from 'react';
import {Button,Image, Text, View, StyleSheet } from 'react-native';


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
const Sett=({navigation})=>{
  return(
    <View style={styles.container}>
     <Text>Settings</Text>
     
    </View>
  );
}
const Assign=({navigation})=>{
  return(
    <View style={styles.container}>
     <Text>Assignments Here</Text>
     
    </View>
  );
}
const Calendar=({navigation})=>{
  return(
    <View style={styles.container}>
     <Text>Calendar Here</Text>
     
    </View>
  );
}
const More=({navigation})=>{
  return(
    <View style={styles.container}>
     <Text>More Options</Text>
     
    </View>
  );
}
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
      justifyContent: 'center',
      },
    });
// export default Home;
// export default Sett;
// export default Chat;
// export default Teams;
// export default HeadD;
module.exports = {
  Home: Home,
  Sett: Sett,
  Chat: Chat,
  Teams: Teams,
  HeadD: HeadD,
  Assign: Assign,
  Calendar: Calendar,
  More: More
}