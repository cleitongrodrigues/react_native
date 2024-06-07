import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function BottonTabNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Exemplos" component={HomeScreen} />
      <Tab.Screen name="Atividades" component={SettingsScreen} />
    </Tab.Navigator>
  );
}