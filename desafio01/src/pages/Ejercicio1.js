import React from "react";
import { useForm } from "../components/hookForm";
import Ficha from "../components/fichaPaciente";
import { SelectHTMLAttributes } from "react";
import Select from "react-select";
const  inicialDatosPaciente = {
    nombres : '',
    apellidos : '',
    dui : '',
    sexo : '',
    nacionalidad : '',
    fechaNacimiento : '',
    direccion : '',
    municipio : '',
    departamento : ''
};
const validacionesForm = (datosPaciente) => {
    let errores = {}
    let regexDui = /^0[0-9]{7}-[0-9]{1}$/;
    let regexString = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexDireccion = /.{5,255}/gm;
    let regexSexo = /^[F|f|m|M|Masculino|Femenino|masculino|femenino]$/gm;
    if(!datosPaciente.nombres.trim())
    {
        errores.nombres = "Debes ingresar el / los nombre(s)";
    }
    else if(!regexString.test(datosPaciente.nombres.trim()))
    {       
        errores.nombres = "El campo nombre solo acepta letras y espacios en blanco"
    }

    if(!datosPaciente.apellidos.trim())
    {
        errores.apellidos = "Debes ingresar el / los apellido(s)";
    }
    else if(!regexString.test(datosPaciente.apellidos.trim()))
    {       
        errores.apellidos = "El campo apellido solo acepta letras y espacios en blanco"
    }

    if(!datosPaciente.dui.trim())
    {
        errores.dui = "Debes ingresar el DUI";
    }
    else if(!regexDui.test(datosPaciente.dui.trim()))
    {       
        errores.dui = "El campo DUI debe tener el formato : 00000000-0"
    }

    if(!datosPaciente.nacionalidad.trim())
    {
        errores.nacionalidad = "Debes ingresar la nacionalidad";
    }
    else if(!regexString.test(datosPaciente.nacionalidad.trim()))
    {       
        errores.nacionalidad = "El campo nacionalidad solo acepta letras"
    }

    
    if(!datosPaciente.municipio.trim())
    {
        errores.municipio = "Debes ingresar el municipio";
    }
    else if(!regexString.test(datosPaciente.municipio.trim()))
    {       
        errores.municipio = "El campo municipio solo acepta letras"
    }

    
    if(!datosPaciente.sexo.trim())
    {
        errores.sexo = "Debes ingresar  el sexo";
    }
    else if(!regexSexo.test(datosPaciente.sexo.trim()))
    {       
        errores.sexo = "El campo sexo acepta: Masculino y Femenino o F y M"
    }

    if(!datosPaciente.departamento.trim())
    {
        errores.departamento = "Debes ingresar  el departamento";
    }
    else if(!regexString.test(datosPaciente.departamento.trim()))
    {       
        errores.departamento = "El campo departamento solo acepta letras"
    }

    if(!datosPaciente.fechaNacimiento.trim())
    {
        errores.fechaNacimiento = "Debes ingresar la fecha de nacimiento";
    }

    if(!datosPaciente.direccion.trim())
    {
        errores.direccion = "Debes ingresar  la dirección";
    }
    else if(!regexDireccion.test(datosPaciente.direccion.trim()))
    {       
        errores.direccion = "El campo direccion solo acepta entre 5 y 255 caracteres"
    }

    return errores;
};

