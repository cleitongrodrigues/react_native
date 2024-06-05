import { useState } from 'react';

import {View, FlatList} from 'react-native';

import {UUID } from 'react-native-uuid';

import Header from './Header';

import ItemLista from './itemLista.js';

import styles from './styles';

export default function Exemplo_08(){
    
    const [itens, setItens] = useState([
        // {id: UUID.v4(), item: 'Leite'},
        // {id: UUID.v4(), item: 'Ovos'},
        // {id: UUID.v4(), item: 'Mamão'},
        // {id: UUID.v4(), item: 'Banana'},
        // {id: UUID.v4(), item: 'Alface'}
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
