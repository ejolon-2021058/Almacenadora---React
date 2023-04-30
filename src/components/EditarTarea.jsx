import React from 'react'

export const EditarTarea = () => {
    const [tareas, setTareas] = useState([
        { nombre: 'Realizar Biologia', descripcion: 'Tarea semana 2', creador: 'David Quinonez', fechaInicial: '2023-04-19', fechaFinal: '2023-04-21', estado: 'En progreso' },
        { nombre: 'Mate', descripcion: 'Cuestionario', creador: 'KK', fechaInicial: '2023-04-19', fechaFinal: '2023-04-21', estado: 'En progreso' },
        { nombre: 'CArton', descripcion: 'jasja', creador: 'alma', fechaInicial: '2023-04-19', fechaFinal: '2023-04-21', estado: 'En progreso' },

    ]);

    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [creador, setCreador] = useState("");
    const [fechaInicial, setFechaInicial] = useState("");
    const [fechaFinal, setFechaFinal] = useState("");
    const [estado, setEstado] = useState("");
    const [editarId, setEditarId] = useState(-1);



    const mostrarFormEditar = (tarea) => {
        setNombre(tarea.nombre);
        setDescripcion(tarea.descripcion);
        setCreador(tarea.creador);
        setFechaInicial(tarea.fechaInicial);
        setFechaFinal(tarea.fechaFinal);
        setEstado(tarea.estado);
        setEditarId(tarea.id);
    };

    //*EDITA TODOS
    const editarTarea = (event) => {
        event.preventDefault();
        setTareas(tareas.map((tarea) => {
            if (tarea.id === editarId) {
                return {
                    ...tarea,
                    nombre: nombre,
                    descripcion: descripcion,
                    creador: creador,
                    fechaInicial: fechaInicial,
                    fechaFinal: fechaFinal,
                    estado: estado,
                };
            } else {
                return tarea;
            }
        }));
        setNombre("");
        setDescripcion("");
        setCreador("");
        setFechaInicial("");
        setFechaFinal("");
        setEstado("");
        setEditarId(null);
    };




    //*EDITA SOLO EL PRIMERO
    // const editarTarea = (event) => {
    //     event.preventDefault();
    //     const index = tareas.findIndex((tarea) => tarea.id === editarId);
    //     if (index === -1) return; // Si no se encontró el índice, se sale del método
    //     const nuevasTareas = [...tareas];
    //     nuevasTareas[index] = {
    //         ...nuevasTareas[index],
    //         nombre,
    //         descripcion,
    //         creador,
    //         fechaInicial,
    //         fechaFinal,
    //         estado,
    //     };
    //     setTareas(nuevasTareas);
    //     setNombre("");
    //     setDescripcion("");
    //     setCreador("");
    //     setFechaInicial("");
    //     setFechaFinal("");
    //     setEstado("");
    //     setEditarId(null);
    // };

    return (
        <>
            <div className="modal fade" id="editarTareaModal" tabIndex="-1">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form onSubmit={editarTarea}>
                            <div className="modal-header">
                                <h5 className="modal-title">Editar tarea</h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                // onClick={() => setEditarId(1)}
                                ></button>
                            </div>
                            <div className="modal-body">
                                <div className="mb-3">
                                    <label htmlFor="edit-nombre" className="form-label">
                                        Nombre de tarea
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="edit-nombre"
                                        value={nombre}
                                        onChange={(event) => setNombre(event.target.value)}
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="edit-descripcion" className="form-label">
                                        Descripción
                                    </label>
                                    <textarea
                                        className="form-control"
                                        id="edit-descripcion"
                                        rows="3"
                                        value={descripcion}
                                        onChange={(event) => setDescripcion(event.target.value)}
                                    ></textarea>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="edit-creador" className="form-label">
                                        Creador
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="edit-creador"
                                        value={creador}
                                        onChange={(event) => setCreador(event.target.value)}
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="edit-fecha-inicial" className="form-label">
                                        Fecha inicial
                                    </label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        id="edit-fecha-inicial"
                                        value={fechaInicial}
                                        onChange={(event) => setFechaInicial(event.target.value)}
                                    />
                                </div>

                                <div className="mb-3">
                                    <label

                                        htmlFor="edit-fecha-final"
                                        className="form-label"
                                    >
                                        Fecha final
                                    </label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        id="edit-fecha-final"
                                        value={fechaFinal}
                                        onChange={(event) => setFechaFinal(event.target.value)}
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="edit-estado" className="form-label">
                                        Estado
                                    </label>
                                    <select
                                        className="form-select"
                                        id="edit-estado"
                                        value={estado}
                                        onChange={(event) => setEstado(event.target.value)}
                                    >
                                        <option value="pendiente">Pendiente</option>
                                        <option value="en proceso">En proceso</option>
                                        <option value="completado">Completado</option>
                                    </select>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                    onClick={() => setEditarId(null)}
                                >
                                    Cancelar
                                </button>
                                <button type="submit" className="btn btn-primary">
                                    Guardar cambios
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>


        </>
    )
}
