import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, Pressable, TextInput } from 'react-native'
import ShopStyle from '../styles/ShopStyle'
import { color } from 'react-native-reanimated'

const Factura = ({ registro, setModalFactura, setRegistro }) => {

    const [desc, setdesc] = useState(0)
    const can = registro.cantidad
    const pre = registro.precio
    const Total = can * pre

    useEffect(() => {
        if (registro.cantidad >= 15 && registro.cantidad <= 49) {
            setdesc(0.05)
        } else if (registro.cantidad >= 50 && registro.cantidad <= 79) {
            setdesc(0.13)
        } else if (registro.cantidad >= 80) {
            setdesc(0.25)
        } else {
            setdesc(0)
        }
    }, [registro.cantidad]);

    const porc = desc * 100
    const descuento = desc * Total
    const Totalr = Total - descuento

    return (
        <View style={ShopStyle.container3}>
            <Text style={ShopStyle.title3}>Factura</Text>
            <View style={ShopStyle.box3}>
                <Text style={ShopStyle.text13}>Nombre del Producto:</Text>
                <Text style={ShopStyle.text3}>{registro.producto}</Text>
                <Text style={ShopStyle.text13}>Cantidad del Producto:</Text>
                <Text style={ShopStyle.text3}>{registro.cantidad}</Text>
                <Text style={ShopStyle.text13}>Precio Unitario:</Text>
                <Text style={ShopStyle.text3}>${registro.precio}</Text>
                <Text style={ShopStyle.text13}>Total Sin descuento:</Text>
                <Text style={ShopStyle.text3}>${Total}</Text>
                <Text style={ShopStyle.text13}>Porcentaja de Descuento:</Text>
                <Text style={ShopStyle.text3}>{porc}%</Text>
                <Text style={ShopStyle.text13}>Descuento:</Text>
                <Text style={ShopStyle.text3}>${descuento}</Text>
                <Text style={ShopStyle.text13}>Total:</Text>
                <Text style={ShopStyle.text3}>${Totalr}</Text>
            </View>
            <Pressable
                style={ShopStyle.button3}
                onLongPress={() => {
                    setModalFactura(false)
                    setRegistro({})
                }}
            >
                <Text style={ShopStyle.textbutton3}>Cerrar</Text>
            </Pressable>
        </View>
    )
}
export default Factura