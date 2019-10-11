import React from 'react';

import {
    View,
    Text,
    ImageBackground,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

const GaleriaImagen = (props) => {

    const { imagen, titulo } = props;

    return (
        <TouchableOpacity
            style={estilos.contenedor}
        >
            <ImageBackground
                source={imagen}
                style={estilos.imagen}
            >
                <View style={estilos.fondoTexto}>
                    <Text style={estilos.texto}>
                        {titulo}
                    </Text>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    );

};

/*
    Definimos una constante a la cual le asignaremos
    'StyleSheet.create({ AQUI VAN NUESTROS ESTILOS })'
*/
const estilos = StyleSheet.create({
    /* aquí empezamos a escribir nuestros estilos */
    contenedor: {
        flex: 1,
        height: 150,
        marginVertical: 4,
        marginHorizontal: 4,
    },
    imagen: {
        backgroundColor: '#ede7f6',
        resizeMode: 'cover',
        flex: 1,
        height: 150,
    },
    texto: {
        color: '#fff',
        textAlign: 'center',
    },
    fondoTexto: {
        height: 20,
        opacity: 0.6,
        backgroundColor: '#000',
    },
    /* fin de estilos */
});

export default GaleriaImagen;