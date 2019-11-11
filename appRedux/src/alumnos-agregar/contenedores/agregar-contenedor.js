import React, { Component } from 'react';
import Agregar from './../componentes/agregar';
import { connect } from 'react-redux';
import {
    agregarAlumno,
} from './../../../lib/state/actions/alumnoAction'

class CrearContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            nombre: '',
            telefono: '',
        };
    }

    eventoAgregarAlumno = () => {
        this.props.agregarAlumno({
            nombre: this.props.nombre,
            telefono: this.props.telefono,
        })
    }

    eventoTerminarAlumno = () =>  {
        this.props.terminarAlumno();
    }

    eventoNombre = (nombre) => {
        this.setState({
            nombre: nombre,
        })
    }

    eventoTelefono = (telefono) => {
        this.setState({
            telefono: telefono,
        });
    }

    render() {

        const {
            estado,
        } = this.props;

        const {
            nombre,
            telefono,
        } = this.state;

        return (
            <Agregar
                estado={estado}
                nombre={nombre}
                telefono={telefono}
                eventoAgregarAlumno={this.eventoAgregarAlumno}
                eventoNombre={this.eventoNombre}
                eventoTelefono={this.eventoTelefono}
            />
        )

    }

}

const mapStateToProps = (newState, newProps) => {

    const { alumno } = newState

    if(alumno) {
        const { estado, } = alumno
        return {
            estado: estado ? estado : '',
        }
    }

    return {
        estado: '',
    }

}

const mapDispatchToProps = (dispatch) => ({

    agregarAlumno: (alumno) => dispatch(agregarAlumno(alumno)),
    terminarAlumno: (nombre) => dispatch(terminarAlumno(nombre)),

})

export default connect(mapStateToProps, mapDispatchToProps)(CrearContainer)