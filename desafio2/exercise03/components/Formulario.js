import React, { useState } from 'react'
import { Modal, Text, StyleSheet, View, TextInput, ScrollView, Pressable } from 'react-native'

const Formulario = ({ modalVisible, setModalVisible }) => {
    const [producto, setProducto] = useState('')
    const [cantidad, setCantidad] = useState('')
    const [precio, setPrecio] = useState('')
    return (
        <Modal
            animationType='slide'
            visible={modalVisible}>
            <View style={styles.container}>
                <Text style={styles.title}>Nuevo {''}
                    <Text>Registro</Text></Text>
                <Pressable
                    onLongPress={() => setModalVisible(!modalVisible)}
                    style={styles.buttoncancelar}>
                    <Text style={styles.textcancelar}>Cancelar</Text>
                </Pressable>
                <View style={styles.box}>
                    <Text style={styles.label}>Nombre</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Nombre Producto'
                        placeholderTextColor={'#666'}
                        value={producto}
                        onChangeText={setProducto}
                    />
                </View>
                <View style={styles.box}>
                    <Text style={styles.label}>Cantidad</Text>
                    <TextInput
                        style={styles.input}
                        keyboardType='numeric'
                        placeholder='Cantidad del Producto'
                        placeholderTextColor={'#666'}
                        value={cantidad}
                        onChangeText={setCantidad}
                    />
                </View>
                <View style={styles.box}>
                    <Text style={styles.label}>Precio Unitario</Text>
                    <TextInput
                        keyboardType='decimal-pad'
                        style={styles.input}
                        placeholder='Precio Unitario'
                        placeholderTextColor={'#666'}
                        value={precio}
                        onChange={setPrecio}
                    />
                </View>
                <Pressable style={styles.buttonnew}>
                    <Text style={styles.textnew}>Agregar Registro</Text>
                </Pressable>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        marginTop: 10,
        fontSize: 30,
        fontWeight: '600',
    },
    container: {
        backgroundColor: '#FECD70',
        flex: 1
    },
    box: {
        marginTop: 10,
        marginHorizontal: 30,
    },
    label: {
        fontWeight: '600',
        fontSize: 20,
        marginBottom: 10,
        marginTop: 15,
    },
    input: {
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 20,
    },
    buttoncancelar: {
        marginTop: 20,
        marginHorizontal: 35,
        backgroundColor: '#B4CDE6',
        borderRadius: 20,
        padding: 14,
    },
    textcancelar: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '600'
    },
    buttonnew:{
        marginVertical:50,
        backgroundColor:'#CFD2CF',
        padding:20,
        borderRadius:20,
        marginHorizontal:30
    },
    textnew:{
        textAlign:'center',
        fontWeight:'800',
        fontSize:18
    }
})

export default Formulario