import { useState } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';

import styles from './styles';

export default function Atividade4() {

    const [isFocus, setIsFocus] = useState(false);

    function focusHandler() {
        setIsFocus(true);
    }

    function blurHandler() {
        setIsFocus(false);
    }

    const [mensagem, setMensagem] = useState('Inserir nome e sobrenome');
    const [mens1, setMens1] = useState(' ');
    const [mens2, setMens2] = useState(' ');
    const [mensTela, setMensTela] = useState('');

    function atualizaMensagemHandler() {
        setMensagem(mens1 + ' ' + mens2);
        setMens1(' ')
        setMens2(' ')
        
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo 4</Text>

            
            <Text style={styles.txtSaida}>{mensagem}</Text>
            <View style={styles.div}>
            <Text style={styles.txtSaida}>Nome:</Text>
            </View>
            {/* <Text style={styles.txtSaida}>{mensTela}</Text> */}
            <TextInput
                style={styles.txtEntrada}
                // placeholder='Outro texto' 
                onChangeText={(entrada) => setMens1(entrada)}
                value={mens1}
            />
           <View style={styles.div}>
            <Text style={styles.txtSaida}>Sobrenome:</Text>
            </View>
            {/* <Text style={styles.txtSaida}>{mensTela}</Text> */}
            <TextInput
                style={styles.txtEntrada}
                // placeholder='Outro texto' 
                onChangeText={(entrada2) => setMens2(entrada2)}
                value={mens2}
/>
            <Pressable
                onPress={() => atualizaMensagemHandler()}
                style={styles.botao}
            >
                <Text style={styles.txtBotao}>Exibir Texto</Text>
            </Pressable>
        </View>
    );
}