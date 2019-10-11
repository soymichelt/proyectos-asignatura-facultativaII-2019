import React from 'react';

import {
    View,
    Text,
    FlatList,
    StyleSheet,
} from 'react-native';

import GaleriaImagen from './galeria-imagen';

import BotonesDePublicacion from './botones-de-publicacion';

const Galeria = (props) => {

    const { publicaciones } = props;

    return(
        <FlatList
            ListHeaderComponent={
                <BotonesDePublicacion />
            }
            data={publicaciones}
            renderItem={
                ({ item, index }) => {
                    return (
                        <GaleriaImagen
                            titulo={item.titulo}
                            imagen={item.imagen}
                        />
                    );
                }
            }
            keyExtractor={item => item.titulo}
            numColumns={3}
        />
    );
    
};

const estilos = StyleSheet.create({
});

export default Galeria;