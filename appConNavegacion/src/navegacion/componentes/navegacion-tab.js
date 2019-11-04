import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { Image } from 'react-native';

import Inicio from './../../inicio/contenedores/inicio-contenedor';
import Perfil from './../../perfil/contenedores/perfil-contenedor';
import Contacto from './../../contacto/contenedores/contacto-contenedor';

const menuTabs = createBottomTabNavigator({
    Inicio: {
        screen: Inicio,
        navigationOptions: {
            tabBarLabel: 'Inicio',
            tabBarIcon: <Image
                source={require('./../../assets/inicio.png')}
                style={
                    {width: 26, height: 26,}
                }
            />,
        },
    },
    Perfil: {
        screen: Perfil,
        navigationOptions: {
            tabBarLabel: 'Mi Cuenta',
            tabBarIcon: <Image
                source={require('./../../assets/perfil.png')}
                style={
                    {width: 26, height: 26,}
                }
            />,
        },
    },
    Contacto: {
        screen: Contacto,
        navigationOptions: {
            tabBarLabel: 'Contáctenos',
            tabBarIcon: <Image
                source={require('./../../assets/contacto.png')}
                style={
                    {width: 26, height: 26,}
                }
            />,
        },
    },
}, {
    tabBarOptions: {
        activeTintColor: '#673ab7',
        inactiveTintColor: '#546e7a',
    },
});

export default createAppContainer(menuTabs);