const Ejercicio1 = () => {
    const options = [
        {value:'masculino', label:'Masculino'},
        {value:'femenino', label:'Femenino'},
        {value: 'indefinido', label:'Helicoptero de combate'}
    ]
    const {
        datosPaciente,
        pacientes,
        errores,
        cargando,
        handleChange,
        handleBlur,
        handleSubmit,
        handleClick,
    } = useForm(inicialDatosPaciente, validacionesForm);
    return (
    <div className="row my-5 justify-content-center">
    <div className="col-md-6 ">
        <h2 className="text-center my-4"> Formulario de Ficha  </h2>
        <form onSubmit={handleSubmit} >
        <div className="row my-4">
        <div className="col-md-6">
            <input type="text" 
            name="nombres" 
            placeholder="Debes tu nombre" 
            onChange={handleChange}
            onBlur = {handleBlur} 
            value={datosPaciente.nombres}
            required   
            className="form-control"
            />
            {errores.nombres && <span className="text-danger">{errores.nombres}</span>}
        </div>
        <div className="col-md-6">
                <input type="text" 
                name="apellidos" 
                placeholder="Debes ingresar los apellidos" 
                onChange={handleChange}
                onBlur = {handleBlur} 
                value={datosPaciente.apellidos}
                required   
                className="form-control"
                />
                {errores.apellidos && <span className="text-danger">{errores.apellidos}</span>}
        </div>         
        </div>

        <div className="row my-4">
            <div className="col-md-6">
            <input className="form-control" type="text" 
            name="dui" 
            placeholder="Debes ingresar el DUI" 
            onChange={handleChange}
            onBlur = {handleBlur} 
            value={datosPaciente.dui}
            required   
            />
            {errores.dui && <span className="text-danger">{errores.dui}</span>}
            </div>
            <div className="col-md-6">
            <input className="form-control" type="text" 
            name="sexo" 
            placeholder="Debes ingresar el sexo" 
            onChange={handleChange}
            onBlur = {handleBlur} 
            value={datosPaciente.sexo}
            required   
            />
            {errores.sexo && <span className="text-danger">{errores.sexo}</span>}
            </div>
        </div>

        <div className="row my-4">
            <div className="col-md-6">
            <input className="form-control" type="date" 
            name="fechaNacimiento" 
            onChange={handleChange}
            onBlur = {handleBlur} 
            value={datosPaciente.fechaNacimiento}
            required   
            />
            {errores.fechaNacimiento && <span className="text-danger">{errores.fechaNacimiento}</span>}
            </div>
            <div className="col-md-6">
            <input className="form-control" type="text" 
            name="nacionalidad" 
            placeholder="Debes ingresar la nacionalidad" 
            onChange={handleChange}
            onBlur = {handleBlur} 
            value={datosPaciente.nacionalidad}
            required   
            />
            {errores.nacionalidad && <span className="text-danger">{errores.nacionalidad}</span>}
            </div>
        </div>

           <div className="row my-4">
            <div className="col-md-6">
            <input className="form-control" type="text" 
            name="municipio" 
            placeholder="Debes ingresar el municipio" 
            onChange={handleChange}
            onBlur = {handleBlur} 
            value={datosPaciente.municipio}
            required   
            />
            {errores.municipio && <span className="text-danger">{errores.municipio}</span>}
            </div>
            <div className="col-md-6">
            <input className="form-control" type="text" 
            name="departamento" 
            placeholder="Debes ingresar el departamento" 
            onChange={handleChange}
            onBlur = {handleBlur} 
            value={datosPaciente.departamento}
            required   
            />
            {errores.departamento && <span className="text-danger">{errores.departamento}</span>}
            </div>
           </div>
           
            <div className="row my-4">
                <div className="col-md-12 text-center">
            <textarea
            className="form-control"
             name="direccion" cols="50" row="5"
            placeholder="Debes ingresar tu direccion"
            onChange={handleChange}
            onBlur = {handleBlur} 
            value={datosPaciente.direccion}
            required   
            >
            </textarea>
            {errores.direccion && <span className="text-danger">{errores.direccion}</span>}
                </div>
            </div>
                 
           <div className="row my-5 justify-content-center">
           <div className="col-md-6">           
           <button onClick={handleClick} className="btn btn-success form-control" >Guardar</button>
           </div>
           </div>
        </form>
        {
         pacientes.map((valores)=>(<Ficha pacientes={valores}/>))
        }
</div>
    </div>)
    ;
}


export default Ejercicio1;