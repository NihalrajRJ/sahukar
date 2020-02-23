import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView, SafeAreaView, FlatList } from 'react-native';
import { Card } from 'react-native-shadow-cards';
import Login from './Login';
import { globalStyles } from '../styles/styles';
import DetailsForm from './DetailsForm';

export default function Home({ navigation }) {

  const [homePageItems, setHomePageItems] = useState([
    { name: 'Daily Expenses', id: '1' },
    { name: 'Monthly Expenses', id: '2' },
    { name: 'Medical Expenses', id: '3' },
    { name: 'Cash For Education', id: '4' },
    { name: 'Gifts for Parents/Loved Ones', id: '5' },
    { name: 'Party Expenses', id: '6' }

  ]);

  const handlePress = (id) => {
    console.log(id);
  };
  const pressHandler = () => {
    navigation.navigate('Login');
  }
  const navigateToDetailsForm = () => {
    navigation.navigate('DetailsForm');
  }
  return (
    <>
      <View style={globalStyles.container}>
        <FlatList
          numColumns={2}
          keyExtractor={(item) => item.id}
          data={homePageItems}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handlePress(item.id)}>
              <View style={styles.cardContainerView}>
                <Card style={styles.card1}>
                  <Button style={globalStyles.cardContainerTextHomePage} onPress={navigateToDetailsForm} title={item.name} />
                </Card>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
      <View style={globalStyles.buttonContainer}>
        <Button style={styles.buttonStyleContainer} title="Go to Login Page" onPress={pressHandler} />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  card1: {
    backgroundColor: "rgb(157,191,104)",
    height: 100,
    width: 125,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  // card2: {
  //   backgroundColor: 'rgb(117,193,189)',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   height: 70
  // },
  // card3: {
  //   backgroundColor: 'rgb(214,145,140)',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   height: 70,
  // },
  // card4: {
  //   backgroundColor: '#F6C650',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   height: 70,
  // },
  // card5: {
  //   backgroundColor: 'rgb(230,178,120)',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   height: 70,
  // },
  // card6: {
  //   backgroundColor: '#F68250',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   height: 70,
  // },
  cardContainerView: {
    paddingTop: 40
  },
  buttonStyleContainer: {
    color: 'blue',
    backgroundColor: "blue",
    borderRadius: 5,
    padding: 10,
    fontFamily: "Verdana"
  }
});
