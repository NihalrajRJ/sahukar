import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../components/Home';
import About from '../components/About';
import Login from '../components/Login';

const screens = {   
    Home: {
        screen: Home
    },
    Login: {
        screen: Login
    },
    About: {
        screen: About
    }
}

const loginStack = createStackNavigator(screens);

export default createAppContainer(loginStack);
