export default function ConverForm(props) {
    const { setLibras, setConversion, libras } = props;
    return (<div className="center">
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
            </div>
        </div>
    </div>

    );
}

