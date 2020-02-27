import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import LoginStack from './loginStack';
import HomeStack from './homeStack';

const RootDrawerNav = createDrawerNavigator({
    Home: {
         screen: HomeStack
    },
    Login: {
        screen: LoginStack
    }
});

export default createAppContainer(RootDrawerNav); 