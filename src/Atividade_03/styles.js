import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#f5f5f5',
        width: '100%',
        alignItems: 'center',
        padding:8,
        borderRadius:20,
    },
    View:{
        padding:8,
        flexDirection:'row',
        width:'30%',
        justifyContent:'center',
        alignItems:'center',
        // borderRadius:30,
        borderWidth:10,
 
    },

    titulo:{
        fontSize:30,
        fontWeight:'bold',
        margin:8,
        marginBottom:20,
        color: 'gray',
    },
    valor:{
        fontSize:30,
        fontWeight:'bold',
        margin:8,
        marginBottom:20,
        color:'black',
    },

    botao:{
        width:'70%',
        padding:16,
        backgroundColor: 'gray',
        color: '#f5f5f5',
        fontSize:20,
        alignItems:'center',
        borderRadius:20,
        marginTop:20,

    },
    txtbotao:{
        color:'#f5f5f5',
        fontSize:20,
        padding:8

    },
})
export default styles;