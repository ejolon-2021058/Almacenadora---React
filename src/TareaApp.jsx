import { useState } from "react";
import { AgregarTareas } from "./components/AgregarTareas"
import { ListaDeTareas } from "./components/ListaTareas"


export const TareaApp = () => {

    const [tarea, setTarea] = useState([]);

    const agregarHw = (newHw) => {
        // Analizar si la tarea insertada ya se incluye en el array (tarea)
        if (tarea.find((hw) => hw.nombre === newHw.nombre)) {
            return;
        }

        // Agregar la nueva tarea al estado
        setTarea([...tarea, newHw]);
    };

    return (

        <>
            <h1>TareaApp</h1>
            <br />

            <ListaDeTareas  />
{/* 
            <AgregarTareas/> */}



        </>

    )
}
