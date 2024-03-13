import React,{ useState } from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

export default function Atividade_3(){
    const [numero, setNumero] = useState(0);

    function incremento(){
        const inc = numero + 1;
        setNumero(inc);
    }
    function decremento(){
        const dec = numero - 1;
        setNumero(dec);
    }
    function zerar(){
        const zerar = numero*0;
        setNumero(zerar);
    }
    return(
        <View style={styles.container}>
           <View style={styles.View}> 
         
            <Text style={styles.titulo}>Atividade_3</Text>

            
           
            <Text style={styles.valor}> {numero} </Text>
            <TouchableOpacity 
            
            style={styles.botao} 
            onPress={() => incremento()}
            >

                <Text style={styles.txtbotao1}>+1</Text>

               
            </TouchableOpacity>

            <TouchableOpacity 
            style={styles.botao} 
            onPress={() => decremento()}
            >

                <Text style={styles.txtbotao}>-1</Text>

               
            </TouchableOpacity>
            </View>
            <TouchableOpacity 
            style={styles.botao} 
            onPress={() => zerar()}
            >

                <Text style={styles.txtbotao}>Zerar</Text>

               
            </TouchableOpacity>
          
        </View>
    );
};