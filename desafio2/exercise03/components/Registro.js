import React from 'react'
import { Text, View, StyleSheet, Pressable } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

const Registro = ({ item, setModalVisible, registroEditar, registroEliminar,setModalFactura, setRegistro }) => {
    const { cantidad, producto, precio, id } = item
    return (
            <View style={styles.conteiner}>
            <Pressable style={styles.ticket}
            onLongPress={() => {
                setModalFactura(true)
                setRegistro(item)
            }}
            >
                <Text style={styles.texticket}>Factura</Text>
            </Pressable>
                <Text style={styles.name}>Nombre del Producto:</Text>
                <Text style={styles.product}>{producto}</Text>
                <Text style={styles.name}>Cantidad del Producto:</Text>
                <Text style={styles.product}>{cantidad}</Text>
                <Text style={styles.name}>Precio Unitario:</Text>
                <Text style={styles.product}>{precio}</Text>
                <View style={styles.buttoncontainer}>
                    <Pressable style={styles.buttonedit}
                    onLongPress={()=> {
                        setModalVisible(true)
                        registroEditar(id)
                    }}>
                        <Text style={styles.textbutton}>Editar</Text>
                    </Pressable>
                    <Pressable style={styles.buttondelete}
                    onLongPress={ () => registroEliminar(id)}
                    >
                        <Text style={styles.textbutton}>Eliminar</Text>
                    </Pressable>
                </View>
            </View>

    )
}

const styles = StyleSheet.create({
    conteiner: {
        backgroundColor: '#495464',
        padding: 20,
        borderRadius: 20,
        marginBottom: 10
    },
    product: {
        color: '#FECD70',
        fontSize: 18,
        fontWeight: '400',
        marginBottom: 5
    },
    report: {
        color: '#FFAE6D',
        fontWeight: '700',
        textAlign: 'center',
        fontSize: 22,
        textTransform: 'uppercase'
    },
    name: {
        color: '#FFAE6D',
        fontSize: 20,
        fontWeight: '700',
    },
    buttoncontainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:10
    },
    buttondelete:{
        backgroundColor:'#E3C770',
        paddingVertical:5,
        paddingHorizontal:10,
        borderRadius:5,
    },
    textbutton:{
        fontWeight:'600'
    },
    buttonedit:{
        backgroundColor:'#FFAE6D',
        paddingVertical:5,
        paddingHorizontal:10,
        borderRadius:5,
    },
    ticket:{
        padding:10,
        backgroundColor:'#F3E0B5',
        borderRadius:10,
        marginBottom:7,
        marginHorizontal:40
    },
    texticket:{
        textAlign:'center',
        fontWeight:'700',
        fontSize:16
    }
})

export default Registro
