import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, Pressable, TextInput } from 'react-native'
import { color } from 'react-native-reanimated'

const Factura = ({ registro, setModalFactura,setRegistro }) => {

    const can = registro.cantidad
    const pre = registro.precio
    const Total = can * pre
    const descuento = 0;

    

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Factura</Text>
            <Pressable
                style={styles.button}
                onLongPress={() => {
                        setModalFactura(false)
                        setRegistro({})
                    }}
            >
                <Text style={styles.textbutton}>Cerrar</Text>
            </Pressable>
            <View style={styles.box}>
                <Text style={styles.text1}>Nombre del Producto:</Text>
                <Text style={styles.text}>{registro.producto}</Text>
                <Text style={styles.text1}>Cantidad del Producto:</Text>
                <Text style={styles.text}>{registro.cantidad}</Text>
                <Text style={styles.text1}>Precio Unitario:</Text>
                <Text style={styles.text}>${registro.precio}</Text>
                <Text style={styles.text1}>Total Sin descuentos:</Text>
                <Text style={styles.text}>${Total}</Text>
                <Text style={styles.text1}>Porcentaja de Descuento:</Text>
                <Text style={styles.text1}>Descuento:</Text>
                <Text style={styles.text1}>Total:</Text>
            </View>


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
        color: '#495464'
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
        marginTop: 10
    }
})

export default Factura