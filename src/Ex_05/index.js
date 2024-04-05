import {View, Text, Pressable, TextInput} from 'react-native';
import styles from './styles';
import { useState } from 'react';

export default function Exemplo_05(){

    const [n1, setN1] = useState(0);
    const [n2, setN2] = useState(0);
    const [total, setTotal] = useState(0);

    function Soma(){
        setTotal(Number(n1) + Number(n2));
    }
    function Subtrair(){
        setTotal(Number(n1)- Number(n2));
    }
    function Multiplicar(){
        setTotal(Number(n1) * Number(n2));
    }
    function Dividir(){
        setTotal(Number(n1) / Number(n2));
    }
    function Zerar(){
        setN1(0);
        setN2(0);
        setTotal(0);
    }
    return(
        <View style={styles.container}>
            <Text style={styles.paragrafo}>Exemplo_05</Text>

            <Text style={styles.txtSaida}>Calculadora Básica </Text>

            <Text style={styles.txtLabel}>1° Número</Text>
            <TextInput 
            style={styles.txtEntrada}
            onChangeText={(entrada) => setN1(entrada)}
            value={n1}
            />
                

            <Text style={styles.txtSaida}>+</Text>

            <Text style={styles.txtLabel}>2° Número</Text>
            <TextInput 
             style={styles.txtEntrada}
             onChangeText={(entrada) => setN2(entrada)}
             value={n2}
            />

            <Text style={[styles.txtSaida, {margin: 0}]}> = </Text>

            <Text style={styles.txtLabel}>Total</Text>
            <TextInput 
            style={styles.txtEntrada}
            editable={false}
            value={total}
            />

                <View style={styles.teste}>
                    <Pressable 
                    style={styles.botao}
                    onPress={() => Soma()}
                    >
                    <Text style={styles.txtBotao}> + </Text>
                    </Pressable>

                    <Pressable 
                    style={styles.botao}
                    onPress={() => Subtrair()}
                    >
                    <Text style={styles.txtBotao}> - </Text>
                    </Pressable>

                    <Pressable 
                    style={styles.botao}
                    onPress={() => Multiplicar()}
                    >
                    <Text style={styles.txtBotao}> * </Text>
                    </Pressable>

                    <Pressable 
                    style={styles.botao}
                    onPress={() => Dividir()}
                    >
                    <Text style={styles.txtBotao}> / </Text>
                    </Pressable>
                
            </View>
            <View>
            <Pressable 
            style={styles.zerar}
            onPress={() => Zerar()}
            >
                    <Text style={styles.txtBotao}> Zerar </Text>
                    </Pressable>
            </View>
        </View>
    );
}