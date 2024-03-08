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

    titulo:{
        fontSize:30,
        fontWeight:'bold',
        margin:8,
        marginBottom:20,
    },

    botao:{
        width:'70%',
        padding:16,
        backgroundColor: '#000',
        color: '#f5f5f5',
        fontSize:20,
        alignItems:'center',
        borderRadius:20,

    },
    txtbotao:{
        color:'#f5f5f5',
        fontSize:20,
    }
})
export default styles;