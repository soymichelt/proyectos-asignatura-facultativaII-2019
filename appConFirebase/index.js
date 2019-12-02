/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Listado from './src/containers/lista-container';
import Router from './src/components/router';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Router);
