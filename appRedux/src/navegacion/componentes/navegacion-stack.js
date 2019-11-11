import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

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

export default createAppContainer(NavegacionStack);