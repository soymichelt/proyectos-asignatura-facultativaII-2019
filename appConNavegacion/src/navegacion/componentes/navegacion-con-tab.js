import React from 'react';
import {
    createAppContainer,
} from 'react-navigation';
import {
    createBottomTabNavigator,
} from 'react-navigation-tabs';

import Inicio from './../../inicio/contenedores/inicio-contenedor';
import Contactenos from './../../contactenos/contenedores/contactenos-contenedor';
import Login from './../../login/contenedores/login-contenedor';

const NavegacionConTab = createBottomTabNavigator({
    Menu1: {
        screen: Inicio,
        navigationOptions: {
            tabBarLabel: 'Inicio',
        },
    },
    Menu2: {
        screen: Contactenos,
        navigationOptions: {
            tabBarLabel: 'Contáctenos',
        },
    },
    Menu3: {
        screen: Login,
        navigationOptions: {
            tabBarLabel: 'Iniciar Sesión',
        },
    },
})

export default createAppContainer(NavegacionConTab)