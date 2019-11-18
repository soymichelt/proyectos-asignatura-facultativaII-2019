import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

import navegacionStackInicio from './navigacion-stack-inicio';

const navegacionDrawer = createDrawerNavigator({
    Inicio: {
        screen: navegacionStackInicio,
    }
});

export default createAppContainer(navegacionDrawer);