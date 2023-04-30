import React, { useState } from 'react';
import { AgregarTareas } from './AgregarTareas';


export const ListaDeTareas = (tarea) => {
    const [tareas, setTareas] = useState([
        { nombre: 'Realizar Biologia', descripcion: 'Tarea semana 2', creador: 'David Quinonez', fechaInicial: '2023-04-19', fechaFinal: '2023-04-21', estado: 'En progreso' },
    ]);


    //* Declarando variables
    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [creador, setCreador] = useState("");
    const [fechaInicial, setFechaInicial] = useState("");
    const [fechaFinal, setFechaFinal] = useState("");
    const [estado, setEstado] = useState("");



    //Splice sirve para eliminar un arreglo en especifico 
    //Eliminando taread
    const eliminarTarea = (tarea) => {
        const nuevasTareas = [...tareas];
        nuevasTareas.splice(tarea, 1);
        setTareas(nuevasTareas);
    };


    //Seteando los datos para que aparezcan en la modal de editar y ver
    const mostrarFormEditar = (tarea) => {
        setDescripcion(tarea.descripcion);
        setCreador(tarea.creador);
        setFechaInicial(tarea.fechaInicial);
        setFechaFinal(tarea.fechaFinal);
        setEstado(tarea.estado);
    };

    //PreventDefault evita que se recarge la pagina y se pierdan los datoa al recargar
    // FindIndex se utiliza para encontrar el indice de la tarea que se quiera editar
    const editarTarea = (event) => {
        event.preventDefault();
        const tareaIndex = tareas.findIndex((tarea) => tarea.fechaFinal === fechaFinal);
        const nuevasTareas = [...tareas];

        //Si la tarea existe se crea una copia (Datos exactos) para luego poder agregar nuevos cmbios en los campos
        nuevasTareas[tareaIndex] = {
            ...nuevasTareas[tareaIndex],
            nombre,
            descripcion,
            creador,
            fechaInicial,
            fechaFinal,
            estado
        };

        //Por ultimo se setean los campos actualizados con el nuevaTareas
        setTareas(nuevasTareas);
        setNombre("");
        setDescripcion("");
        setCreador("");
        setFechaInicial("");
        setFechaFinal("");
        setEstado("");
    };



    //Se usa para los cambios de estado de los input, en pocas palabras 
        //se usa para poder agregar los campos necesarios
    const nombreTareaChange = ({ target }) => {
        setNombre(target.value);
    };
    const descripcionChange = ({ target }) => {
        setDescripcion(target.value);
    };
    const creadorChange = ({ target }) => {
        setCreador(target.value);
    };
    const fechaIChange = ({ target }) => {
        setFechaInicial(target.value);
    };
    const fechaFChange = ({ target }) => {
        setFechaFinal(target.value);
    };
    const estadoChange = ({ target }) => {
        setEstado(target.value);
    };

    //Se ejecuta cuando se envia el formulario y setea los valores ingresados en el formulario
    const onSubmit = (event) => {
        event.preventDefault();
        const nuevaTarea = { nombre, descripcion, creador, fechaInicial, fechaFinal, estado };
        setTareas([...tareas, nuevaTarea]);
        setNombre('');
        setDescripcion('');
        setCreador('');
        setFechaInicial('');
        setFechaFinal('');
        setEstado('Pendiente');
    }



    return (
        <>

            <center>
                <h1>Lista de tareas</h1>
            </center>
            <br />
            <br />


            <div className="container">

                {/* <AgregarTareas/> */}


                <table className="table ">
                    <thead>
                        <tr>
                            <th>Nombre de tarea</th>
                            <th>Descripción</th>
                            <th>Creador</th>
                            {/* <th>Fecha de inicio</th>
                            <th>Fecha de fin</th> */}
                            <th>Estado</th>
                            <th>Servicios</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tareas.map((tarea, u) => (
                            <tr key={u}>
                                <td>{tarea.nombre}</td>
                                <td>{tarea.descripcion}</td>
                                <td>{tarea.creador}</td>
                                {/* <td>{tarea.fechaInicial}</td>
                                    <td>{tarea.fechaFinal}</td> */}
                                <td>{tarea.estado}</td>
                                <td>


                                    <button className="btn btn-sm btn-warning me-2"
                                        data-bs-toggle="modal"
                                        data-bs-target="#editarTareaModal1"
                                        onClick={() => mostrarFormEditar(tarea)}>
                                        Ver
                                    </button>

                                    <button
                                        className="btn btn-sm btn-secondary me-2"
                                        data-bs-toggle="modal"
                                        data-bs-target="#editarTareaModal"
                                        onClick={() => mostrarFormEditar(tarea)}
                                    >
                                        Editar
                                    </button>
                                    <button
                                        onClick={() => eliminarTarea(tarea)}
                                        className='btn btn-danger'
                                    >Eliminar</button>

                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>



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
                                            rows="3"

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
                                            <option value="en proceso">En progreso</option>
                                            <option value="completado">Completado</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button
                                        type="button"
                                        className="btn btn-secondary"
                                        data-bs-dismiss="modal"
                                        onClick={() => setEditarIndex(null)}
                                    >
                                        Cancelar
                                    </button>
                                    <button id='cerrar' type="submit" className="btn btn-primary" data-bs-dismiss="modal">
                                        Guardar cambios
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container">



                {/* Agregar Tareas */}
                <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Agregar Tarea
                </button>
                                        

            </div>


            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="container">
                            <button className="btn btn-secondary" id='botonCerrar' data-bs-dismiss="modal"><i className="fa-solid fa-user"></i></button>

                            <form onSubmit={onSubmit}>
                                <div className="form-group">
                                    <label >Nombre de tarea</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="nombre"
                                        value={nombre}
                                        onChange={nombreTareaChange}
                                        required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="descripcion">Descripción</label>
                                    <textarea
                                        className="form-control"
                                        id="descripcion"
                                        value={descripcion}
                                        onChange={descripcionChange} required></textarea>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="creador">Creador</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="creador"
                                        value={creador}
                                        onChange={creadorChange} required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="fechainIcial">Fecha de inicio</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        id="fechaInicial"
                                        value={fechaInicial}
                                        onChange={fechaIChange} required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="fechaFinal">Fecha de fin</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        id="fechaFinal" value={fechaFinal}
                                        onChange={fechaFChange} required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="estado">Estado</label>
                                    <select
                                        className="form-control"
                                        id="estado" value={estado}
                                        onChange={estadoChange} required>
                                        <option value="Pendiente" className='text-secondary'>Pendiente</option>
                                        <option value="En progreso" className='text-warning'>En progreso</option>
                                        <option value="Completada" className='text-success'>Completada</option>
                                    </select>
                                </div>

                                <button type="submit" className="btn btn-success" data-bs-dismiss="modal">Agregar tarea</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

                                    
            {/* Modal para ver una tarea */}
            <div className="modal fade" id="editarTareaModal1" tabIndex="-1">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form onSubmit={editarTarea}>
                            <div className="modal-header">
                                <h5 className="modal-title">Informacion de la Tarea</h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                    onClick={() => setEditarId(1)}
                                    readOnly
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
                                        readOnly
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
                                        readOnly
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
                                        readOnly
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
                                        readOnly
                                    />
                                </div>

                                <div className="mb-3">
                                    <label

                                        htmlFor="edit-fecha-final"
                                        className="form-label"
                                    >
                                        Fecha final
                                    </label>
                                    <input type="date" className="form-control" id="edit-fecha-final" value={fechaFinal} onChange={(event) => setFechaFinal(event.target.value)} readOnly
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="edit-estado" className="form-label">
                                        Estado
                                    </label>
                                    <select className="form-select" id="edit-estado" value={estado} onChange={(event) => setEstado(event.target.value)}
                                    >
                                        <option value="pendiente">Pendiente</option>
                                        <option value="en proceso">En progreso</option>
                                        <option value="completado">Completado</option>
                                    </select>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    );

}