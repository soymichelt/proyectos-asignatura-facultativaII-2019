import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Inicio from './../../inicio/componentes/inicio';
import Detalle from './../../detalle/componentes/detalle';

const navegacionStackInicio = createStackNavigator({
    Inicio: {
        screen: Inicio,
    },
    Detalle: {
        screen: Detalle,
    }
});

export default createAppContainer(navegacionStackInicio);