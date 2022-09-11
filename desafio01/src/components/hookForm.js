import { useState } from "react";

export const useForm = (inicialDatosPaciente, validacionesForm) =>
{
    const [datosPaciente, setDatosPaciente] = useState(inicialDatosPaciente);
    const [pacientes,setPacientes]= useState([{}]);
    const [errores, setErrores] = useState({});
    const [cargando, setCargando] = useState(false);

    const handleChange = (e) => {
        setDatosPaciente(
            {
                ...datosPaciente,
                [e.target.name]:e.target.value
            }
        )
    };
    const handleClick = (e) =>
    {
        setErrores(validacionesForm(datosPaciente));

        if(Object.entries(errores).length === 0)
        {
            setPacientes([...pacientes, datosPaciente])
            setDatosPaciente(inicialDatosPaciente);
            
        }else{
            return;
        }
   
    }
    const handleBlur = (e) => {
        handleChange(e);
        setErrores(validacionesForm(datosPaciente));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
       /* setErrores(validacionesForm(datosPaciente));

        if(Object.keys(errores).length === 0)
        {

        }else{
            return;
        }*/
    };

    return{
        datosPaciente,
        pacientes,
        errores,
        cargando,
        handleChange,
        handleBlur,
        handleSubmit,
        handleClick
    }; 
};