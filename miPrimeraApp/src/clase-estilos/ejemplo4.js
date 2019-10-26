import React from 'react';

import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    Image,
    ImageBackground,
} from 'react-native';

const Ejemplo4 = (props) => {

    const { width, height } = Dimensions.get('window');

    return (
        <View
            style={
                {
                    flexDirection: 'row',
                }
            }
        >
            <Image
                style={
                    estilos.imagen
                }
                source={
                    //require('../assets/perfil.jpg')
                    { uri: 'https://images2.alphacoders.com/606/thumb-350-606224.png', }
                }
            />
            <ImageBackground
                source={
                    require('../assets/perfil.jpg')
                }
            >
                <Text>
                    Estoy dentro de un ImageBackground
                </Text>
            </ImageBackground>
            <Text
                style={
                    {
                        ...estilos.seccion1,
                        ...estilos.fuente,
                    }
                }
            >
                Sección 1
            </Text>
            <Text
                style={
                    {
                        ...estilos.seccion2,
                        ...estilos.fuente,
                    }
                }
            >
                Sección 2
            </Text>
        </View>
    );

};

const estilos = StyleSheet.create({

    seccion1: {
        flex: 1,
        width: 200,
        color: 'red',
        backgroundColor: 'purple',
        
    },

    seccion2: {
        flex: 3,
        width: 300,
        
    },

    fuente: {
        fontWeight: 'bold',
        fontSize: 32,
    },

    imagen: {
        width: 100,
        height: 100,
    },

});

export default Ejemplo4;