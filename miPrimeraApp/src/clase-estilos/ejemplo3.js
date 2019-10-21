import React from 'react';

import {
    ImageBackground,
    Text,
    StyleSheet,
} from 'react-native';

const Ejemplo3 = (props) => {
    return (
        <ImageBackground
            style={estilos.imagenFondo}
            source={require('./../assets/portada.jpg')}
        >
            <Text
                style={estilos.texto}
            >
                Yo tengo una imagen de fondo
            </Text>
        </ImageBackground>
    );
};

const estilos = StyleSheet.create({
    imagenFondo: {
        width: '100%',
        height: '100%',
        flex: 1,
    },
    texto: {
        backgroundColor: 'white',
        fontSize: 24,
        width: '100%',
        height: 40,
        textAlign: 'center',
        marginTop: 50,
    },
});

export default Ejemplo3;