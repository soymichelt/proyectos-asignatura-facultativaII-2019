import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import React from 'react';
import { Provider } from 'react-redux';
import { store } from './../../../lib/state/store';

import Listado from '../../alumnos/contenedores/listado-contenedor';
import Agregar from '../../alumnos-agregar/contenedores/agregar-contenedor';

const NavegacionStack = createStackNavigator({
    Listado: {
        screen: Listado,
    },
    Agregar: {
        screen: Agregar,
    },
});

const AppContainer = createAppContainer(NavegacionStack);

const NavegacionConRedux = () => {
    return (
        <Provider store={store}>
            <AppContainer />
        </Provider>
    );
}

export default NavegacionConRedux;