import {Picker} from '@react-native-picker/picker';
import { useEffect } from 'react';
import CoinStyles from '../styles/CoinStyles';

const Form = ({coin, setCoin}) => {
    
    return(
        <>
            <Picker
            style={CoinStyles.itemsPicker}
            selectedValue={coin}
            onValueChange={coin => setCoin(coin)}>
                <Picker.Item label='- - Seleccione la moneada de conversión - -'  value=" "/>
                <Picker.Item label='Colón (SVC) - ₡'  value="svc"/>
                <Picker.Item label='Peso (MXN) - $'  value="mxn"/>
                <Picker.Item label='Euro (EUR) - €'  value="eur"/>
                <Picker.Item label='Libra Esterlina (GBP) - £'  value="gbp"/>
                <Picker.Item label='Franco Suizo (CHF) - Fr'  value="chf"/>
                <Picker.Item label='Yen Japonés (JPY) - ¥'  value="jpy"/>
            </Picker>
        </>
    );
}

export default Form
