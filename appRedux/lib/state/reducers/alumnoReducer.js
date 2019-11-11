/*
    Reducer de Alumnos
*/
import {
    GUARDANDO_ALUMNO,
    ALUMNO_AGREGADO,
} from './../actions/alumnoAction'

export const alumnoReducer = (state = {}, action) => {

    switch(action.type) {

        case GUARDANDO_ALUMNO:
        case ALUMNO_AGREGADO: {
            const { alumno } = action.payload;
            const newState = { ...state, ...alumno }
            return newState;
        }
        default: {
            return state;
        }

    }

};