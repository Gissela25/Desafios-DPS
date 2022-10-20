import React, { useState, useEffect } from 'react';
import { View, Text, Pressable, Button, TextInput } from 'react-native';


export default function Calculator({navigation}) {
    
    const [quantity, setQuantity] = useState('');
    const [quantitySecond, setQuantitySecond] = useState('');
    const [action, setAction] = useState('');
    const [result, setResult] = useState('');

    const getFavtorial = numero =>{
            if (numero < 0) numero = numero * -1;
            if (numero <= 0) return 1;
            let factorial = 1;
            while (numero > 1) {
                factorial = factorial * numero;
                numero--;
            }
            return factorial;
    }


    useEffect(() => {
        if(action === '+')
        {
            operacion =  parseFloat(quantity) + parseFloat(quantitySecond);
            setResult(operacion)
        }
        else if(action === '-')
        {
            operacion =  parseFloat(quantity) - parseFloat(quantitySecond);
            setResult(operacion)
        }
        else if(action === 'x')
        {
            operacion =  quantity * quantitySecond;
            setResult(operacion)
        }
        else if(action === '/')
        {
            operacion =  parseFloat(quantity) / parseFloat(quantitySecond);
            setResult(operacion)
        }
        else if(action === '√')
        {
            if(quantity === '')
            {
                operacion =  Math.sqrt(quantitySecond);
                setResult(operacion)
            }else{
                operacion =  quantity * Math.sqrt(quantitySecond);
                setResult(operacion)
                
            }    
        }
        else if(action === '!')
        {
                setResult(getFavtorial(quantity));
        }
        else{
            setResult('')
        }

    }, [action])
     

    return (
        <View>

            <TextInput keyboardType='numeric'
             onChange={(e) => setQuantity(e.nativeEvent.text)} />
            <TextInput keyboardType='numeric'
             onChange={(e) => setQuantitySecond(e.nativeEvent.text)} />

            <Text>{quantity} {action} {quantitySecond} { result ==='' ? '' : " = " + result}</Text>

            <Pressable onPress={()=>{setAction('+')}}><Text>+</Text></Pressable>
            <Pressable onPress={()=>{setAction('-')}}><Text>-</Text></Pressable>
            <Pressable onPress={()=>{setAction('x')}}><Text>x</Text></Pressable>
            <Pressable onPress={()=>{setAction('/')}}><Text>/</Text></Pressable>
            <Pressable onPress={()=>{setAction('√')}}><Text>√</Text></Pressable>
            <Pressable onPress={()=>{setAction('!')}}><Text>!</Text></Pressable>

        </View>
    );
}