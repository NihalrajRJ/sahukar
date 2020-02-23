import { createStackNavigator } from 'react-navigation-stack';
import Home from '../components/Home';
import DetailsForm from '../components/DetailsForm';
import Login from '../components/Login';

const screens = {   
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'Sahukar'
        }
    },
    Login: {
        screen: Login,
        navigationOptions: {
            title: 'Login'
        }
    },
    DetailsForm: {
        screen: DetailsForm,
        navigationOptions: {
            title: 'Details'
        }
    }
}

const LoginStack = createStackNavigator(screens,{
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: {
            backgroundColor: '#eee' , height:60
        }
    }
});

export default LoginStack;
