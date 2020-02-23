import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';
import LoginStack from './loginStack';

const rootDrawerNav = createDrawerNavigator({
    Home: {
         screen: LoginStack
    }
});

export default createAppContainer(rootDrawerNav);