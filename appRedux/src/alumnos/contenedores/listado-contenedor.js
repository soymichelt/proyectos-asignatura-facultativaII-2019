import React, { Component } from 'react'
import Listado from './../componentes/listado'
import { connect } from 'react-redux'

class ListadoContenedor extends Component {

    constructor(props) {
        super(props)
    }

    eventoAgregar = () => {
        this.props.navigation.navigate('Agregar')
    }

    render() {

        let { alumnos } = this.props
        
        return (
            <Listado
                data={alumnos}
                eventoAgregar={this.eventoAgregar}
            />
        )

    }

}

const mapStateToProps = (newState, newProps) => {
    
    const { alumno } = newState

    let alumnos = []

    if(alumno) {
        const { listado } = alumno
        if(listado) {
            alumnos = listado
        }
    }

    console.log(`Alumnos: ${alumnos}`);

    return {
        alumnos: alumnos,
    };
}

export default connect(mapStateToProps)(ListadoContenedor)