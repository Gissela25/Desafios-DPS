import React, { useState, useEffect } from 'react'
import ShopStyle from '../styles/ShopStyle'
import { Modal, Text, StyleSheet, View, TextInput, ScrollView, Pressable, Alert } from 'react-native'

const Formulario = ({ modalVisible, setRegistros, registros, registro, setRegistro, cerrarModal }) => {
    const [producto, setProducto] = useState('')
    const [id, setId] = useState('')
    const [cantidad, setCantidad] = useState('')
    const [precio, setPrecio] = useState('')
    const [error, setError] = useState('')
    const [error2, setError2] = useState('')
    const [error3, setError3] = useState('')
    let regexFloat = /^[0-9]{0,}[.]?[0-9]{0,}?$/gm;
    let regexInt = /[0-9]+/gm;
    let regexString = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü0-9]+$/gm;

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
            if (regexInt.test(cantidad) && regexFloat.test(precio) && regexString.test(producto)) {
            nuevoRegistro.id = id
            const registrosactualizados = registros.map(registroState =>
                registroState.id === nuevoRegistro.id ? nuevoRegistro :
                    registroState)

            setRegistros(registrosactualizados)
            setRegistro({})
            cerrarModal()
            setId('')
            setProducto('')
            setPrecio('')
            setCantidad('')
            } else if (cantidad !== "" && !regexInt.test(cantidad) && precio !== "" && !regexFloat.test(precio) && producto !== "" && !regexString.test(producto)) {
                if(cantidad !== "" && !regexInt.test(cantidad)){
                 setError('Debes ingresar solo números enteros')
                }
                if(precio !== "" && !regexFloat.test(precio)){
                 setError2('Debes ingresar solo decimales o enteros')
                }
                if(!regexString.test(producto)){
                 setError3('Debes ingresar solo números y letras')
                }
                 Alert.alert(
                     'Error',
                     'Debe Ingresar el formato correcto',
                 )
                 return
             }
        }
        else {
            //Nuevo
            if (regexInt.test(cantidad) && regexFloat.test(precio) && regexString.test(producto)) {
                nuevoRegistro.id = Date.now()
                setRegistros([...registros, nuevoRegistro])
                cerrarModal()
                setId('')
                setProducto('')
                setPrecio('')
                setCantidad('')
            } else if (cantidad !== "" && !regexInt.test(cantidad) && precio !== "" && !regexFloat.test(precio) && producto !== "" && !regexString.test(producto)) {
               if(cantidad !== "" && !regexInt.test(cantidad)){
                setError('Debes ingresar solo números enteros')
               }
               if(precio !== "" && !regexFloat.test(precio)){
                setError2('Debes ingresar solo decimales o enteros')
               }
               if(!regexString.test(producto)){
                setError3('Debes ingresar solo números y letras')
               }
                Alert.alert(
                    'Error',
                    'Debe Ingresar el formato correcto',
                )
                return
            }
        }
    }
    return (
        <Modal
            animationType='slide'
            visible={modalVisible}>
            <View style={ShopStyle.container1}>
                <Text style={ShopStyle.title1}>{registro.id ? 'Editar' : 'Nueva'} {''}
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
                    style={ShopStyle.buttoncancelar1}>
                    <Text style={ShopStyle.textcancelar1}>Cancelar</Text>
                </Pressable>
                <View style={ShopStyle.box1}>
                    <Text style={ShopStyle.label1}>Nombre</Text>
                    <TextInput
                        style={ShopStyle.input1}
                        placeholder='Nombre Producto'
                        placeholderTextColor={'#666'}
                        value={producto}
                        onChangeText={setProducto}
                    />
                    <Text style={ShopStyle.error1}>{error3}</Text>
                </View>
                <View style={ShopStyle.box1}>
                    <Text style={ShopStyle.label1}>Cantidad</Text>
                    <TextInput
                        type={Number}
                        style={ShopStyle.input1}
                        keyboardType='numeric'
                        placeholder='Cantidad del Producto'
                        placeholderTextColor={'#666'}
                        value={cantidad}
                        onChangeText={setCantidad}
                    />
                    <Text style={ShopStyle.error1}>{error}</Text>
                </View>
                <View style={ShopStyle.box1}>
                    <Text style={ShopStyle.label1}>Precio Unitario</Text>
                    <TextInput
                        style={ShopStyle.input1}
                        keyboardType='numeric'
                        placeholder='Precio Unitario'
                        placeholderTextColor={'#666'}
                        value={precio}
                        onChangeText={setPrecio}
                    />
                    <Text style={ShopStyle.error1}>{error2}</Text>
                </View>
                <Pressable style={ShopStyle.buttonnew1}
                    onPress={handleRegistro}
                >
                    <Text style={ShopStyle.textnew1}>{registro.id ? 'Editar' : 'Nueva'} Registro</Text>
                </Pressable>
            </View>
        </Modal>
    )
}


export default Formulario