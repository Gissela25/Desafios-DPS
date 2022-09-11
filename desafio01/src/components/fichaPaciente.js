import React from "react";

const Ficha = ({pacientes}) =>
{
    

    return (
        <div>

            <div className="row my-3 justify-content-center">
                <div className="col-md-6 text-center">
                    {pacientes.nombres &&
                    (
                        <RenderTitle 
                            title="Ficha Médica"
                        />
                    )}
                </div>
            </div>

            <div className="row my-3 ">
            <div className="col-md-3">
            {pacientes.nombres &&
            (
                <Render 
                title="Nombres:"
                value={`${pacientes.nombres}`}
            />
            )}
            </div>
            <div className="col-md-3">
           {pacientes.apellidos && (
            <Render 
                title="Apellidos:"
                value={`${pacientes.apellidos}`}
            />
           )}
            </div>
            <div className="col-md-6">
           {pacientes.dui && (
            <Render 
                title="Documento de Identidad (DUI):"
                value={`${pacientes.dui}`}
            />
           )}
            </div>
           </div>

           <div className="row my-3">
           <div className="col-md-3">
           {pacientes.sexo && (
            <Render 
                title="Sexo/Genero:"
                value={`${pacientes.sexo}`}
            />
           )}
            </div>
            <div className="col-md-5">
           {pacientes.fechaNacimiento && (
            <Render 
                title="Fecha de Nacimiento:"
                value={`${pacientes.fechaNacimiento}`}
            />
           )}
            </div>
            <div className="col-md-4">
           {pacientes.nacionalidad && (
            <Render 
                title="Nacionalidad:"
                value={`${pacientes.nacionalidad}`}
            />
           )}
            </div>
           </div>

           <div className="row my-3">
           <div className="col-md-6">
           {pacientes.municipio && (
            <Render 
                title="Municipio:"
                value={`${pacientes.municipio}`}
            />
           )}
            </div>
            <div className="col-md-6">
           {pacientes.departamento && (
            <Render 
                title="Departamento/Estado/Provincia:"
                value={`${pacientes.departamento}`}
            />
           )}
            </div>
           </div>
           <div className="row my-3">
           <div className="col-md-12">
           {pacientes.direccion && (
            <Render 
                title="Municipio:"
                value={`${pacientes.direccion}`}
            />
           )}
            </div>
           </div>

    </div>

       
        
    );
}

function Render(datapacientes)
{
    const {title, value} = datapacientes;
    return(

        <p className="border border-primary p-3"><strong>{title}</strong>&nbsp;{value}</p>
    );
}

function RenderTitle(datapacientes)
{
    const {title} = datapacientes;
    return(

        <h1 className="display-3">{title}</h1>
    );
}
export default Ficha;