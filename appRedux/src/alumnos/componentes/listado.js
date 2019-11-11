import React from 'react';
import {
    View,
    SafeAreaView,
    Text,
    FlatList,
    TouchableOpacity,
} from 'react-native';

const Listado = (props) => {

    const {
        data,
        eventoAgregar,
    } = props

    return (
        <>
            <View>
                <TouchableOpacity
                    onPress={eventoAgregar}
                >
                    <Text>Agregar</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                style={{backgroundColor: '#eee' }}
                renderItem={({ item }) => <Item
                    item={item}
                />}
                data={data}
            />
        </>
    )

}

const Item = (props) => {

    const { item } = props

    return (
        <TouchableOpacity>
            <View style={{ flex: 1, backgroundColor: 'yellow', borderColor: 'blue', borderWidth: 2, margin: 4, }}>
                <View>
                    <View>
                        <Text>{item.nombre}</Text>
                    </View>
                    <View>
                        <Text>{item.telefono}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )

}

export default Listado