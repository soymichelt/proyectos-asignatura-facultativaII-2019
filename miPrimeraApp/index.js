/**
 * @format
 */

import {AppRegistry} from 'react-native';
import HomeContainer from './src/inicio/home-container';
import MiCuentaContainer from './src/mi-cuenta/mi-cuenta-container';
import PantallaContenedor from './src/pantalla/pantalla-contenedor';
import Ejemplo1 from './src/clase-estilos/ejemplo1';
import Ejemplo2 from './src/clase-estilos/ejemplo2';
import Ejemplo3 from './src/clase-estilos/ejemplo3';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Ejemplo3);