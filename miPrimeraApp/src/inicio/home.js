import React from 'react';

import {
    View,
    Text,
    Button,
} from 'react-native';

const Home = (props) => {
    const { nombre, eventoTocar } = props;
    return (
        <View>
            <Text>
                Hola, mi nombre es {nombre}
            </Text>
            <Button
                title={'Presioname!'}
                onPress={eventoTocar}
            />
        </View>
    );
};

export default Home;