import {View, StyleSheet} from 'react-native';

import Button from './Button';
import Display from './Display';
import { useState } from 'react';

export default function Exemplo_07(){

    const [displayValue, setDisplayValue] = useState('0');
    const [clearDisplay, setClearDisplay] = useState(false);
    const [operation, setOperation] = useState(null);
    const [values, setValues] = useState([0, 0]);
    const [current, setCurrent] = useState(0);

    function addDigit(n){

        const limpaTela = displayValue === '0' || clearDisplay;

        if (n === '.' && !limpaTela && displayValue.includes('.')){
            return;
        }
        const currentValue = clearDisplay ? '' : displayValue;
        setDisplayValue(currentValue + n);
        setClearDisplay(false);

        if (n !== '.'){
            const novoValor = parseFloat(valorAtualizar);
            const atualizaValor = values;
            atualizaValor[current] = novoValor;
            setValues(atualizaValor);
        }

        setDisplayValue(valorAtualizar);
        setClearDisplay(false);
    }

    function clearMemory(){
        setDisplayValue('0');
        setClearDisplay(false);
        setOperation(null);
        setValues([0, 0]);
        setCurrent(0);
    }

    function defineOperacao(operation){
        if (current === 0){
            setOperation(operation);
            setCurrent(1);
            setClearDisplay(true);
        } else {
            const sinalIgual = operacao === '=';
            const valores = values;

            valores[0] = eval(valores[0] + operation + valores[1]);
            valores[1] = 0;
            setDisplayValue(values[0].toString());
            setCurrent(sinalIgual ? 0 : 1);
            setClearDisplay(true);
            setValues(valores);
        }

    }
    
    return(
        <View style={styles.container}>
            <Display value={displayValue} />
            <View style={styles.buttons}>
                <Button label='AC'triple onClick={() => clearMemory()}/>
                <Button label='/' operation onClick={defineOperacao}/>
                <Button label='7' onClick={addDigit}/>
                <Button label='8' onClick={addDigit}/>
                <Button label='9' onClick={addDigit}/>
                <Button label='*' operation onClick={defineOperacao}/>
                <Button label='4' onClick={addDigit}/>
                <Button label='5' onClick={addDigit}/>
                <Button label='6' onClick={addDigit}/>
                <Button label='-' operation onClick={defineOperacao}/>
                <Button label='1' onClick={addDigit}/>
                <Button label='2' onClick={addDigit}/>
                <Button label='3' onClick={addDigit}/>
                <Button label='+' operation onClick={defineOperacao}/>
                <Button label='0' double onClick={addDigit}/>
                <Button label='.' onClick={addDigit}/>
                <Button label='=' operation onClick={defineOperacao}/>
            </View>
        </View>
    );
    
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        justifyContent:'center',
        backgroundColor:'#EEE',
        padding:8,
    },
    paragraph:{
        margin:6,
        fontSize:18,
        fontWeight:'bold',
        textAlign:'center',
        color:'#AAA',
    },
    buttons:{
        flexDirection:'row',
        flexWrap:'wrap'
    }
}
);

