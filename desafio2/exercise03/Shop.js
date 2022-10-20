import React,{useState} from 'react';
import { View, Text, StyleSheet, Button, Pressable, Modal } from 'react-native';
import Formulario from './components/Formulario';

export default function Shop({ navigation }) {

    const [modalVisible, setModalVisible] = useState(false)
    return (
        <View>
            <Text style={styles.title}>Registro de Compras</Text>
            <Pressable
                onPress={()=>setModalVisible(!modalVisible)}
                style={styles.button}
            >
                <Text style={styles.buttonText}>Nuevo Registro</Text>
            </Pressable>
            <Formulario
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    conteiner: {
        flex: 1
    },
    title: {
        textAlign: 'center',
        marginTop: 10,
        fontSize: 20,
        fontWeight: '600',
    },
    button: {
        backgroundColor: '#FECD70',
        padding: 12,
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 20,
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '900',
    }
})