

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Exemplos from '../exemplos';
import Props from '../Ex_02';
import Exemplo_3 from '../Ex_03';
import Exemplo4 from '../Ex_4';
import Exemplo_05 from '../Ex_05';
import Exemplo_06 from '../Ex_06';
import Exemplo_07 from '../Ex_07';
import Exemplo_08 from '../Ex_08';
import Atv_01 from '../Atv_01/index';
import Atividade_03 from '../Atividade_03';
import Atividade_04 from '../Atividade_04/index';

const Stack = createNativeStackNavigator();

export default function Navegacao() {
  return (
    
        <Stack.Navigator>
        {/* <Stack.Screen name="Home">
          {(props) => <HomeScreen {...props} extraData={someData} />} 
        </Stack.Screen> */}
        <Stack.Screen name="Ex0" component={Exemplos} options={{ title: 'EXEMPLOS' }} />
        <Stack.Screen name="Ex2" component={Props} options={{ title: 'EXEMPLO 2' }} />
        <Stack.Screen name="Ex3" component={Exemplo_3} options={{ title: 'EXEMPLO 3' }} />
        <Stack.Screen name="Ex4" component={Exemplo4} options={{ title: 'EXEMPLO 4' }} />
        <Stack.Screen name="Ex5" component={Exemplo_05} options={{ title: 'EXEMPLO 5' }} />
        <Stack.Screen name="Ex6" component={Exemplo_06} options={{ title: 'EXEMPLO 6' }} />
        <Stack.Screen name="Ex7" component={Exemplo_07} options={{ title: 'EXEMPLO 7' }} />
        <Stack.Screen name="Ex8" component={Exemplo_08} options={{ title: 'EXEMPLO 8' }} />

        <Stack.Screen name="Atv1" component={Atv_01} options={{ title: 'ATIVIDADE 1' }} />
        <Stack.Screen name="Atv3" component={Atividade_03} options={{ title: 'ATIVIDADE 3' }} />
        <Stack.Screen name="Atv4" component={Atividade_04} options={{ title: 'ATIVIDADE 4' }} />
      </Stack.Navigator>
    
  );
}