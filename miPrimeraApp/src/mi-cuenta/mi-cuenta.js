import React from 'react';

import {
    View,
    StyleSheet,
    SafeAreaView,
    ScrollView,
} from 'react-native';

import Perfil from './perfil';
import Galeria from './galeria';
import Separador from './../utilidades/separador';

const MiCuenta = (props) => {

    const { publicaciones, datosDelUsuario } = props;

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={estilos.contenedor}>
                    <Perfil
                        datosDelPerfil={datosDelUsuario}
                    />
                    <Separador />
                    <Galeria
                        publicaciones={publicaciones}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
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
    },
    separador: {
        height: 8,
    },
    /* fin de estilos */
});

export default MiCuenta;