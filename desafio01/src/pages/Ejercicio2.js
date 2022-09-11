import React, {useState, useEffect} from 'react';

export default function Ejercicio2() {


    const [libras,setLibras] = useState(0);
    const [conversion,setConversion] = useState('Kilogramos');
    const [resultado,setResultado] = useState(0);

    const convert = () => {
        if(conversion=="Kilogramos")
        return (libras)/(2.204);
        else if(conversion=="Onzas")
        return (libras)*(16);
        else
        return (libras)*(453.592);

    }

    useEffect(()=>{
    setResultado(convert())
    }, [libras,conversion]);


    return <div class="row mx-5 mt-5">
        <div className="col ml-5">
            <div className="row mt-3">
                <div className="input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-default">Ingresar Cantidad en Libras</span>
                    <input name="libra" type="number" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"  value={libras} onChange={(e) => setLibras(e.target.value)}  />
                </div>
            </div>

            <div className="row mt-3">
                <select class="form-select" onChange={(e) => setConversion(e.target.value)}>
                    <option>Kilogramos</option>
                    <option>Onzas</option>
                    <option>Gramos</option>
                </select>
                {/* <button onClick={handleClick}>Convertir</button> */}
            </div>

            <div className="row mt-3">
                <label>Resultado : {resultado}</label>
            </div>
        </div>
    </div>



      }
