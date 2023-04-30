import React, { useState } from 'react'

export const AgregarTareas = ({ onNewHw }) => {

    const [agregar, setAgregar] = useState({});
    const [ids, setId] = useState(1)

    // const [nombre, setNombre] = useState('');
    // const [descripcion, setDescripcion] = useState('');
    // const [creador, setCreador] = useState('');
    // const [fechaInicial, setFechaInicial] = useState('');
    // const [fechaFinal, setFechaFinal] = useState('');
    // const [estado, setEstado] = useState('Pendiente');

    // const nombreTareaChange = ({ target }) => {
    //     setNombre(target.value);
    // };
    // const descripcionChange = ({ target }) => {
    //     setDescripcion(target.value);
    // };
    // const creadorChange = ({ target }) => {
    //     setCreador(target.value);
    // };
    // const fechaIChange = ({ target }) => {
    //     setFechaInicial(target.value);
    // };
    // const fechaFChange = ({ target }) => {
    //     setFechaFinal(target.value);
    // };
    // const estadoChange = ({ target }) => {
    //     setEstado(target.value);
    // };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setAgregar({ ...agregar, ["id"]: ids, [name]: value });
    };

    const onSubmit = (event) => {
        setId(ids + 1);
        setAgregar({
            // ["id"]: "",
            ["nombreTarea"]: "",
            ["descripcion"]: "",
            ["fechaStart"]: "",
            ["fechaEnd"]: "",
            ["estado"]: "Pendiente",
            ["nombrePersona"]: "",
        }); 
        onNewHw(agregar); 
        event.preventDefault();
    };


    return (

        <>


            <h4>AgregarTareas</h4>
            <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Agregar Tarea
            </button>

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
                                        value={agregar.nombreTarea}
                                        onChange={handleChange}
                                        required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="descripcion">Descripción</label>
                                    <textarea
                                        className="form-control"
                                        id="descripcion"
                                        value={agregar.descripcion}
                                        onChange={handleChange} required></textarea>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="creador">Creador</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="creador"
                                        value={agregar.nombrePersona}
                                        onChange={handleChange} required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="fechainIcial">Fecha de inicio</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        id="fechaInicial"
                                        value={agregar.fechaStart}
                                        onChange={handleChange} required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="fechaFinal">Fecha de fin</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        id="fechaFinal" value={agregar.fechaEnd}
                                        onChange={handleChange} required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="estado">Estado</label>
                                    <select
                                        className="form-control"
                                        id="estado" value={agregar.estado}
                                        onChange={handleChange} required>
                                        <option value="Pendiente" className='text-secondary'>Pendiente</option>
                                        <option value="En progreso" className='text-warning'>En progreso</option>
                                        <option value="Completada" className='text-success'>Completada</option>
                                    </select>
                                </div>

                                <button type="submit" className="btn btn-success" >Agregar tarea</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
