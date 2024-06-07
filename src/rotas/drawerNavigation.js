import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Sobre from '../sobre';
import Navegacao from './stackNavigation';

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <NavigationContainer>
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={Navegacao} />
            <Drawer.Screen name="Sobre" component={Sobre} />
        </Drawer.Navigator>
    </NavigationContainer>
  );
}