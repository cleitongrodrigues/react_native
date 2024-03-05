// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';
 

// import Props from './src/Ex_02';
import Index from './src/Atv_01';



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
      <Index/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: '#90CAF9',
    padding: 8,
    
  },
  image:{
    maxWidth : '100%',
    maxHeight : '100%',
    display : 'block'
  },
});