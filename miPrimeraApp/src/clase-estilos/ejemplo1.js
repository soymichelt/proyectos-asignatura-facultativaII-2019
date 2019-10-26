import React from 'react';

import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

const Ejemplo1 = (props) => {
    return (
        <View style={estilos.contenedor}>
            <Text style={estilos.encabezado}>Encabezado</Text>
            <Text style={estilos.contenido}>Contenido</Text>
            <Text style={estilos.pieDePagina}>Pie de página</Text>
        </View>
    );
};

/*
    Declaramos variable o constante y
    le asignamos StyleSheet.create({}).
*/
const estilos = StyleSheet.create({
    contenedor: {/* Agrupación */
        flex: 1,
    },
    encabezado: {/* Agrupación */
        flex: 1,
        flexGrow: 2,
        backgroundColor: '#9c27b0',
    },
    contenido: {/* Agrupación */
        flex: 1,
        flexGrow: 8,
        backgroundColor: '#f3e5f5',
    },
    pieDePagina: {/* Agrupación */
        flex: 1,
        flexGrow: 3,
        backgroundColor: '#4a148c',
    },
});

/*
    Declaramos variable o constante y
    le asignamos StyleSheet.create({}).
*/
const estilos2 = StyleSheet.create({
    
});

export default Ejemplo1;