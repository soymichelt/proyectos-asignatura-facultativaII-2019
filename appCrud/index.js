/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Estudiante from './src/estudiante/contenedores/estudiante-contenedor';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Estudiante);
