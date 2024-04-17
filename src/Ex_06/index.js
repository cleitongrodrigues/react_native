import { useState } from 'react';
import { Text, View, TextInput, Pressable } from 'react-native';

import styles from './styles';

export default function Exemplo_06() {

  const [massa, setMassa] = useState(0);
  const [altura, setAltura] = useState(0);
  const [resultado, setResultado] = useState(0);
  const [imc, setImc] = useState('');
  const IMC = massa / (altura * altura);
  
  function Calcular() {
    setResultado(IMC);
  }

  function Mensagem(){
    if (IMC < 18.5){
        setImc('Abaixo do Peso'); 
    }
    else if (IMC >= 18.5 && IMC <= 24.9) {
        setImc('Peso Normal'); 
    }
    else if (IMC >= 25 && IMC <= 29.9) {
        setImc('Sobrepeso'); 
    }
    else if (IMC >= 30 && IMC <= 34.9) {
        setImc('Obesidade grau 1'); 
    }
    else if (IMC >= 35 && IMC <= 39.9) {
        setImc('Obesidade grau 2'); 
    }
    else if (IMC >= 40) {
        setImc('Obesidade grau 3'); 
    }
    else {
        setImc('');
    }

  }
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}> Exemplo 6 </Text>
      <View style={styles.entradaImc}>
        <TextInput 
          placeholder='Massa' 
          placeholderTextColor='lightgray' 
          keyboardType='numeric' 
          style={styles.input} 
          onChangeText={(entrada) => setMassa(entrada)}
        />
        <TextInput 
          placeholder='Altura' 
          placeholderTextColor='lightgray' 
          keyboardType='numeric' 
          style={styles.input} 
          onChangeText={(entrada) => setAltura(entrada)}
        />
      </View> 
      
      <Pressable style={styles.button} 
      onPress={() => {
        Calcular()
        Mensagem()
        }} >
        <Text style={styles.buttonText}> Calcular </Text>
      </Pressable> 
      <Text style={styles.resultados}>{resultado.toFixed(2)}</Text>
      <Text style={styles.resultados}> {imc} </Text>
    </View>    

  );
}