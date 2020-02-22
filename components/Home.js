import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { Card } from 'react-native-shadow-cards';
import Login from './Login';
import {globalStyles} from '../styles/styles';

export default function Home({navigation}){
  
  const pressHandler =() =>{
    navigation.navigate('Login');
  }
  return (
    <>
      <SafeAreaView style={globalStyles.container}>
        <ScrollView style={styles.scrollView}>
          <View style={globalStyles.container}>
            <TouchableOpacity>
              <View style={styles.cardContainerView}>
                <Card style={styles.card1}>
                  <Text style={globalStyles.cardContainerTextHomePage}>Daily Expenses</Text>
                </Card>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={globalStyles.cardContainerView1}>
                <Card style={styles.card2}>
                  <Text style={globalStyles.cardContainerTextHomePage}>Monthly Expenses</Text>
                </Card>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={globalStyles.cardContainerView1}>
                <Card style={styles.card3}>
                  <Text style={globalStyles.cardContainerTextHomePage}> Medical Expenses</Text>
                </Card>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={globalStyles.cardContainerView1}>
                <Card style={styles.card4}>
                  <Text style={globalStyles.cardContainerTextHomePage}> Cash For Education</Text>
                </Card>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={globalStyles.cardContainerView1}>
                <Card style={styles.card5}>
                  <Text style={globalStyles.cardContainerTextHomePage}> Gifts for Parents/Loved Ones</Text>
                </Card>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={globalStyles.cardContainerView1}>
                <Card style={styles.card6}>
                  <Text style={globalStyles.cardContainerTextHomePage}> Party Expenses</Text>
                </Card>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={globalStyles.buttonContainer}>
                <Button style={styles.buttonStyleContainer} title="Go to Login Page" onPress={pressHandler} />
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card1: {
    backgroundColor: "rgb(157,191,104)",
    alignItems: 'center',
    justifyContent: 'center',
    height: 70
  },
  card2: {
    backgroundColor: 'rgb(117,193,189)',
    alignItems: 'center',
    justifyContent: 'center',
    height: 70
  },
  card3: {
    backgroundColor: 'rgb(214,145,140)',
    alignItems: 'center',
    justifyContent: 'center',
    height: 70,
  },
  card4: {
    backgroundColor: '#F6C650',
    alignItems: 'center',
    justifyContent: 'center',
    height: 70,
  },
  card5: {
    backgroundColor: 'rgb(230,178,120)',
    alignItems: 'center',
    justifyContent: 'center',
    height: 70,
  },
  card6: {
    backgroundColor: '#F68250',
    alignItems: 'center',
    justifyContent: 'center',
    height: 70,
  },
  cardContainerView: {
    paddingTop: 40
  },
  buttonStyleContainer: {
    color:'blue',
    backgroundColor:"blue",
    borderRadius:5,
    padding:10,
    fontFamily:"Verdana"
  }
});
