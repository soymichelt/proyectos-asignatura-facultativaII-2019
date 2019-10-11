import React from 'react';

import {
    View,
    Text,
    Image,
    StatusBar,
    StyleSheet,
    Dimensions,
} from 'react-native';

const Perfil = () => {

    return(
        <View>
            <StatusBar hidden={true} />
            <View style={{flex: 1,}}>
                <Image
                    style={estilos.imagenPortada}
                    source={require('./../assets/portada.jpg')}
                />
            </View>
            <View
                style={estilos.contenedorImagenPerfil}
            >
                <Image
                    style={estilos.imagenPerfil}
                    source={require('./../assets/perfil.jpg')}
                />
                <View>
                    <Text
                        style={estilos.nombre}
                    >
                        Traña Michael
                    </Text>
                </View>
                <View>
                    <Text
                        style={estilos.descripcion}
                    >
                        La confianza en ti mismo, es un paso para el éxito.
                    </Text>
                </View>
                <View
                    style={estilos.redes}
                >
                    <Image
                        source={require('./../assets/redes/facebook.png')}
                        style={estilos.imagenRedes}
                    />
                    <Image
                        source={require('./../assets/redes/twitter.png')}
                        style={estilos.imagenRedes}
                    />
                    <Image
                        source={require('./../assets/redes/github.png')}
                        style={estilos.imagenRedes}
                    />
                </View>
            </View>
        </View>
    );

};

/*
    Definimos una constante a la cual le asignaremos
    'StyleSheet.create({ AQUI VAN NUESTROS ESTILOS })'
*/
const estilos = StyleSheet.create({
    /* aquí empezamos a escribir nuestros estilos */
    contenedorImagenPerfil: {
        flex: 1,
        marginTop: -75,
        alignItems: 'center',
    },
    imagenPerfil: {
        width: 150,
        height: 150,
        borderRadius: 150,
        resizeMode: 'cover',
        borderWidth: 6,
        borderColor: '#fff',
    },
    imagenPortada: {
        width: Dimensions.get('window').width,
        height: 230,
        resizeMode: 'cover',
    },
    nombre: {
        fontSize: 32,
    },
    descripcion: {
        fontSize: 18,
        textAlign: 'center',
    },
    redes: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 106,
    },
    imagenRedes: {
        width: 32,
        height: 32,
    },
    /* fin de estilos */
});

export default Perfil;