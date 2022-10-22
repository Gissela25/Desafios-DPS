import React, { useState, useEffect } from 'react';
import { View, Text, Pressable, TouchableOpacity } from 'react-native';
import CalculatorStyles from './styles/CalculatorStyles';

export default function Calculator({navigation}) {
    
    const [lastQuantity, setLastQuantity] = useState('');
    const [currentQuantity, setCurrentQuantity] = useState('');
    const buttons = ['AC', 'DEL', '!', '√', 7, 8, 9, 'x', 4, 5, 6, '-', 3, 2, 1, '+', '.', 0, '/','^','+/-','Log','In','=']  

    const getFactorial = numero =>{
            if (numero < 0) numero = numero * -1;
            if (numero <= 0) return 1;
            let factorial = 1;
            while (numero > 1) {
                factorial = factorial * numero;
                numero--;
            }
            return factorial;
    }

    const getLog = (n1, n2) => {
        let result;
        if(n2 > 0)
        {
            if(Number.isNaN(n1))
            {
                    result = Math.log10(n2);
                    return result
            }
            else{
                result = n1 * Math.log10(n2);
                    return result
            }
        }
        else{
            return "-∞"
        }
        

    }

    const getLogNatural = (n1, n2) => {
        let result;
        if(n2 > 0)
        {
            if(Number.isNaN(n1))
            {
                    result = Math.log(n2);
                    return result
            }
            else{
                result = n1 * Math.log(n2);
                    return result
            }
        }
        else{
            return "-∞"
        }
        

    }

    const Calcular = () => {
        const splitNumbers = currentQuantity.split(' ')
        const fistNumber = parseFloat(splitNumbers[0])
        const lastNumber = parseFloat(splitNumbers[2])
        const operator = splitNumbers[1];

        try {
            switch (operator){
                case '+':
                    setCurrentQuantity((fistNumber + lastNumber).toString());
                    return
                case '-': 
                    setCurrentQuantity((fistNumber - lastNumber).toString())
                    return
                case 'x':
                    setCurrentQuantity((fistNumber * lastNumber).toString())
                    return
                case '/':
                    if(fistNumber !== 0 & lastNumber !== 0)
                    {
                    setCurrentQuantity((fistNumber / lastNumber).toString())
                    
                    return
                    }
                    else if(fistNumber === 0 && lastNumber !== 0)
                    {
                        setCurrentQuantity((fistNumber / lastNumber).toString())
                        return
                    }
                    else if(fistNumber !== 0 && lastNumber === 0)
                    {
                        setCurrentQuantity("+∞");
                        return
                    }
                    else{
                        setCurrentQuantity("NaN");
                        return
                    }

                case '√': 
                    if(Number.isNaN(fistNumber))
                    {
                        setCurrentQuantity((Math.sqrt(lastNumber)).toString())
                        return
                    }
                    else{
                        setCurrentQuantity((fistNumber * Math.sqrt(lastNumber)).toString())
                        return
                    }

                case '!':
                    if(Number.isInteger(fistNumber))
                    {
                        setCurrentQuantity(getFactorial(fistNumber).toString())
                        return
                    }
                    else{
                        setCurrentQuantity("");
                        return
                    }
                case '^':
                    if((fistNumber !== 0 && lastNumber !== 0) || (fistNumber !== 0 && lastNumber === 0) || (fistNumber === 0 && lastNumber !== 0))
                    {
                        setCurrentQuantity((Math.pow(fistNumber, lastNumber).toString()))
                        return
                    }
                    else{
                        setCurrentQuantity("NaN");
                        return
                    }
                case 'Log':
                        setCurrentQuantity(getLog(fistNumber, lastNumber).toString());
                        return;
                case 'In':
                        setCurrentQuantity(getLogNatural(fistNumber, lastNumber).toString());
                        return;

            }

        } catch (error) {
            console.log(error);
        }


    }

    const handleSign = () =>{

        const splitNumbers = currentQuantity.split(' ')
        const fistNumber = parseFloat(splitNumbers[0])
        const lastNumber = parseFloat(splitNumbers[2])
        const operator = splitNumbers[1];
        let tempN1 = 0 ;
        let tempN2 = 0 ;

        if(Number.isNaN(lastNumber) & !Number.isNaN(fistNumber) )
        {
           if(typeof(operator) == 'undefined')
           {
            tempN1 = fistNumber * -1;
            setCurrentQuantity(tempN1 )
            return
           }
           else{
            tempN1 = fistNumber * -1;
            setCurrentQuantity(tempN1 + " " + operator)
            return
           }
        }
        else if(!Number.isNaN(fistNumber) & !Number.isNaN(lastNumber))
        {
            tempN1 = fistNumber * -1;
            tempN2 = lastNumber * -1;
            setCurrentQuantity(tempN1 + " " + operator + " " + tempN2);
            return
        }
        
    }

    const handleButton = (buttonPressed) =>{

        try {
            if(buttonPressed === '+' | buttonPressed === "-" | buttonPressed === "x" | buttonPressed === "/"  | buttonPressed === "√" | buttonPressed === "!"
        | buttonPressed === "^" | buttonPressed === "In" | buttonPressed === "Log"){
            setCurrentQuantity(currentQuantity + " " + buttonPressed + " ")
            return
          }

        switch(buttonPressed){
            case 'DEL':
                setCurrentQuantity(currentQuantity.substring(0, (currentQuantity.length - 1)))
                if(currentQuantity == "NaN"){setCurrentQuantity("")} else if(currentQuantity == "-∞" | currentQuantity == "+∞"){setCurrentQuantity("")}
                return
            case 'AC':
                setLastQuantity("")
                setCurrentQuantity("")
                return
            case '=':
                setLastQuantity(currentQuantity + " = ")
                Calcular()
                return
            case '+/-':
                handleSign();
                return
        }
        } catch (error) {
            console.log(error);
        }

        setCurrentQuantity(currentQuantity + buttonPressed)
    } 
     
    return (
        <View>

            <View style={CalculatorStyles.results}>
            <Text style={CalculatorStyles.lastTextResult}>{lastQuantity}</Text>
            <Text style={CalculatorStyles.textResult}>{ currentQuantity ==='' ? '' : currentQuantity}</Text>
            </View>
            <View style={CalculatorStyles.buttons}>

            {buttons.map((button) =>
            button === '=' ?
                <TouchableOpacity onPress={() => handleButton(button)} key={button} style={CalculatorStyles.buttonEquals}>
                <Text style={CalculatorStyles.textButton}>{button}</Text>
                </TouchableOpacity>
            
            : button === 'AC' ?
                <TouchableOpacity onPress={() => handleButton(button)} key={button} style={CalculatorStyles.buttonAC}>
                <Text style={CalculatorStyles.textButtonAC}>{button}</Text>
                </TouchableOpacity>
            : button === 'DEL' ?
                <TouchableOpacity onPress={() => handleButton(button)} key={button} style={CalculatorStyles.buttonDEL}>
                <Text style={CalculatorStyles.textButtonAC}>{button}</Text>
                </TouchableOpacity>
            : (typeof(button) !== 'number') ?
                <TouchableOpacity onPress={() => handleButton(button)} key={button} style={CalculatorStyles.buttonsFunction}>
                <Text style={CalculatorStyles.textButton}>{button}</Text>
                </TouchableOpacity>
            : 
                <TouchableOpacity onPress={() => handleButton(button)} key={button} style={CalculatorStyles.button}>
                <Text style={CalculatorStyles.textButton}>{button}</Text>
                </TouchableOpacity>
            )}
            </View>
        </View>
    );
}