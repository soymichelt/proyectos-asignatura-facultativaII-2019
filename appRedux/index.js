/**
 * @format
 */
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

import Navegacion from './src/navegacion/componentes/navegacion-stack';

AppRegistry.registerComponent(appName, () => Navegacion);
