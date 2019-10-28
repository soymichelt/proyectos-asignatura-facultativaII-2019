import React from 'react';
import {
    SafeAreaView,
    Text,
    FlatList,
    Button,
    StyleSheet,
    TouchableOpacity,
    Platform,
} from 'react-native';

const Listado = (props) => {

    const {
        data,
        eventoPantallaGuardar,
        eventoPantallaEliminar
    } = props
    
    return (

        <SafeAreaView>
            <Text>Listado de Alumnos</Text>
            <Button
                title='Agregar'
                onPress={eventoPantallaGuardar}
            />
            <FlatList
                data={data}
                renderItem={
                    ({item}) => <Elemento item={item}
                        eventoPantallaEliminar={eventoPantallaEliminar}
                    />
                }
            />
        </SafeAreaView>

    )

}

const Elemento = (props) => {

    const {
        item,
        eventoPantallaEliminar,
    } = props

    return (
        <TouchableOpacity
            onLongPress= {() => eventoPantallaEliminar(item.key) }
        >
            <Text style={styles.elemento}>
                {item.nombreAlumno}
            </Text>
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    titulo: {
        color: 'green',
        fontSize: 18,
    },
    elemento: {
        flex: 1,
        padding: 8,
        fontWeight: 'bold',
        color: 'white',
        height: 50,
        ...Platform.select({
            ios: {
                backgroundColor: 'red',
            },
            android: {
                backgroundColor: 'blue'
            },
        }),
        margin: 8,
    },
})

export default Listado;