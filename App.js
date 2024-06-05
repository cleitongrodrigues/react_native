import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';
 
import Navegacao from './src/rotas/stackNavigation';



// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Props mensagem={"Sistema react-native"}/>
//       <Props mensagem={"Hoje está calor"}/>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

export default function App(){
  return(
    <View style={styles.container}>
      <Navegacao/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: "center",
    backgroundColor: '#03a9f4',
    padding: 8,
    
  },
  image:{
    maxWidth : '100%',
    maxHeight : '100%',
    display : 'block'
  },
});