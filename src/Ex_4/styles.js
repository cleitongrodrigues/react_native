import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#ffcdd2',
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        borderRadius:20,
    },
    titulo:{
        fontSize:30,
        fontWeight: 'bold',
        color:'#b71c1c',
    },
    txtSaida:{
        margin: 20,
        fontSize: 25,
        color: '#E53935'
    },
    txtEntrada:{
        borderWidth:4,
        textAlign:'center',
        fontSize:22,
        borderColor:'#b71c1c',
        height:40,
        width:'70%',
        color:'#E53935',
        borderRadius:10,
    }
});
export default styles;