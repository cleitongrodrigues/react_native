// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';
 

// import Props from './src/Ex_02';
// import Index from './src/Atv_01';

// import index from './src/Ex_03/index';
// import Exemplo_3 from './src/Ex_03/index';
// import Exemplo_3 from './src/Atividade_03/index';
// import Exemplo_04 from './src/Ex_4';
import Atividade4 from './src/Atividade_04';



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
      <Atividade4/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: "center",
    backgroundColor: '#b71c1c',
    padding: 8,
    
  },
  image:{
    maxWidth : '100%',
    maxHeight : '100%',
    display : 'block'
  },
});