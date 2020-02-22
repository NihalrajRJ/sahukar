import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { Card } from 'react-native-shadow-cards';

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.container}>
            <TouchableOpacity>
              <View style={styles.cardContainerView}>
                <Card style={styles.card1}>
                  <Text style={styles.cardContainerText1}>Daily Expenses</Text>
                </Card>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.cardContainerView1}>
                <Card style={styles.card2}>
                  <Text style={styles.cardContainer1Text}>Monthly Expenses</Text>
                </Card>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.cardContainerView2}>
                <Card style={styles.card3}>
                  <Text style={styles.cardContainer2Text}> Medical Expenses</Text>
                </Card>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.cardContainerView3}>
                <Card style={styles.card4}>
                  <Text style={styles.cardContainer3Text}> Cash For Education</Text>
                </Card>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.cardContainerView4}>
                <Card style={styles.card5}>
                  <Text style={styles.cardContainer4Text}> Gifts for Parents/Loved Ones</Text>
                </Card>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.cardContainerView5}>
                <Card style={styles.card6}>
                  <Text style={styles.cardContainer5Text}> Party Expenses</Text>
                </Card>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.buttonContainer}>
                <Button style={styles.buttonStyleContainer} title='Submit' />
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
  buttonContainer: {
    alignItems: 'flex-end',
    paddingTop: 50,
  },
  card1: {
    backgroundColor: '#5AF77D',
    alignItems: 'center',
    justifyContent: 'center',
    height: 70
  },
  card2: {
    backgroundColor: '#FC1E35',
    alignItems: 'center',
    justifyContent: 'center',
    height: 70
  },
  card3: {
    backgroundColor: '#0CECF9',
    alignItems: 'center',
    justifyContent: 'center',
    height: 70,
  },
  card4: {
    backgroundColor: '#0CECF9',
    alignItems: 'center',
    justifyContent: 'center',
    height: 70,
  },
  card5: {
    backgroundColor: '#0CECF9',
    alignItems: 'center',
    justifyContent: 'center',
    height: 70,
  },
  card6: {
    backgroundColor: '#0CECF9',
    alignItems: 'center',
    justifyContent: 'center',
    height: 70,
  },
  cardContainerText1: {
    color: 'white',
    fontWeight: '900',
    fontSize: 18,
  },
  cardContainerView1: {
    paddingTop: 10
  },
  cardContainerView2: {
    paddingTop: 10
  },
  cardContainerView3: {
    paddingTop: 10
  },
  cardContainerView4: {
    paddingTop: 10
  },
  cardContainerView5: {
    paddingTop: 10
  },
  cardContainerView: {
    paddingTop: 40
  },
});
