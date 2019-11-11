/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import { Provider } from 'react-redux';
import { store } from './lib/state/store';

import Listado from './src/alumnos/contenedores/listado-contenedores';

AppRegistry.registerComponent(appName, () => <Provider store={store}><Listado /></Provider>);
