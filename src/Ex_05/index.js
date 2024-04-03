import {View, Text, Pressable, TextInput} from 'react-native';
import styles from './styles';

export default function Exemplo_05(){
    return(
        <View style={styles.container}>
            <Text style={styles.txtSaida}>Exemplo_05</Text>
            <Text style={styles.txtSaida}>Calculadora Básica </Text>
            <Text style={styles.txtSaida}>1° Número</Text>
            <TextInput style={styles.txtEntrada}></TextInput>
            <Text style={styles.txtSaida}>+</Text>

            <Text style={styles.txtSaida}>1° Número</Text>
            <TextInput style={styles.txtEntrada}></TextInput>
            <Text style={styles.txtSaida}>=</Text>

            <Text style={styles.txtSaida}>Total</Text>
            <TextInput style={styles.txtEntrada}></TextInput>

            <Pressable/>
        </View>
    );
}