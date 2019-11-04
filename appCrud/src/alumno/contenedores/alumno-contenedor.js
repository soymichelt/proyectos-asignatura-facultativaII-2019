import React, { Component } from 'react';

import Listado from './../componentes/listado';
import Guardar from './../componentes/guardar';
import Eliminar from './../componentes/eliminar';

class AlumnoContenedor extends Component {

    constructor(props) {
        super(props);

        this.state = {
            pantalla: 'listado',
            alumnos: [],
            nombreAlumno: '',
            alumnoSeleccionadoId: '',
        };
    }

    eventoPantallaGuardar = () => {

        this.setState({
            pantalla: 'guardar',
        });

    }

    eventoPantallaEliminar = (alumnoId) => {
        const { alumnos } = this.state;
        const indiceEliminar = alumnos.findIndex(
            (item) => item.key === alumnoId
        );
        this.setState({
            pantalla: 'eliminar',
            alumnoSeleccionadoId: alumnoId,
            nombreAlumnoAEliminar: alumnos[indiceEliminar].nombreAlumno,
        });
    }

    eventoNombre = (nombre) => {
        this.setState({
            nombreAlumno: nombre,
        });
    };

    eventoGuardar = () => {
        const { nombreAlumno, alumnos } = this.state;
        alumnos.push({
            key: (alumnos.lenght + 1).toString(),
            nombreAlumno: nombreAlumno,
        });
        this.setState({
            nombreAlumno: '',
            alumnos: alumnos,
            pantalla: 'listado',
        });
    };

    render () {
        const {
            pantalla,
            alumnos,
            nombreAlumno,
        } = this.state;

        switch (pantalla) {
            case 'listado': {
                return (
                    <Listado
                        data={alumnos}
                        eventoPantallaGuardar={this.eventoPantallaGuardar}
                        eventoPantallaEliminar={this.eventoPantallaEliminar}
                    />
                );
            }
            case 'guardar': {
                return (
                    <Guardar
                        nombre={nombreAlumno}
                        eventoNombre={this.eventoNombre}
                        eventoGuardar={this.eventoGuardar}
                    />
                );
            }
            case 'eliminar': {
                return (
                    <Eliminar
                        nombre={nombreAlumnoAEliminar}
                        eventoEliminar={() => {}}
                    />
                );
            }
        }
    }

}

export default AlumnoContenedor;