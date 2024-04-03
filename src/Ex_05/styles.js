import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#C51162', 
        justifyContent: 'center',
        padding:8,
        borderRadius: 20, 
    },
    txtSaida:{
        margin:6,
        fontSize:22,
        fontWeight:'bold',
        textAlign:'center',
        color:'#E91E63'
    },
    txtEntrada:{
        borderWidth:4,
        textAlign:'center',
        fontSize:22,
        borderColor:'#E91E63',
        height:40,
        color:'#E53935',
        borderRadius:10,
        marginTop:10,
    },
    txtLabel:{
        fontSize:16,
        fontWeight:'bold',
        color:'#C51162'
    },
}); 

export default styles;