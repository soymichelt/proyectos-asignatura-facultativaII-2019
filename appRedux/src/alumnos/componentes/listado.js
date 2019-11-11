import React from 'react';
import {
    View,
    ScrollView,
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
        <ScrollView>
            <View>
                <TouchableOpacity
                    onPress={eventoAgregar}
                >
                    <Text>Agregar</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                renderItem={({ item }) => <Item
                    item={item}
                />}
                data={data}
            />
        </ScrollView>
    )

}

const Item = (props) => {

    const { item } = props

    return (
        <TouchableOpacity>
            <View>
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