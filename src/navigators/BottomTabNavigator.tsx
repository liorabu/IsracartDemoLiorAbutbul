import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/homeScreen';
import FavoritesScreen from '../screens/favoritesScreen';

const Tab = createBottomTabNavigator();

const  BottomTabNavigator=() =>{
  return (
    <Tab.Navigator initialRouteName='Home'>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Favorites" component={FavoritesScreen} />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;