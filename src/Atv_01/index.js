import { Text, View, Image } from "react-native";
import styles from "./style";
import Saudacoes from "./saudacoes";


export default function Index() {
    return(
        <View style={styles.container}>
            <Image source= {require=('../../assets/002-1-react-native.png')} style={styles.image}/>
            <Text style={styles.paragraph}>
                Exemplo 2
            </Text>

                <Saudacoes name='Mario'/>
                <Saudacoes name='Maria'/>
                <Saudacoes name='Bruna'/>
                <Saudacoes name='Bruno'/>
                
        </View>
    );
}