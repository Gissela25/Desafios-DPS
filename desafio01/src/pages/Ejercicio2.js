import './styles/home.css';
import React, { useState, useEffect } from 'react';
import ConverForm from '../components/ConverForm';
import ConverResult from '../components/ConverResult';

export default function Ejercicio2() {


    const [libras, setLibras] = useState(0);
    const [conversion, setConversion] = useState('Kilogramos');
    const [resultado, setResultado] = useState(0);

    // useEffect(() =>{
    //     convert()
    // },[libras,conversion]);

    // const convert = () => {
    //     if (conversion == "Kilogramos")
    //     {
    //         const kilo = (libras) / (2.204);
    //         setResultado({
    //             kilog: kilo
    //         })
    //     }
    //     else if (conversion == "Onzas"){
    //         const onz = (libras) * (16);
    //         setResultado({
    //             kilog: onz
    //         })
    //     }
    //     else{
    //         const gra = (libras) * (453.592);
    //         setResultado({
    //             kilog: gra
    //         })
    //     }

    

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


    // useEffect(() => {
    //     setResultado(convert())
    // }, [libras, conversion]);

   


    return (  <>
            <ConverForm
                setLibras ={setLibras}
                setConversion = {setConversion}
                setResultado = {setResultado}
                libra = {libras}
            />
            <ConverResult
                libras = {libras}
                conversion = {conversion}
                resultado = {resultado}
            />
        </>

    );
    }
