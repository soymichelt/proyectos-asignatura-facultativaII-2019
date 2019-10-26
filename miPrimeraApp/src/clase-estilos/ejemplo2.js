import React from 'react';

import {
    View,
    Image,
    StyleSheet,
} from 'react-native';

const Ejemplo2 = (props) => {
    return (
        <View style={estilos.contenedor}>
            <Image
                style={estilos.imagen}
                source={require('./../assets/perfil.jpg')}
            />
            <Image
                style={estilos.imagen}
                source={{
                    uri: 'https://images.wallpapersden.com/image/wxl-small-memory_58461.jpg'
                }}
            />
        </View>
    );
};

/*
    Declaramos variable o constante y
    le asignamos StyleSheet.create({}).
*/
const estilos = StyleSheet.create({
    contenedor: { /* Agrupación */
        flex: 1,
    },
    imagen: {/* Agrupación */
        width: '100%',
        height: 200,
        resizeMode: 'cover',
    },
});

export default Ejemplo2;