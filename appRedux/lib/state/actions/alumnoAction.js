/* Action Type's */
export const GUARDANDO_ALUMNO  =   'GUARDANDO_ALUMNO';
export const ALUMNO_AGREGADO = 'ALUMNO_AGREGADO';

/* Action Creators */
const guardandoAlumno  = (payload) => ({ type: GUARDANDO_ALUMNO, payload });
const alumnoAgregado  = (payload) => ({ type: ALUMNO_AGREGADO, payload });

/* Action's */
export const agregarAlumno = (datosAlumno) => {
    return (dispatch, getState) => {

        dispatch(guardandoAlumno({
            alumno: {
                estado: 'guardando',
            },
        }))

        const { alumno } = getState()

        let { listado } = alumno

        if(!listado) {
            listado = []
        }

        listado.push({
            key: (listado.length + 1).toString(),
            nombre: datosAlumno.nombre,
            telefono: datosAlumno.telefono,
        })

        dispatch(alumnoAgregado({
            alumno: {
                estado: 'guardado',
                listado: listado,
            },
        }))
    }
}