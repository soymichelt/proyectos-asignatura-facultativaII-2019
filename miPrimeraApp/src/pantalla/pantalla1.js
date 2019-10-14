import React from 'react';

import {
    View,
    Text,
    Button,
} from 'react-native';

const Pantalla1 = (props) => {

    const { cambiarPantalla } = props;

    return (
        <View>
            <Text>Pantalla 1</Text>
            <Button
                title='Ir a pantalla 2'
                onPress={
                    () => {
                        cambiarPantalla('pantalla2');
                    }
                }
            />
        </View>
    );

};

export default Pantalla1;