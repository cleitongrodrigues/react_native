import { Text, View, Image } from "react-native";
import styles from "./style";
import Saudacoes from "./saudacoes";

import logo from '../../assets/002-1-react-native.png';


export default function Index() {
    return(
        <View style={styles.container}>
            <Image source= {logo} style={styles.image} resizeMode="contain"/>
            <Text style={styles.paragraph}>
                Exemplo 2
            </Text>

                <Saudacoes name='Mario'/>
                <Saudacoes name='Maria'/>
                <Saudacoes name='Bruna'/>
                <Saudacoes name='Bruno'/>
                
        </View>
    );

    // resizeMode="contain" caso não couber na tela ele a diminui de tamanho!
}