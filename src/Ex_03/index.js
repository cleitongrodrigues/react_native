import React,{ useState } from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

export default function Exemplo_3(){
    const [numero, setNumero] = useState(0);

    function ola(nome){
        alert(`Olá ${nome}`);

    function incremento(){
        const inc = numero + 1;
        setNumero(inc);
            // console.log(numero);
    }
    }
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo_3</Text>

            <TouchableOpacity 
            style={styles.botao} 
            onPress={() => ola('Cleitin')}>

                <Text style={styles.txtbotao}>button</Text>

            </TouchableOpacity>

            <Text style={styles.titulo}> Valor: {numero} </Text>

            <TouchableOpacity 
            style={styles.botao} 
            onPress={() => incremento()}>

                <Text style={styles.txtbotao}>+1</Text>

            </TouchableOpacity>
        </View>
    );
};