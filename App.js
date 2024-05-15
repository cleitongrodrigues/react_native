// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';
 

// import Props from './src/Ex_02';
// import Index from './src/Atv_01';

// import index from './src/Ex_03/index';
// import Exemplo_3 from './src/Ex_03/index';
// import Exemplo_3 from './src/Atividade_03/index';
// import Exemplo_04 from './src/Ex_4';
// import Atividade4 from './src/Atividade_04';
// import Exemplo_05 from './src/Ex_05';
// import Exemplo5 from './src/Ex_05/atividade5/index'
// import Exemplo_06 from './src/Ex_06/index'
// import Exemplo_07 from './src/Ex_07/index'
import Exemplo_08 from './src/Ex_08';



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
      <Exemplo_08/>
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