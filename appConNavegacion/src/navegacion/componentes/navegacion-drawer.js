import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

import Inicio from './../../inicio/contenedores/inicio-contenedor';
import Perfil from './../../perfil/contenedores/perfil-contenedor';
import Contacto from './../../contacto/contenedores/contacto-contenedor';

const menuDrawer = createDrawerNavigator({
    Inicio: {
        screen: Inicio,
        navigationOptions: {
            drawerLabel: 'Inicio',
        }, 
    },
    Perfil: {
        screen: Perfil,
        navigationOptions: {
            drawerLabel: 'Mi Cuenta',
        },
    },
    Contacto: {
        screen: Contacto,
        navigationOptions: {
            drawerLabel: 'Contáctenos',
        },
    },
});

export default createAppContainer(menuDrawer);