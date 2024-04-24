import {View, StyleSheet} from 'react-native';

import Button from './Button';
import Display from './Display';
import { useState } from 'react';

export default function Exemplo_07(){

    const [displayValue, setDisplayValue] = useState('0');
    
    return(
        <View style={styles.container}>
            <View style={styles.buttons}>
                <Button label='AC'/>
                <Button label='/'/>
                <Button label='7'/>
                <Button label='8'/>
                <Button label='9'/>
                <Button label='*'/>
                <Button label='4'/>
                <Button label='5'/>
                <Button label='6'/>
                <Button label='-'/>
                <Button label='1'/>
                <Button label='2'/>
                <Button label='3'/>
                <Button label='+'/>
                <Button label='0'/>
                <Button label='.'/>
                <Button label='='/>
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

