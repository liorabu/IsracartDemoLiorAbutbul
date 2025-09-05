import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FavoritesScreen from '../screens/favoritesScreen';
import BookNavigator from './BookNavigator';
import { Routes } from '../constants/navigation';

const Tab = createBottomTabNavigator();

export type RootTabParamList = {
  [Routes.Home]: undefined;
  [Routes.Favorites]: undefined;
};

const  BottomTabNavigator=() =>{
  return (
    <Tab.Navigator initialRouteName={Routes.Home} screenOptions={{
      headerShown:false
    }}>
      <Tab.Screen name={Routes.Home} component={BookNavigator} />
      <Tab.Screen name={Routes.Favorites} component={FavoritesScreen} />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;