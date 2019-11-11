import React from 'react';

import { View, Button, } from 'react-native';

import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Pantalla1 from './../../pantalla1/contenedores/pantalla1-contenedor';
import Pantalla2 from './../../pantalla2/contenedores/pantalla2-contenedor';

const Menu = (props) => {
    const { navigation } = props;
    return (
        <View>
            <Button
                title='Pantalla 1'
                onPress={
                    () => {
                        navigation.navigate('Pantalla1');
                    }
                }
            />
            <Button
                title='Pantalla 2'
                onPress={
                    () => {
                        navigation.navigate('Pantalla2');
                    }
                }
            />
        </View>
    );
}

const navegacionStack = createStackNavigator({
    PantallaMenu: Menu,
    Pantalla1: Pantalla1,
    Pantalla2: Pantalla2,
});

export default createAppContainer(navegacionStack);