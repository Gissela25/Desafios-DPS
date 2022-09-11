import './styles/home.css';
import React, { useState, useEffect } from 'react';

export default function Ejercicio2() {


    const [libras, setLibras] = useState(0);
    const [conversion, setConversion] = useState('Kilogramos');
    const [resultado, setResultado] = useState(0);

    const convert = () => {
        if (conversion == "Kilogramos")
            return (libras) / (2.204);
        else if (conversion == "Onzas")
            return (libras) * (16);
        else
            return (libras) * (453.592);

    }

    useEffect(() => {
        setResultado(convert())
    }, [libras, conversion]);


    return <div className="center">
        <div className="row my-5 justify-content-center">
            <div className="col-md-6 ">
                <h3>Conversor de Masa</h3>
                <div className="row my-4">
                   
                        <div className="input-group mb-3">
                            <span className="input-group-text sp" id="inputGroup-sizing-default">Ingresar Cantidad en Libras</span>
                            <input name="libra" type="number" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" value={libras} onChange={(e) => setLibras(e.target.value)} />
                        </div>
                    </div>
                <div className="row my-4">
                <label className="pb-3">Seleccionar conversión</label>
                        <select class="form-select" onChange={(e) => setConversion(e.target.value)}>
                            <option>Kilogramos</option>
                            <option>Onzas</option>
                            <option>Gramos</option>
                        </select>
                    </div>
                {/* <button onClick={handleClick}>Convertir</button> */}
                <h3 className="pt-5 re">{libras} Libras es igual a {resultado} {conversion}</h3>
                </div>
            </div>
        </div>


}
