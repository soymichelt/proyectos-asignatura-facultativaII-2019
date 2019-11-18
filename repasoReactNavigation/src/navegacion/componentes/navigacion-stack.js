import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Login from './../../login/componentes/login';
import Inicio from './../../inicio/componentes/inicio';
import Drawer from './navigacion-lateral';

const navegacionStack = createStackNavigator({
    Login: {
        screen: Login,
    },
    Principal: {
        screen: Drawer,
    }
});

export default createAppContainer(navegacionStack);