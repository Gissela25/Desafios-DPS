
function ConverResult(props) {
    const { libras, conversion, resultado } = props;
    return (
        <div>
            {libras &&
                (
                    <Render
                        title1="libras es igual a"
                        value1={`${libras}`}
                        title2="conversion:"
                        value2={`${conversion}`}
                        title3="Resultado ="
                        value3={`${resultado}`}
                    />
                )}
        </div>


    );
}
function Render(data) {
    const { title1, value1, title2, value2, title3, value3 } = data;
    return (


        <h3 className="center re">{value1} {title1} {value3} {value2}</h3>

    );
}

export default ConverResult;
