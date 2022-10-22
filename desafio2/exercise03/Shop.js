import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Pressable, Modal, FlatList, Alert } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Formulario from './components/Formulario';
import Registro from './components/Registro';
import Factura from './components/Factura';

export default function Shop({ navigation }) {

    const [modalVisible, setModalVisible] = useState(false)
    const [registros, setRegistros] = useState([])
    const [registro, setRegistro] = useState({})
    const [modalfactura, setModalFactura] = useState(false)
    
  const cerrarModal = () => {
    setModalVisible(false)
  }

    const registroEditar = id => {
        const registroEditar = registros.filter(registro => registro.id === id)
        setRegistro(registroEditar[0])
    }

    const registroEliminar = id => {
        Alert.alert(
            '¿Deseas eliminar este Registro?',
            'Al eliminar el registro no sera posible recuperarlo',
            [
                { text: 'Cancelar' },
                {
                    text: 'Eliminar', onPress: () => {
                        const registrosactualizados = registros.filter(registosState => registosState.id !== id)
                        setRegistros(registrosactualizados)
                    }
                }
            ]
        )
    }

    return (
        <View>
            <Text style={styles.title}>Registro de Compras</Text>
            <Pressable
                onPress={() => setModalVisible(!modalVisible)}
                style={styles.button}
            >
                <Text style={styles.buttonText}>Nuevo Registro</Text>
            </Pressable>

            {registros.length === 0 ? <Text style={styles.No}>No existen registros aun</Text> :
                <FlatList style={styles.list}
                    data={registros}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => {
                        return (
                            <Registro
                                item={item}
                                setModalVisible={setModalVisible}
                                registroEditar={registroEditar}
                                registroEliminar={registroEliminar}
                                setModalFactura={setModalFactura}
                                setRegistro={setRegistro}
                            />
                        )
                    }}
                />

            }

            {modalVisible && (
                <Formulario
                    cerrarModal={cerrarModal}
                    setRegistros={setRegistros}
                    registros={registros}
                    registro={registro}
                    setRegistro={setRegistro}
                />
            )}

            <Modal
                visible={modalfactura}
                animationType='fade'
            >
                <Factura
                    registro={registro}
                    setModalFactura={setModalFactura}
                    setRegistro={setRegistro}
                />
            </Modal>
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
    },
    No: {
        marginTop: 40,
        textAlign: 'center',
        fontWeight: '600',
        fontSize: 20
    },
    list: {
        marginTop: 50,
        marginHorizontal: 40,
    }
})