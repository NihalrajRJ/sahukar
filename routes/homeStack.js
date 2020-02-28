import { createStackNavigator } from 'react-navigation-stack';
import Home from '../components/Home';
import DetailsForm from '../components/DetailsForm';
import Header from '../components/Header';
import React from 'react';

const screens = {
    Home: {
        screen: Home,
        //title: 'Click Money',
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title='Click Money'/>    
            }
        }
    },

    DetailsForm: {
        screen: DetailsForm,
        navigationOptions: {
            title: 'Details'
        }
    }
}

const HomeStack = createStackNavigator(screens, {
    // defaultNavigationOptions: {
    //     headerTintColor: '#444',
    //     headerStyle: {
    //         backgroundColor: '#eee', height: 60
    //     }
    //}
});
export default HomeStack;