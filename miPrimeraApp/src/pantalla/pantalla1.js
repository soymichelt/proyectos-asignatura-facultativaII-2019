import React from 'react';

import {
    View,
    Text,
    Button,
    TextInput
} from 'react-native';

const Pantalla1 = (props) => {

    const { navegar, cambiarText, nombre } = props;

    return (
        <View>
            <Text>Pantalla 1</Text>
            <TextInput
                onChangeText={cambiarText}
                defaultValue={nombre}
            />
            <Button
                title='Ir a pantalla 2'
                onPress={
                    () => {
                        navegar('pantalla2');
                    }
                }
            />
        </View>
    );

};

export default Pantalla1;