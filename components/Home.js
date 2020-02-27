import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView, SafeAreaView, FlatList, ImageBackground } from 'react-native';
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
    { name: 'Gifts for Loved Ones', id: '5' },
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
      <ImageBackground source={require('../assets/home_bg_1.png')} style={globalStyles.backgroundImage} >
        <FlatList
          numColumns={2}
          keyExtractor={(item) => item.id}
          data={homePageItems}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handlePress(item.id)}>
              <View style={styles.cardContainerView}>                     
                <Card style={styles.card1}>
                <ImageBackground source={require('../assets/card_bg_1.jpg')} style={styles.cardBackground}>      
                <TouchableOpacity
                  onPress={navigateToDetailsForm} 
                  >
                    <Text style={globalStyles.cardContainerTextHomePage} >{item.name}</Text>
                  </TouchableOpacity>
                  </ImageBackground> 
                </Card>               
              </View>
            </TouchableOpacity>
          )}
        />
        </ImageBackground>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  card1: {
    height: 100,
    width: 125,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContainerView: {
    paddingTop: 40
  },
  cardBackground:{
    flex: 1,
    width: 125,
    height: 100,
    marginHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
    opacity: 1
  }
});
