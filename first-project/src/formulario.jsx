import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

const ControlledForm = () => {
    const [formValues, setFormValues] = useState({
        Nombre: "",
        Descripcion: "",
        Estado: "Pendiente",
    });
    const setFormErrors = useState({
        Nombre: "",
        Descripcion: "",
        Estado: "",
    })

    const [overallError, setOverallError] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        const formData = new FormData(e.target)
        console.log(Object.fromEntries(formData.entries()))

        const { Nombre, Descripcion, Estado } = formValues

        const errors = {}

        if (Nombre.trim() === "") {
            errors.Nombre = "El nombre de la tarea es obligatorio"
        }

        if (Descripcion.trim() === "") {
            errors.Descripcion = "La descripción de la tarea es obligatoria"
        }

        if (Estado.trim() === "") {
            errors.Estado = "El estado de la tarea es obligatorio"
        }

        if (Object.keys(errors).length > 0) {
            setFormErrors(errors)

            if (errors.Nombre && errors.Descripcion && errors.Estado) {
                setOverallError("Están mal todos los campos del formulario. ¡Corrigelos!")
            }  else if (errors.Nombre && errors.Descripcion) {
                setOverallError("Están mal los campos de Nombre y Descripción. ¡Corrigelos!")
            } else if (errors.Nombre) {
                setOverallError("Está mal el campo Nombre. ¡Corrigelo!")
            } else if (errors.Descripcion) {
                setOverallError("Está mal el campo Descripción ¡Corrigelo!")
            }

            console.log("Error en el formulario")
            return
        }

        setFormErrors({})
        setOverallError("")
        console.log("Enviando objeto al server...")
    };

    const handleChange = (e) => {
        const { name, value } = e.target

        setFormErrors((prevErrors) => ({ ...prevErrors, [name]: "" }))
        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }))
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    name="Nombre"
                    placeholder="Nombre de la tarea"
                    type="text"
                    className={"form-control mb-2"}
                    value={formValues.Nombre}
                    onChange={handleChange}
                />

                <br />

                <textarea
                    name="Descripcion"
                    placeholder="Introduce la descripción de la tarea"
                    className={"form-control mb-2"}
                    value={formValues.Descripcion}
                    onChange={handleChange}
                />

                <br />

                <select
                    name="Estado"
                    className={"form-control mb-2"}
                    value={formValues.Estado}
                    onChange={handleChange}
                >
                    <option value="Pendiente">Pendiente</option>
                    <option value="Completado">Completado</option>
                </select>

                <br />

                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>

            {overallError && <p className="text-danger mt-3">{overallError}</p>}
        </>
    )
}

export default ControlledForm