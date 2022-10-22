import React, { useEffect, useState } from 'react';
import { View, Text, Pressable, TouchableOpacity, Alert, Image } from 'react-native';
import {TextInput} from 'react-native-paper'
import Form from './components/Form';
import CoinStyles from './styles/CoinStyles';
export default function Coin({navigation}) {

    const[coin, setCoin] = useState('');
    const[quantity, setQuantity] = useState('');
    const[convert, setConvert] = useState('');
    const[error, setError]=useState('');
    let regexNum = /^[0-9]{0,}[.]?[0-9]{0,}?$/gm;
    let regexString = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü$#!?¡¿,\s.0-9]+$/gm;
        useEffect(() => {
            try {
                const tempQ = parseFloat(quantity);
                let tempR = 0;
                setError('')
                if(Number.isNaN(tempQ))
                {
                    setConvert("");
    
                    if(regexString.test(quantity))
                    {
                        setError("Debes ingresar solamente números")
                    }else if(quantity !== "" && !regexString.test(quantity)){
                        setError("Debes ingresar solamente números")
                    }
    
                }
                else{
    
                    if(regexNum.test(quantity)){
                        if(typeof(tempQ)==='number')
                    {
                        switch (coin) {
                            case 'svc':
                                tempR = Number.parseFloat(tempQ * 8.75 ).toFixed(2)
                                setConvert(tempR + " ₡" );
                                return
                            case 'mxn':
                                tempR = Number.parseFloat(tempQ * 21.46 ).toFixed(2)
                                setConvert(tempR + " $")
                                return
                            case 'eur':
                                tempR = Number.parseFloat(tempQ * 0.86 ).toFixed(2)
                                setConvert(tempR + " €")
                                return
                            case 'gbp':
                                tempR = Number.parseFloat(tempQ * 0.78 ).toFixed(2)
                                setConvert(tempR + " £")
                                return
                            case 'chf':
                                tempR = Number.parseFloat(tempQ * 0.92 ).toFixed(2)
                                setConvert(tempR + " Fr")
                                return
                            case 'jpy':
                                tempR = Number.parseFloat(tempQ * 150.25 ).toFixed(2)
                                setConvert(tempR + " ¥")
                                return
                        }
                    }
                    }
                    else{
                        setError("Ah pillín, no estás ingresando números")
                    }
                   
    
                }
            } catch (error) {
                console.log(error);
            }
        
        }, [coin, quantity])
        
    
    
    return (
        <View>
        <Text style={CoinStyles.textError}>{error}</Text>
        <TextInput value={quantity} keyboardType='numeric' style={CoinStyles.textInputStyles} label="Cantidad" theme='#FFFF64' onChange={(number)=>setQuantity(number.nativeEvent.text)} />
            <Form 
            setCoin={setCoin} 
            coin={coin}  
            />
      
        <Text style={CoinStyles.textResult}>{(convert)}</Text>
        </View>
    );
}