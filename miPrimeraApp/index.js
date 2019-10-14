/**
 * @format
 */

import {AppRegistry} from 'react-native';
import HomeContainer from './src/inicio/home-container';
import MiCuentaContainer from './src/mi-cuenta/mi-cuenta-container';
import PantallaContenedor from './src/pantalla/pantalla-contenedor';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => PantallaContenedor);