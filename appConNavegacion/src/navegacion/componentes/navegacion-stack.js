import React from 'react';
import {
    View,
    Button,
    Text,
} from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Inicio from '../../inicio/contenedores/inicio-contenedor';
import Perfil from '../../perfil/contenedores/perfil-contenedor';
import Contacto from '../../contacto/contenedores/contacto-contenedor';

const Menu = (props) => {

    const { navigation } = props;

    return (
        <View style={{margin: 10,}}>
            <Button
                title='Inicio'
                onPress={
                    () => {
                        navigation.navigate('Inicio');
                    }
                }
            />
            <Button
                title='Mi Cuenta'
                onPress={
                    () => {
                        navigation.navigate('Perfil');
                    }
                }
            />
            <Button
                title='Contáctenos'
                onPress={
                    () => {
                        navigation.navigate('Contacto');
                    }
                }
            />
        </View>
    );

}

const NavegacionStack = createStackNavigator({
    Menu: {
        screen: Menu,
        navigationOptions: {
            headerTitle: <Text style={{fontSize: 18, fontWeight: 'bold', color: 'purple'}}>Stack Navigator</Text>
        },
    },
    Inicio: {
        screen: Inicio,
    },
    Perfil: {
        screen: Perfil,
    },
    Contacto: {
        screen: Contacto,
    },
});

export default createAppContainer(NavegacionStack);