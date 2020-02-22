import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, View, ImageBackground, RecyclerViewBackedScrollViewBase } from 'react-native';
import { Card } from 'react-native-shadow-cards';
import { apisAreAvailable } from 'expo';
import { disableExpoCliLogging } from 'expo/build/logs/Logs';

export default function App() {
  const [name, setName] = useState('Nihal');
  // useEffect(){
  //   setName('Mitul')
  // ,[]}
  return (
    <View style={styles.container}>
      
      <View>
        <Card style={styles.cardContainer }>
          <Text style={styles.cardContainerText }>Daily Expenses</Text>
        </Card>
      </View>
      <View style={styles.cardContainerview }>
        <Card style={styles.cardContainer1 }>
          <Text style={styles.cardContainer1Text }>Monthly Expenses</Text>
        </Card>
      </View>
      <View style={styles.cardContainerview}>
        <Card style={styles.cardContainer2 }>
          <Text style={styles.cardContainer2Text }> Medical Expenses</Text>
        </Card>
      </View>
      <View style={styles.cardContainerview}>
        <Card style={styles.cardContainer3 }>
          <Text style={styles.cardContainer3Text }> Cash For Education</Text>
        </Card>
      </View>
      <View style={styles.cardContainerview}>
        <Card style={styles.cardContainer4 }>
          <Text style={styles.cardContainer4Text }> Gifts for Parents/Loved Ones</Text>
        </Card>
      </View>
      <View style={styles.cardContainerview}>
        <Card style={styles.cardContainer5 }>
          <Text style={styles.cardContainer5Text }> Party Expenses</Text>
        </Card>
      </View>
      <View style={styles.buttonContainer}>
        <Button style={styles.buttonStyleContainer} title='Submit' />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonContainer: {
    alignItems: 'flex-end',
    paddingTop:50,
  },
  cardContainer:{
    backgroundColor: '#5AF77D',
    alignItems: 'center',
    justifyContent: 'center',
    height:70
  },
  cardContainer1:{
    backgroundColor: '#FC1E35',
    alignItems: 'center',
    justifyContent: 'center',
    height:70
  },
  cardContainer2:{
    backgroundColor: '#0CECF9',
    alignItems: 'center',
    justifyContent: 'center',
    height:70,
  },
  cardContainer3:{
    backgroundColor: '#0CECF9',
    alignItems: 'center',
    justifyContent: 'center',
    height:70,
  },
  cardContainer4:{
    backgroundColor: '#0CECF9',
    alignItems: 'center',
    justifyContent: 'center',
    height:70,
  },
  cardContainerview:{
    paddingTop:20
  },
  cardContainerText:{
    color:'white',
    fontWeight:'900',
    fontSize:18,    
},
cardContainer1Text:{
  color:'white',
  fontWeight:'900',
  fontSize:18,  
},
cardContainer2Text:{
  color:'white',
  fontWeight:'900',
  fontSize:18,  
},
cardContainer3Text:{
  color:'white',
  fontWeight:'900',
  fontSize:18,  
},
cardContainer4Text:{
  color:'white',
  fontWeight:'900',
  fontSize:18,  
},

buttonStyleContainer:{
  backgroundColor:'blue'
}
});
