import React from 'react'
import { Text, View, StyleSheet, Pressable } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import ShopStyle from '../styles/ShopStyle'

const Registro = ({ item, setModalVisible, registroEditar, registroEliminar,setModalFactura, setRegistro }) => {
    const { cantidad, producto, precio, id } = item

    return (
            <View style={ShopStyle.conteiner2}>
            <Pressable style={ShopStyle.ticket2}
            onLongPress={() => {
                setModalFactura(true)
                setRegistro(item)
            }}
            >
                <Text style={ShopStyle.texticket2}>Factura</Text>
            </Pressable>
                <Text style={ShopStyle.name2}>Nombre del Producto:</Text>
                <Text style={ShopStyle.product2}>{producto}</Text>
                <Text style={ShopStyle.name2}>Cantidad del Producto:</Text>
                <Text style={ShopStyle.product2}>{cantidad}</Text>
                <Text style={ShopStyle.name2}>Precio Unitario:</Text>
                <Text style={ShopStyle.product2}>${precio}</Text>
                <View style={ShopStyle.buttoncontainer2}>
                    <Pressable style={ShopStyle.buttonedit2}
                    onLongPress={()=> {
                        setModalVisible(true)
                        registroEditar(id)
                    }}>
                        <Text style={ShopStyle.textbutton2}>Editar</Text>
                    </Pressable>
                    <Pressable style={ShopStyle.buttondelete2}
                    onLongPress={ () => registroEliminar(id)}
                    >
                        <Text style={ShopStyle.textbutton2}>Eliminar</Text>
                    </Pressable>
                </View>
            </View>

    )
}
export default Registro
