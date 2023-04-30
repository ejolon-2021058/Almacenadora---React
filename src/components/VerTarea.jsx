import React, { useState } from 'react'

export const VerTarea = (tarea) => {
    const [tareas, setTareas] = useState([
    ]);

    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [creador, setCreador] = useState("");
    const [fechaInicial, setFechaInicial] = useState("");
    const [fechaFinal, setFechaFinal] = useState("");
    const [estado, setEstado] = useState("");
    const [editarId, setEditarId] = useState(null);

    const mostrarFormEditar = (tarea) => {
        setNombre(tarea.nombre);
        setDescripcion(tarea.descripcion);
        setCreador(tarea.creador);
        setFechaInicial(tarea.fechaInicial);
        setFechaFinal(tarea.fechaFinal);
        setEstado(tarea.estado);
        setEditarId(tarea.id);
    };

    const editarTarea = (event) => {
        event.preventDefault();
        const nuevasTareas = [...tareas];
        const tareaIndex = nuevasTareas.findIndex((tarea) => tarea.id === editarId);
        nuevasTareas[tareaIndex] = {
            id: editarId,
            nombre: nombre,
            descripcion: descripcion,
            creador: creador,
            fechaInicial: fechaInicial,
            fechaFinal: fechaFinal,
            estado: estado,
        };
        setTareas(nuevasTareas);
        setNombre("");
        setDescripcion("");
        setCreador("");
        setFechaInicial("");
        setFechaFinal("");
        setEstado("");
    }; 
    return (


        <>

            <button className="btn btn-sm btn-warning me-2"
                data-bs-toggle="modal"
                data-bs-target="#editarTareaModal1"
                onClick={() => mostrarFormEditar(tarea)}>
                Ver
            </button>

            <div className="modal fade" id="editarTareaModal1" tabIndex="-1">
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
                                    onClick={() => setEditarId(1)}
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
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
