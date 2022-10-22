import React, { useState, useEffect } from 'react'
import { Modal, Text, StyleSheet, View, TextInput, ScrollView, Pressable, Alert } from 'react-native'

const Formulario = ({ modalVisible, setRegistros, registros, registro, setRegistro, cerrarModal }) => {
    const [producto, setProducto] = useState('')
    const [id, setId] = useState('')
    const [cantidad, setCantidad] = useState('')
    const [precio, setPrecio] = useState('')
   
    useEffect(() => {
        if (Object.keys(registro).length > 0) {
            setId(registro.id)
            setProducto(registro.producto)
            setCantidad(registro.cantidad)
            setPrecio(registro.precio)
        }
    }, [registro])

    const handleRegistro = () => {
        if ([producto, cantidad, precio].includes('')) {
            //console.log('Todos los campos deben estar completos')
            Alert.alert(
                'Error',
                'Todos los campos son obligatorios',
            )
            return
        }

        const nuevoRegistro = {
            producto,
            precio,
            cantidad
        }

        if (id) {
            //Editando
            nuevoRegistro.id = id
            const registrosactualizados = registros.map(registroState =>
                registroState.id === nuevoRegistro.id ? nuevoRegistro :
                    registroState)

            setRegistros(registrosactualizados)
            setRegistro({})
        }
        else {
            //Nuevo
            nuevoRegistro.id = Date.now()
            setRegistros([...registros, nuevoRegistro])
        }

        cerrarModal()
        setId('')
        setProducto('')
        setPrecio('')
        setCantidad('')
    }
    return (
        <Modal
            animationType='slide'
            visible={modalVisible}>
            <View style={styles.container}>
                <Text style={styles.title}>{registro.id ? 'Editar' : 'Nueva'} {''}
                    <Text>Registro</Text></Text>
                <Pressable
                    onLongPress={() => {
                        cerrarModal()
                        setRegistro({})
                        setId('')
                        setProducto('')
                        setPrecio('')
                        setCantidad('')
                    }}
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
                        style={styles.input}
                        keyboardType='numeric'
                        placeholder='Precio Unitario'
                        placeholderTextColor={'#666'}
                        value={precio}
                        onChangeText={setPrecio}
                    />
                </View>
                <Pressable style={styles.buttonnew}
                    onPress={handleRegistro}
                >
                    <Text style={styles.textnew}>{registro.id ? 'Editar' : 'Nueva'} Registro</Text>
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
    buttonnew: {
        marginVertical: 50,
        backgroundColor: '#CFD2CF',
        padding: 20,
        borderRadius: 20,
        marginHorizontal: 30
    },
    textnew: {
        textAlign: 'center',
        fontWeight: '800',
        fontSize: 18
    }
})

export default Formulario