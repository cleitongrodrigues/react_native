import { useState } from 'react';

import {View, FlatList, Text} from 'react-native';

import Header from './Header';

import ItemLista from './itemLista.js';

import styles from './styles';

export default function Exemplo_08(){
    
    const [itens, setItens] = useState([
        {id: 1, item: 'Leite'},
        {id: 2, item: 'Ovos'},
        {id: 3, item: 'Mamão'},
        {id: 4, item: 'Banana'},
        {id: 5, item: 'Alface'}
    ]);
    
    return(
        <View style={styles.container}>
            <Header/>
            <FlatList
                data={itens}
                renderItem={(objeto) => <ItemLista objeto={objeto.item}/>}
            />
        </View>
    )
}
