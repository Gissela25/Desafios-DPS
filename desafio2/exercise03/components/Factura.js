import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, Pressable, TextInput } from 'react-native'
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
        <View style={styles.container}>
            <Text style={styles.title}>Factura</Text>
            <View style={styles.box}>
                <Text style={styles.text1}>Nombre del Producto:</Text>
                <Text style={styles.text}>{registro.producto}</Text>
                <Text style={styles.text1}>Cantidad del Producto:</Text>
                <Text style={styles.text}>{registro.cantidad}</Text>
                <Text style={styles.text1}>Precio Unitario:</Text>
                <Text style={styles.text}>${registro.precio}</Text>
                <Text style={styles.text1}>Total Sin descuento:</Text>
                <Text style={styles.text}>${Total}</Text>
                <Text style={styles.text1}>Porcentaja de Descuento:</Text>
                <Text style={styles.text}>{porc}%</Text>
                <Text style={styles.text1}>Descuento:</Text>
                <Text style={styles.text}>${descuento}</Text>
                <Text style={styles.text1}>Total:</Text>
                <Text style={styles.text}>${Totalr}</Text>
            </View>
            <Pressable
                style={styles.button}
                onLongPress={() => {
                    setModalFactura(false)
                    setRegistro({})
                }}
            >
                <Text style={styles.textbutton}>Cerrar</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FECD70',
        flex: 1
    },
    title: {
        textAlign: 'center',
        fontSize: 25,
        fontWeight: '800'
    },
    text: {
        marginHorizontal: 40,
        fontSize: 20,
        fontWeight: '500',
        color: '#495464',
        marginVertical: 8
    },
    button: {
        backgroundColor: '#E8E8E8',
        padding: 10,
        marginHorizontal: 40,
        marginBottom: 5,
        marginTop: 10,
        borderRadius: 20
    },
    textbutton: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '700'
    },
    box: {
        backgroundColor: '#FFF',
        marginHorizontal: 20,
        marginVertical: 20,
        borderRadius: 20,
    },
    text1: {
        marginHorizontal: 40,
        fontSize: 22,
        fontWeight: '700',
        marginTop: 10,
    }
})

export default Factura