/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import NavegacionTab from './src/navegacion/componentes/navegacion-tab';
import NavegacionDrawer from './src/navegacion/componentes/navegacion-drawer';
import NavegacionStack from './src/navegacion/componentes/navegacion-stack';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => NavegacionStack);
