import React, { Component } from 'react';
import Home from './home';
import {
    Alert
} from 'react-native';

class HomeContainer extends Component
{

    constructor(props) {
        super(props);

        this.state = {
            nombre: 'Michel',
        };
    }

    eventoTocar = () => {
        const { nombre } = this.state;
        Alert.alert('Me llamo' + nombre, 'Como estás?');
    }

    render() {
        const { nombre } = this.state;
        return (
            <Home
                nombre={nombre}
                eventoTocar={this.eventoTocar}
            />
        );
    }

}

export default HomeContainer;