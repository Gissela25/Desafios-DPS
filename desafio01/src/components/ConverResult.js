// export default converResult(){
//     const {libras, resultado, conversion} = props;
//     return(<h3 className="pt-5 re">{libras} Libras es igual a {resultado} {conversion}</h3>);

// };


// export default function ConverResult(props) {
//     const { libras, conversion, resultado} = props;
//     return ( <> {resultado && (<div className="center">
//     <div className="row my-5 justify-content-center">
//         <div className="col-md-6 ">
//             <h3 className="pt-5 re">{libras} Libras es igual a {resultado.kilog} {conversion}</h3>
//         </div>
//     </div>
// </div>)}</>



//     )}

// export default function ConverResult(props) {
//     const { libras, conversion, resultado } = props;
//     return (<div className="row my-5 justify-content-center">
//              <div className="col-md-6 ">
//                  <h3 className="pt-5 re">{libras} Libras es igual a {resultado} {conversion}</h3>
//              </div>
//          </div>
//     );
// }

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

        //<p className="border border-primary p-3"><strong>{title3}</strong>&nbsp;{value3}</p>
        <h3 className="center re">{value1} {title1} {value3} {value2}</h3>

    );
}

export default ConverResult;
