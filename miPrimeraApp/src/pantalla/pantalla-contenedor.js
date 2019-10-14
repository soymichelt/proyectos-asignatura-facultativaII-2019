import React, { Component } from 'react';

import Pantalla1 from './pantalla1';
import Pantalla2 from './pantalla2';

class PantallaContenedor extends Component {

    constructor(props) {
        super(props);

        //inicializamos el estado
        this.state = {
            vista: 'pantalla1',
        };
    }

    cambiarPantalla = (pantalla) => {

        this.setState({
            vista: pantalla,
        });

    };

    render() {

        const { vista } = this.state;

        if(vista === 'pantalla1') {
            return (
                <Pantalla1
                    cambiarPantalla={this.cambiarPantalla}
                />
            );
        }

        if(vista === 'pantalla2') {
            return (
                <Pantalla2
                    cambiarPantalla={this.cambiarPantalla}
                />
            );
        }

    }

}

export default PantallaContenedor;