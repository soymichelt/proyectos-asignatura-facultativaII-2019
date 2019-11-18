import React, { Component } from 'react';
import {
    AsyncStorage,
} from 'react-native';
import Listado from './../componentes/listado';
import Guardar from './../componentes/guardar';
import Eliminar from '../componentes/eliminar';

 class EstudianteContenedor extends Component {

    constructor(props) {
        super(props)

        this.state = {
            pantalla: 'listado',
            alumnos: [],
            nombreAlumno: '',
            alumnoSeleccionadoId: '',
        };

    }

    /* Funciones para cambiar de pantalla */
    eventoPantallaGuardar = () => {
        this.setState({
            pantalla: 'guardar',
        });
    }

    eventoPantallaEliminar = (alumnoId) => {
        const { alumnos } = this.state;
        const indiceEliminar = alumnos.findIndex(item => item.key === alumnoId);
        this.setState({
            pantalla: 'eliminar',
            alumnoSeleccionadoId: alumnoId,
            nombreAlumnoAEliminar: alumnos[indiceEliminar].nombreAlumno,
        });
    }

    /* eventos para pantalla crear */
    eventoNombre = (textNombre) => {
        this.setState({
            nombreAlumno: textNombre,
        })
    }

    eventoGuardar = async () => {
        const { nombreAlumno, alumnos } = this.state
        alumnos.push({
            key: (alumnos.length + 1).toString(),
            nombreAlumno: nombreAlumno,
        })
        await this.modificarEstudiantes(alumnos);
        this.setState({
            nombreAlumno: '',
            alumnos: alumnos,
            pantalla: 'listado',
        })
    }

    /* para eliminar */
    eventoBorrar = async () => {
        const { alumnoSeleccionadoId, alumnos, } = this.state;
        const indiceEliminar = alumnos.findIndex(item => item.key === alumnoSeleccionadoId);
        if(indiceEliminar > -1) {
            alumnos.splice(indiceEliminar, 1);
        }
        await this.modificarEstudiantes(alumnos);
        this.setState({
            alumnos: alumnos,
            pantalla: 'listado',
        });
    }

    obtenerEstudiantes = async () => {
        const datos = await AsyncStorage.getItem('DATOS');
        return datos;
    }

    modificarEstudiantes = async (estudiantes) => {
        const datosConvertidos = JSON.stringify(estudiantes);
        await AsyncStorage.setItem('DATOS', datosConvertidos);
    }

    render() {

        const { pantalla, alumnos, nombreAlumno, } = this.state

        switch (pantalla) {

            case 'listado':
                return (
                    <Listado
                        data={alumnos}
                        eventoPantallaGuardar={this.eventoPantallaGuardar}
                        eventoPantallaEliminar={this.eventoPantallaEliminar}
                    />
                )
            case 'guardar':
                return (
                    <Guardar
                        nombre={nombreAlumno}
                        eventoNombre={this.eventoNombre}
                        eventoGuardar={this.eventoGuardar}
                    />
                )
            case 'eliminar':
                const { nombreAlumnoAEliminar } = this.state
                return(
                    <Eliminar
                        nombre={nombreAlumnoAEliminar}
                        eventoEliminar={this.eventoBorrar}
                    />
                )
        }

    }

    async componentDidMount() {
        const datos = await this.obtenerEstudiantes();
        if(datos !== null) {
            const estudiantes = JSON.parse(datos);
            this.setState({
                alumnos: estudiantes,
            });
        }
    }

 }

 export default EstudianteContenedor;