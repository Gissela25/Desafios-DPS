import { StyleSheet } from "react-native";

const CalculatorStyles = StyleSheet.create({
    buttons:{
        flexDirection:'row',
        flexWrap:'wrap'
    },
    button: {
        borderWidth: 1.5,
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: 90, 
        minHeight: 90,
        flex: 2,
        backgroundColor:'#8ecae6',
        borderColor:'#3d405b'
      },
    results:{
        width:'100%',
        minHeight: 160,
        alignItems: 'flex-end',
        justifyContent: 'flex-end'
    },
    lastTextResult:{
        color:'#979792',
        marginRight:15,
        fontSize:20,
        alignSelf:'flex-end'
    },
    textResult:{
        margin:10,
        marginRight:20,
        fontSize:40
    },
    buttonEquals:{
        borderWidth: 1.5,
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: 90, 
        minHeight: 90,
        flex: 2,
        backgroundColor:'#FECD70',
        borderColor:'#3d405b'
    },
    buttonsFunction:{
        borderWidth: 1.5,
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: 90, 
        minHeight: 90,
        flex: 2,
        backgroundColor:'#61a5c2',
        borderColor:'#3d405b' 
    },
    textButton:{
        fontWeight:'bold',
        fontSize:20
    },
    buttonAC:{
        borderWidth: 1.5,
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: 90, 
        minHeight: 90,
        flex: 2,
        backgroundColor:'#ae2012',
        borderColor:'#3d405b'
    },
    textButtonAC:{
        fontWeight:'bold',
        fontSize:20,
        color:'#ffffff'
    },
    buttonDEL:{
        borderWidth: 1.5,
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: 90, 
        minHeight: 90,
        flex: 2,
        backgroundColor:'#e36414',
        borderColor:'#3d405b'
    },
})

export default CalculatorStyles