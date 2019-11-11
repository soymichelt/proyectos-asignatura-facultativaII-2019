import React from 'react'
import {
    View,
    TextInput,
    Button,
} from 'react-native'

const Crear = (props) => {

    const {
        estado,
        nombre,
        telefono,
        eventoAgregarAlumno,
        eventoNombre,
        eventoTelefono,
    } = props

    return(
        <View>

            <View>
                <TextInput
                    placeholder={'Nombres y apellidos...'}
                    onChangeText={eventoNombre}
                    value={nombre}
                />
            </View>

            <View>
                <TextInput
                    placeholder={'Teléfono...'}
                    onChangeText={eventoTelefono}
                    value={telefono}
                    keyboardType={'phone-pad'}
                />
            </View>

            <View>
                <Button
                    title={'Guardar'}
                    color={'#263238'}
                    disabled={estado === 'guardando' ? true : false}
                    onPress={eventoAgregarAlumno}
                />
            </View>

        </View>
    )

}

export default Crear