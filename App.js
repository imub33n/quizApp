import React, { useState } from 'react';
import {FlatList, ImageBackground, StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native';
import {stmtOptAns} from "./quizModelObjects";

const image = require("C:/Users/mubee/quizApp/assets/bg.jpg");
const image2 = require("C:/Users/mubee/quizApp/assets/bg2.jpg");
const tickURI = require("C:/Users/mubee/quizApp/assets/tick.png");
const croseURI = require("C:/Users/mubee/quizApp/assets/close.png");
const iconURI = require("C:/Users/mubee/quizApp/assets/icon.png");

export default function App(){

  const [getv,setv]=useState(0);
  const [getList,setList]= useState({
    question:stmtOptAns[getv].question,
    option:stmtOptAns[getv].options,
    answer:stmtOptAns[getv].correct,
    key:stmtOptAns[getv].key
  });
  const [current,setCurrent]= useState("Home");
  var siz1Tick,siz2Tick,siz3Tick,siz4Tick=0;
  var siz1Cross,siz2Cross,siz3Cross,siz4Cross=0;
  
  const ansChk = (pas) => {
    if(pas==getList.answer){
      console.log("gud") 
      if(pas==1){
        var siz1Tick=35
      }else if(pas==2){
        var siz2Tick=35
      }else if(pas==3){
        var siz3Tick=35
        console.log("bad") 
      }else if(pas==4){
        console.log("gud") 
        var siz4Tick=35
      }
    }else {
      console.log("bad") 
      if(pas==1){
        var siz1Cross=35
      }else if(pas==2){
        var siz2Cross=35
      }else if(pas==3){
        var siz3Cross=35
      }else if(pas==4){
        var siz4Cross=35
      }
    }
  }
  
  const HomeScreen= (
    <View style={styles.container}>
      <ImageBackground source={image2} style={styles.imageHome}>
        <Text style={styles.textQuestion}>Hello Frands,Quiz daay doo!</Text>
        <Text style={styles.customButton} onPress={()=>setCurrent(QuizScreen)}>Start Quiz</Text>
      </ImageBackground>
    </View> 
  )

  const QuizScreen=(
    
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <View style={styles.quesCount}>
          <Text style={{fontSize:18}}>Score:</Text>
          <Text style={{fontSize:18}}>Question:{getList.key}/5
          </Text>
        </View>
        <View > 
          <Text style={{...styles.textQuestion,
            textAlign:"center",
            paddingHorizontal:30,
            marginBottom:50
          }}
            >{getList.question}
          </Text>
          <View style={{alignItems:"center"}}>
          <TouchableOpacity style={styles.optio} onPress={() => {ansChk(1)}}>
            <Text style={{...styles.customButton,width:350}}>{getList.option[0]}</Text>
            <Image style={{...styles.icon,width:siz1Tick,height:siz1Tick}} source={tickURI}/>
            <Image style={{...styles.icon,width:siz1Cross,height:siz1Cross}} source={croseURI}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optio} onPress={() => {ansChk(2)}}>
            <Text style={{...styles.customButton,width:350}}>{getList.option[1]}</Text>
            <Image style={{...styles.icon,width:siz2Tick,height:siz2Tick}} source={tickURI}/>
            <Image style={{...styles.icon,width:siz2Cross,height:siz2Cross}} source={croseURI}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optio} onPress={() => {ansChk(3)}}>
            <Text style={{...styles.customButton,width:350}}>{getList.option[2]}</Text>
            <Image style={{...styles.icon,width:siz3Tick,height:siz3Tick}} source={tickURI}/>
            <Image style={{...styles.icon,width:siz3Cross,height:siz3Cross}} source={croseURI}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optio} onPress={() => {ansChk(4)}}>
            <Text style={{...styles.customButton,width:350}}>{getList.option[3]}</Text>
            <Image style={{...styles.icon,width:siz4Tick,height:siz4Tick}} source={tickURI}/>
            <Image style={{...styles.icon,width:siz4Cross,height:siz4Cross}} source={croseURI}/>
          </TouchableOpacity>
          </View>
        </View>  
        <View style={styles.nextButton}>
          <Text></Text>
          <TouchableOpacity>
            <Image
              style={{width:40,height:40}}
              source={require("C:/Users/mubee/quizApp/assets/next.png")}
            />
          </TouchableOpacity>
      </View>
      </ImageBackground>
    </View>
  )
  return current === 'Home'? HomeScreen :current ;
}

const styles = StyleSheet.create({
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  icon:{
    width:0, height:0 ,margin:3
  },
  optio:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between"
  },
  quesCount:{
    flexDirection:"row",
    justifyContent:"space-between",
    width:'90%',
    margin:20,
    marginTop:70,
    padding:20
  },
  container: {
    flex: 1,
    flexDirection: "column"
  },
  nextButton:{
    width:  "80%",
    marginBottom:100,
    marginRight:"10%",
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"baseline",
    
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    alignItems:"center",
    justifyContent:"space-between"
  },
  imageHome: {
    flex: 1,
    resizeMode: "cover",
    alignItems:"center",
    padding:40,
    justifyContent:"center"
  },
  textQuestion: {
    color: "black",
    fontSize: 23,
    fontWeight: "bold",
    marginTop:"25%",
  },
  customButton:{
    backgroundColor:"black",
    color:"white",
    padding:10,
    paddingHorizontal:15,
    fontSize:25,
    borderRadius:7,
    marginTop:7,
  }
});
