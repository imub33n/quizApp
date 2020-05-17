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
  const [getcount, setcount]=useState(1);
  const [current,setCurrent]= useState("Home");

  const next= ()=>{
    setv(getv+1);
    setList({question:stmtOptAns[getv].question,
      option:stmtOptAns[getv].options,
      answer:stmtOptAns[getv].correct,
      key:stmtOptAns[getv].key})
    setcount(getcount+1);
    console.log(getv) 
  };

  const [getIdk,setIdk]=useState({score:0,an:0,idk1:"",idk2:"",idk3:"",idk4:""})
  const updatean =(hm)=>{
    setIdk({an:hm});
  }

  //const ansChk = (pas) => {
    if(getIdk.an==getList.answer){
      console.log("gud") 
      setIdk({score:getIdk.score+1})

      if(getIdk.an==1){
        setIdk({an:0,idk1:"✓"})
      }else if(getIdk.an==2){
        setIdk({an:0,idk2:"✓"})
      }else if(getIdk.an==3){
        setIdk({an:0,idk3:"✓"})
      }else if(getIdk.an==4){ 
        setIdk({an:0,idk4:"✓"})
      }
    }else if(getIdk.an!=getList.answer && getIdk.an==1 ||getIdk.an==2||getIdk.an==3||getIdk.an==4){
      console.log("bad") 
      if(getIdk.an==1){
        setIdk({an:0,idk1:"X"})
      }else if(getIdk.an==2){
        setIdk({an:0,idk2:"X"})
      }else if(getIdk.an==3){
        setIdk({an:0,idk3:"X"})
      }else if(getIdk.an==4){
        setIdk({an:0,idk4:"X"})
      }
    }
  //}
  
  const HomeScreen= (
    <View style={styles.container}>
      <ImageBackground source={image2} style={styles.imageHome}>
        <Text style={styles.textQuestion}>Hello Frandz,Quiz daay doo!</Text>
        <Text style={styles.customButton} onPress={()=>setCurrent(QuizScreen)}>Start Quiz</Text>
      </ImageBackground>
    </View> 
  )

  const QuizScreen=(
    
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <View style={styles.quesCount}>
          <Text style={{fontSize:18}}>Score:{getIdk.score}</Text>
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
          <TouchableOpacity style={styles.optio} onPress={updatean.bind(this,1)}>
            <Text style={{...styles.customButton,width:350}}>{getList.option[0]}</Text>
            <Text style={{fontSize:25,padding:5}}>{getIdk.idk1}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optio} onPress={updatean.bind(this,2)}>
            <Text style={{...styles.customButton,width:350}}>{getList.option[1]}</Text>
            <Text style={{fontSize:25,padding:5}}>{getIdk.idk2}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optio} onPress={updatean.bind(this,3)}>
            <Text style={{...styles.customButton,width:350}}>{getList.option[2]}</Text>
            <Text style={{fontSize:25,padding:5}}>{getIdk.idk3}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optio} onPress={updatean.bind(this,4)}>
            <Text style={{...styles.customButton,width:350}}>{getList.option[3]}</Text>
            <Text style={{fontSize:25,padding:5}}>{getIdk.idk4}</Text>
          </TouchableOpacity>
          </View>
        </View>  
        <View style={styles.nextButton}>
          <Text></Text>
          <TouchableOpacity onPress={next}>
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
