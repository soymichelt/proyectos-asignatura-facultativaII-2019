import React, { Component } from 'react';

import MiCuenta from './mi-cuenta';

class MiCuentaContainer extends Component {

    constructor(props) {
        super(props);

        // Definimos nuestro array de datos
        const datos = [
            {
                imagen: require('./../assets/imagenes/img1.jpg'),
                titulo: 'Imagen 1',
            },
            {
                imagen: require('./../assets/imagenes/img2.jpg'),
                titulo: 'Imagen 2',
            },
            {
                imagen: require('./../assets/imagenes/img3.jpg'),
                titulo: 'Imagen 3',
            },
            {
                imagen: require('./../assets/imagenes/img4.jpg'),
                titulo: 'Imagen 4',
            },
            {
                imagen: require('./../assets/imagenes/img5.jpg'),
                titulo: 'Imagen 5',
            },
            {
                imagen: require('./../assets/imagenes/img6.jpg'),
                titulo: 'Imagen 6',
            },
            {
                imagen: require('./../assets/imagenes/img7.jpg'),
                titulo: 'Imagen 7',
            },
            {
                imagen: require('./../assets/imagenes/img8.jpg'),
                titulo: 'Imagen 8',
            },
            {
                imagen: require('./../assets/imagenes/img9.jpg'),
                titulo: 'Imagen 9',
            },
            {
                imagen: require('./../assets/imagenes/img10.jpg'),
                titulo: 'Imagen 10',
            },
            {
                imagen: require('./../assets/imagenes/img11.jpg'),
                titulo: 'Imagen 11',
            },
            {
                imagen: require('./../assets/imagenes/img12.jpg'),
                titulo: 'Imagen 12',
            },
        ];

        // Inicializamos el estado con nuestro array de datos
        this.state = {
            publicaciones: datos,
        };

    }

    render() {

        const { publicaciones } = this.state;

        return (
            <MiCuenta
                publicaciones={ publicaciones }
            />
        );

    }

}

export default MiCuentaContainer;